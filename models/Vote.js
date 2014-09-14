var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Vote', new Schema({
    upvote: { type: Boolean, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    createdAt: { type: Date, default: Date.now }
}));
