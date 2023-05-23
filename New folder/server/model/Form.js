const { Schema, model } = require('mongoose');
const {ObjectId} = Schema.Types

const formSchema = new Schema({
    studentName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    universityName: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    facebookId: {
        type: String,
        required: true
    },
    formalPic: {
        type: String,
        required: true,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Favatar_6386976&psig=AOvVaw1e8SxVaMph6llcnbp-TQpF&ust=1681639141092000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOC377nPq_4CFQAAAAAdAAAAABAK"
    },
    batchId:{
        type:ObjectId,
        ref:'batch',
    }
}, { timestamps: true })

const Form = model('form', formSchema);

module.exports.Form = Form;