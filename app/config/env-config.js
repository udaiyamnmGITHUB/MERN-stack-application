var envConfigObj = {};
var dev = "dev";
var test = "test";
var sit = "sit";
var uat = "uat";
var prod = "prod";
var RC_ENV = '-rc';
process.env.NODE_ENV =  process.env.NODE_ENV || test;
var updateEnv = function(){

	try {
        if (process.env.NODE_ENV === dev) {
            console.log('Environment is::'+ process.env.NODE_ENV);
        }

        if (process.env.NODE_ENV === test) {
		  console.log('Environment is ::'+ process.env.NODE_ENV);
        }

    }
    catch (error) {
        console.log('Error occurred to set the environment', error);
        process.env.NODE_ENV = originalEnvVal;
    }

};

envConfigObj.updateEnv = updateEnv;

module.exports = envConfigObj;