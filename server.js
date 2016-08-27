console.log("process.env.NODE_ENV:::"+ process.env.NODE_ENV);
console.log("test commit");
var express = require('express');
var app = express();
var appConfig = require("./app/config/app-config");
appConfig.intializeTheAppConfig();
module.exports = exports = app;
