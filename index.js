const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://arca.com.ar");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const PASSWORD = process.env.password;
const RECEIVER = process.env.receiver;
const SENDER = process.env.sender;
const HOST = process.env.host;

app.post("/sendmail", (req, res) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: HOST,
    auth: {
      user: SENDER,
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: SENDER,
    to: RECEIVER,
    subject: `Mensaje de ${req.body.nombre}`,
    html: `<hr>
  <span><b>Nombre: </b></span><span>${req.body.nombre}</span>
  <hr>
  <span><b>Email: </b></span><span>${req.body.email}</span>
  <hr>
  <span><b>Teléfono: </b></span><span>${req.body.telefono}</span>
  <hr>
  <span><b>País: </b></span><span>${req.body.pais}</span>
  <hr>
  <span><b>Empresa: </b></span><span>${req.body.empresa}</span>
  <hr>
  <span><b>Puesto: </b></span><span>${req.body.puesto}</span>
  <hr>
  <span><b>Consulta: </b></span><span>${req.body.consulta}</span>
  <hr>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log("ERROR: ", err.message);
      res.status(500).send("Ups...algo falló 🤷‍♂️");
    } else {
      console.log(info);
      res.status(200).send("Oka! 👍");
    }
  });
});

app.listen(3000);
