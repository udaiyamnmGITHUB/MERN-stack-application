var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var mongoStoreInstance = new MongoStore({
    db: 'ERP_APP',
    host: 'localhost',
    port: 27017,
    collection: 'session-ERP',
    autoReconnect: true
});
// Catch errors 
mongoStoreInstance.on('error', function (error) {
    console.log("not able to connect to MongoStore");
});

// var redis = require('redis');
// var client = redis.createClient();
//var RedisStore = require('connect-redis')(express);


app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    cookie: { maxAge: 1000 * 60 * 2 },
    secret: "session secret",
    store: mongoStoreInstance
}));

app.use(session({
    cookie: { maxAge: 1000 * 60 * 2 },
    secret: "session secret",
    store: mongoStoreInstance
}));



app.get('/', function (req, res) {
    res.send("Welcome to Nodejs.");
});

app.get('/awesome', function (req, res) {
    if (req.session.lastPage) {
        res.write('Last page was: ' + req.session.lastPage + '. ');
        res.end();
    }
    else {
        req.session.lastPage = '/awesome';
        res.send('Your Awesome.');
    }

});

app.get('/radical', function (req, res) {
    res.send('What a radical visit!, coool');
});
app.get('/tubular', function (req, res) {
    res.send('Are you a surfer?');
});
//If you host the application on Modulus the PORT environment variable will be defined,
//otherwise I’m simply using 8080.
app.listen(process.env.PORT || 3000);