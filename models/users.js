const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  id_no: {
    type: Number,
    required: true
  },
  phone_no: {
    type: String,
    required: true
  },
  meter: [
    {type: Schema.Types.ObjectId, ref: 'Meter'}
  ]
});

module.exports = User = mongoose.model("User", UserSchema);
