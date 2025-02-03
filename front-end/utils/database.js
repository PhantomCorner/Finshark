import mongoose from "mongoose";
let isConnected = false;
export const connectToDb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI),
      {
        dbName: "shart_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
    isConnected = true;
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};
