const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        max: 200
    },
    description: {
        type: String,
        max: 500
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: [],
    },
}, {
    timestamps: true
});

modulues.exports = postSchema;