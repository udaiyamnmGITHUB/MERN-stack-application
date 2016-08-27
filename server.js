console.log("pullling update fro the master and commiting to branch at 12.57 AM");
console.log("introducing the session management in this app");
console.log("process.env.NODE_ENV:::"+ process.env.NODE_ENV);

var express = require('express');
var app = express();
var appConfig = require("./app/config/app-config");
appConfig.intializeTheAppConfig();
module.exports = exports = app;
