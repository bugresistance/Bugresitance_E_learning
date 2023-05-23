const { Schema, model } = require('mongoose');

const batchSchema = new Schema({
    batchName: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Batch = model('batch', batchSchema);

module.exports.Batch = Batch;