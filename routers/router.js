const express = require('express');
const route = express.Router();
const { testSys } = require("../controller/control.js");

route.get('/test', testSys);

module.exports = route;