var request = require('supertest');
var chai = require('chai')
	, should = chai.should();

describe('MachineCOntroller' , function(){
	describe('get', function(done){
		request(sails.hooks.http.app)
		.get('/user/create')
		.expect(200, done);
	});
});