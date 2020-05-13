const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MeterSchema = new Schema({
    id_no: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    meter_no: {
        type: Number,
        required: '{PATH} is required'
    },
    previous_reading: {
        type: Number,
        required: '{PATH} is required'
    },
    current_reading: {
        type: Number,
        required: '{PATH} is required'
    }
})

module.exports = Meter = mongoose.model('Meter', MeterSchema)