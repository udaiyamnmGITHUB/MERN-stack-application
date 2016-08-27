var http = require('http');
var passport = require('passport');
var express = require('express');
var session = require('express-session');
var flash    = require('connect-flash');
var app = module.exports = express();
var router = express.Router();
var envConfigObj = require('./env-config');
var ERP_APP_DB = require('./mongo-db-config');
var appConfig = {};

var intializeTheAppConfig = function() {
    
    // catch the uncaught errors that weren't wrapped in a domain or try catch statement
    // do not use this in modules, but only in applications, as otherwise we could have multiple of these bound
    process.on('uncaughtException', function(err) {
        // handle the error safely
        console.log('process error is caught' + err.stack);
    });

    // establish mongodb connection
    //set to correct env
    envConfigObj.updateEnv();

    //connect to EmployeeDB
    ERP_APP_DB.connectDb();
    
    require('./passport-config')(app, passport, session, flash);
    require('./express-config')(express, app, router);
        
    // passport config
    
    
   require('../routes/app-routes')(router, passport);
    
    var port = process.env.PORT || '3000';

    //var server = http.createServer(app).listen(port);
    
    //https.createServer(app).listen(port);
    app.listen(port, function () {
            console.log('Example app listening on port 3000!');
    });
    console.log('Server listening on port', port);

};
appConfig.intializeTheAppConfig = intializeTheAppConfig;

module.exports = appConfig;