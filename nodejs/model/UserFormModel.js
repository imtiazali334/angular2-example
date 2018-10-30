const mongoose = require('mongoose');

var UserForm = mongoose.model('userforms',{
    name: { type: String },
    email: { type: String },
    address:{
    street: { type: String },
    city:{type:String },
    zip:{type:Number}
    },
    country:{ type:String}
})

module.exports = { UserForm  };

