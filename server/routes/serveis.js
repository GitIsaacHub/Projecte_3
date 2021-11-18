const express = require("express");

const bcrypt = require("bcryptjs");

const Servei = require("../models/servei");
const user = require("../models/user");

const app = express();

app.get("/servei", (req, res) => {
  Servei.find({}, "serveiname email").exec((err, serveis) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      serveis,
    });
  });
});

app.put("/servei", (req, res) => {
  const {serveiname, email, password,} = req.body;
  let servei = new Servei({
      serveiname,
      email,
      password,
  });

  servei.save((err, servei) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }
    res.json({
      ok: true,
      user: servei,
    });
  });
});


module.exports = app;
