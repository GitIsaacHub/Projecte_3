const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

let clientSchema = new Schema({
  clientname: {
    type: String,
    unique: true,
    required: [true, "El nom d'usuari és obligatori"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "El correu electrònic és obligatori"],
  },
  password: {
    type: String,
    required: [true, "La contrasenya és obligatoria"],
  },
  descripcio: {
    type: String,
    required: [true, "La descripcio és obligatoria"],
  },
  cognom: {
    type: String,
    required: [true, "El cognom es obligatori"],
  },
  telefon: {
    type: Number,
    required: [true, "El numero de telefon es obligatori"],
  },
  edad: {
    type: Number,
    required: [true, "L'edat es obligatoria"],
  },
  
  
  
});

clientSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

clientSchema.plugin(uniqueValidator, { message: "{PATH} debe ser único" });

module.exports = mongoose.model("Client", clientSchema);
