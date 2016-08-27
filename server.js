console.log("process.env.NODE_ENV:::"+ process.env.NODE_ENV);
console.log("this commmit from the local");
var express = require('express');
var app = express();
var appConfig = require("./app/config/app-config");
appConfig.intializeTheAppConfig();
module.exports = exports = app;