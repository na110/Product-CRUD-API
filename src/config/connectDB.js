import mongoose from "mongoose";
const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected!"))
    .catch((error) => console.error(error.message));
};

export default connectDB;
