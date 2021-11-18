const express = require("express");
const bcrypt = require("bcryptjs");
const Client = require("../models/client");
const app = express();

app.get("/client", (req, res) => {
  Client.find({}, "clientname email password descripcio cognom telefon edad").exec((err, clients) => {
        if (err) {
        return res.status(400).json({
            ok: false,
            err,
        });
        }
        res.json({
        ok: true,
        clients,
        });
    });
});

app.put("/client", (req, res) => {
  const {clientname, email, password, descripcio, cognom, telefon, edad} = req.body;
  let client = new Client({
    clientname,
    email,
    password: bcrypt.hashSync(password, 10),
    descripcio,
    cognom,
    telefon,
    edad,
  });
  
    client.save((err, clientDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }
      res.json({
        ok: true,
        user: clientDB,
      });
    });
});


app.delete("/client",(req,res) => {
    Client.deleteOne({_id: req.body.id}, (err) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      };
  
      res.json({
        ok: true,
      });
    });
})
module.exports = app;

















  