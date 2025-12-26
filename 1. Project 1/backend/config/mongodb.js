import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  });
  const uri = (process.env.MONGODB_URI && process.env.MONGODB_URI.trim()) || "mongodb://127.0.0.1:27017";
  const dbName = process.env.DB_NAME || "trendify";

  try {
    await mongoose.connect(`${uri}/${dbName}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message || err);
    console.error(`Tried URI: ${uri}/${dbName}`);
    // Do not throw to keep the server running for UI/dev work; return so routes can still be used where DB isn't required.
    return;
  }
};

export default connectDB;
