// require the library
const mongoose = require('mongoose');


const dbConnect = async () => {
    try {
        //connect to the database
      await mongoose.connect("mongodb+srv://Gurleen:cZDBniH3D9zxoCko@expense-tracker.jews5.mongodb.net/?retryWrites=true&w=majority", {
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log("Database is Connected Successfully");
    } catch (error) {
      console.log(`Error ${error.message}`);
    }
  };
  
  module.exports = dbConnect;

  