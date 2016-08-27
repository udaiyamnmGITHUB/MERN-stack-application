console.log("commited into the branch only  at 12.49 AM");
console.log("introducing the session management in this app");
console.log("process.env.NODE_ENV:::"+ process.env.NODE_ENV);

var express = require('express');
var app = express();
var appConfig = require("./app/config/app-config");
appConfig.intializeTheAppConfig();
module.exports = exports = app;
