var mongoose = require('mongoose')
var user = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, select: false}
})
module.exports = mongoose.model('User', user)

