const mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = mongoose.Schema({
  img: {
    type: String,
    // required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value); 
      },
      message: "Invalid email address format",
    },
  },
  password: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
    min: 1,
    max: 31,
  },
  month: {
    type: Number,
    required: true,
    min: 1,
    max: 12,
  },
  year: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 1 && value <= new Date().getFullYear();
      },
      message: "error",
    },
  },
  gender:{
    type:String,
    required:true,
    lowercase: true,
    enum:['male','female']
  },
  friends:[]
});
const user = mongoose.model("user", UserSchema);
module.exports = user;
