import mongoose from "mongoose";

const mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect to MongoDB");
  } catch (error) {
    console.log("Error occured: ", error);
  }
};

export default mongooseConnect;
