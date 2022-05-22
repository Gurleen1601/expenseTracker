const User=require('../../model/User');

//Register a new user
const registerUser= async (req,res) =>{
    const {email,firstname,lastname,password} = req?.body;
   try {
   //check if user exists already
   const userExists=await User.findOne({email});
   
   if(userExists){
       res.json('User already exists');
   }
   const user=await User.create({email,firstname,lastname,password});
   res.status(200).json(user);
   }catch(error){
      res.json(error);
   }
};
module.exports = registerUser;
