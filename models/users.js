const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 3
  },
  LastName: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 3
  },
  dob: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    match: /.+@.+\..+/
  },
  phoneNo: {
    type: String,
    required: true,
    maxlength: 20,
    minlength: 3
  },
  

})
userSchema.methods.getFullname = function getFullname() {
  return this.FirstName + " " + this.LastName

}



const userModel = mongoose.model('User', userSchema)
module.exports = userModel