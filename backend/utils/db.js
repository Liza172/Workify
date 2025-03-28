import mongoose from "mongoose"

const connectDB = async() =>  {

  try {
    mongoose.connect("mongodb://127.0.0.1:27017/jobPortal");
    console.log("MOngoose connected successfully");
  } catch(error) {
    console.log(error);
  }
}
 export default connectDB;