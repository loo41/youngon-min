const moogose = require('mongoose');
const Schema = moogose.Schema;

const NoticeSchema = new Schema({
    title: {type: String, index: true},
    picture: String,
    author: String,
    timer: Number,
})

const Notice = moogose.model('notice', NoticeSchema)

module.exports = Notice