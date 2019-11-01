const mongoose = require('mongoose');


const brandSchema = mongoose.Schema({
	name:{
		required:true,
		type:String,
		maxlength:100,
		unique:1
	}
});


const Brand = mongoose.model('Brand',brandSchema)

module.exports = { Brand }

