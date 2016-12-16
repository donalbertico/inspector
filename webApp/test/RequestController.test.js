var request = require('supertest');
var chai = require('chai')
	, should = chai.should();

describe('RequestCOntroller' , function(){
	describe('get', function(done){
		request(sails.hooks.http.app)
		.get('/request/get')
		.expect(200, done);
	});
});