const mongoose = require('mongoose');
const user_schema = new mongoose.Schema(
    {
        _id: {type: String, required: true},
        name: {type: String, required: true, max: 100},
        price: {type: Number, required: true}
    },
)

module.exports = mongoose.model('User', user_schema);