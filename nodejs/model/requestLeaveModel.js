var mongoose = require('mongoose');

var Reqleave = mongoose.model('requestleave',{
    employeeId:{type:Number},
    name:{type:String},
    resson:{type:String},
    date:{type:String}
});
module.exports = {Reqleave};
