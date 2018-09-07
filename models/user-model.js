var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		trim: true,
		unique: true
	},

});

UserSchema.statics.authenticate = function(email, password, callback) {
	User.findOne({ email: email})
		.exec(function(error, user) {
			if(error) {
				return callback(error);
			} else if(!user) {
				var err = new Error('User not found');
				err.status = 401;
				return callback(err);
			}
		})
}