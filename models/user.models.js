const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phoneNumber: String,
    address: String,
    loanAmount: Number,
    loanStatus: Boolean,
},{
    timestamps: true,
    versionKey: false
});

const User = mongoose.model("User", userSchema);

module.exports = User;