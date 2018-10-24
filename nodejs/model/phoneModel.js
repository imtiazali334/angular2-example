var mongoose = require('mongoose');
var Phone = mongoose.model('phone',{
    name:{type:String},
    price:{type:Number},
    company:{type:String}
});
module.exports = {Phone}