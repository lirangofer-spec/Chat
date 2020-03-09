const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    messages: [{
        from: String,
        text: String,
    }]
});

roomSchema.statics.findOrCreateOne = function findOrCreateOne(doc) {
    const Room = this;
    return new Promise((resolve, reject) => {
        Room.findOne(doc).then(found => {
            if (found) {
                return resolve(found);
            } else {
                Room.create(doc).then(resolve).catch(reject);
            }
        });
    });
}

module.exports = mongoose.model('Room', roomSchema);