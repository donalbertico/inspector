/**
 * MachineController
 *
 * @description :: Server-side logic for managing machines
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create : function(req,res,next){

		Machine.create({owner: '5817c7d02288ec121115a06a'},function(err,mach){
			return res.json(mach);
		});
	}
};

