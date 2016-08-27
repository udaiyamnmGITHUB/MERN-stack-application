var mongoose = require('mongoose');
var ERP_APP_DB = {};
var db = mongoose.connection;
var db_url = {
	dev: 'mongodb://localhost/ERP_APP',
	test: 'mongodb://localhost/ERP_APP_test'
};

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
	console.log('ERP_APP db	 is connected!');
});

ERP_APP_DB.connectDb = function() {

	mongoose.connect(db_url[process.env.NODE_ENV || db_url.test], function(err, res) {
		if (err) {
			console.log('Error connecting to the database. ' + err);
		} else {
			console.log('Connected to Database: ' + db_url[process.env.NODE_ENV]);
		}
	});

	mongoose.connect(ERP_APP_DB.url);
};

module.exports = ERP_APP_DB;