const express= require('express');
//requiring the registerUser function from userCtrl.js to pass in the post req
const {
    registerUser,
    fetchUsersCtrl,
}= require('../../controllers/users/usersCtrl');
const userRoute=express.Router();

userRoute.post('/register', registerUser);
userRoute.get('/',fetchUsersCtrl);
module.exports = userRoute;