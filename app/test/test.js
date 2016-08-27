var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require("mongoose");
var server = require('../../server');
var should = chai.should();
chai.use(chaiHttp);
var User = require("../model/user");

describe('Users', function() {
/*
	beforeEach(function(done) {

		User.collection.drop();

		var newUser = new User({
			"email": "test1@gmail.com",
			"password": "12345"
		});
		newUser.save(function(err) {
			done();
		});
	});
	afterEach(function(done) {
		//User.collection.drop();
		done();
	});*/



	it('should login using post method', function(done) {
		chai.request(server)
			.post('/login')
			.send({
				local: {
					email: "udai@gmail.com",
					password: "12345"
				}
			})
			.end(function(err, res) {
				res.should.have.status(200);
				done();
			});
	});
});