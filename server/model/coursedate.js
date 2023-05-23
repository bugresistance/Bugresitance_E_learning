const { Schema, model } = require('mongoose');

const courseDateSchema = new Schema({
    dateandtime: {
        type: String,
        required: true
    },
}, { timestamps: true })

const CourseDate = model('courseDate', courseDateSchema);

module.exports.CourseDate = CourseDate;