const { Schema, model } = require('mongoose');

const sliderSchema = new Schema({
    say: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    url: {

        type: String,
        required: true

    }
}, { timestamps: true })

const Slider = model('slider', sliderSchema);

module.exports.Slider = Slider;