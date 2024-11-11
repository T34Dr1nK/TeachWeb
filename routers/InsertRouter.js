const express = require('express');
const route = express.Router();
const { insertCat } = require("../controller/Insertcontrol.js");

route.post('/NewCat', insertCat);

module.exports = route;