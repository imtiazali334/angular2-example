const mongoose = require('mongoose');

var Bags = mongoose.model('bags', {
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    // salary: { type: Number }
});

module.exports = { Bags  };

