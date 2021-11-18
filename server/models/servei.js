const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let rolesValids = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} no és un rol vàlid",
};

let Schema = mongoose.Schema;

let serveiSchema = new Schema({
  serveiname: {
    type: String,
    
    required: [true, "El nom d'usuari és obligatori"],
  },
  email: {
    type: String,
    
    required: [true, "El correu electrònic és obligatori"],
  },
  password: {
    type: String,
    required: [true, "La contrasenya és obligatoria"],
  },
});

serveiSchema.methods.toJSON = function () {
  let servei = this;
  let serveiObject = servei.toObject();
  return serveiObject;
};

serveiSchema.plugin(uniqueValidator, { message: "{PATH} debe ser único" });

module.exports = mongoose.model("Servei", serveiSchema);
