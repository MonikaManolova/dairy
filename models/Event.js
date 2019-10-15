const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fontSize: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Event', eventSchema);