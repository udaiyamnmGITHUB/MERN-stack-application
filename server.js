console.log(" this is from the VS code but to master");
console.log("introducing the session management in this app");
console.log("process.env.NODE_ENV:::"+ process.env.NODE_ENV);

var express = require('express');
var app = express();
var appConfig = require("./app/config/app-config");
appConfig.intializeTheAppConfig();
module.exports = exports = app;
console.log("from master");
console.log("from branch - 1");
