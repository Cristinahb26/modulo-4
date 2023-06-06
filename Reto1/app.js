const express = require("express");
const cors = require('cors');
const userRouters = require("./router/user.routers");
const errorHandling = require("./error/errorHandling");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(userRouters);
app.use(function (req, res, next)
     {
         res.status(404).json({error:true,
                               codigo: 404,
                               message: "Endpoint no encontrado"})

})

app.use(errorHandling);

module.exports = app;