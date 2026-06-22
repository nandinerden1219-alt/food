import mongoose from "mongoose";
const URI = process.env.MONGODB_URI;
export const connectDb = async () => {
  try {
    if (!URI) {
      console.log("Uri bhgu bna");
      return;
    }
    await mongoose.connect(URI);
    console.log("dbte amjilttai holbgdlo");
  } catch (error) {
    console.log("dbte holbgdhd aldaa grlaa", error);
  }
};
