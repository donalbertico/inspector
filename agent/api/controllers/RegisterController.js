/**
 * RegisterController
 *
 * @description :: Server-side logic for managing registers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create : function(req,res,next){
		var machine = req.param('machine'); 
		
		Register.create({machine : machine},function(err,register){
			console.log(err);
			return res.json(register);
		});
	}
};

