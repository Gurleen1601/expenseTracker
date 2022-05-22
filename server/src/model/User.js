const mongoose=require('mongoose');

//schema
const userSchema=mongoose.Schema({
    firstname: {
        required: [true, "First name is required"],
        type: String,
      },
      lastname: {
        required: [true, "Last name is required"],
        type: String,
      },
  
      email: {
        type: String,
        required: [true, "Email is required"],
      },
  
      password: {
        type: String,
        required: [true, "Password is required"],
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
},{
    timestamp:true,
});

//compile schema into model
const User=mongoose.model('User',userSchema);

module.exports = User;
