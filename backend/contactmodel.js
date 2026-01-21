const { default: mongoose } = require("mongoose");

let messageSchema = new mongoose.Schema({}, { strict: false })

let Message = mongoose.model('message', messageSchema)

module.exports = Message;