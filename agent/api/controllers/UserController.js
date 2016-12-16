/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create : function(req,res,next){

		User.create({},function(err,user){
			console.log(user);

			return res.json(user);
		});

	}	
};

