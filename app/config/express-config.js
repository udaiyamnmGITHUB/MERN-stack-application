var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
//var employeeDbConfig = require('./db-config/mongo-db-config');

module.exports = function(express, app, routes) {

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
    app.use(cookieParser()); // read cookies (needed for auth)
    app.use(bodyParser()); // get information from html forms
    app.set('view engine', 'ejs'); // set up ejs for templating


    app.use(express.static( path.join(__dirname + '/../views') ));
    app.set('views', path.join(__dirname + '/../views'));

    /*app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');*/

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({limit: '50000kb'}));
    
    app.use('/', routes);
};