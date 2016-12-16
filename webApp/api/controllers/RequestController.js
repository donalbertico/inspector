/**
 * RequestController
 *
 * @description :: Server-side logic for managing requests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');

module.exports = {
		get: function(req,res,next){
		
		request.get({
		        url: 'http://localhost:1337/register'
		    }, function(error, response, body) {
		        if (error) {
		            sails.log.error(error);
		        }
		        else {

		           console.log(body);
		           return res.view('register',{response : body});
		        }
		    });
	}
};

