var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    createdAt: { type: Date, default: Date.now }
}));
