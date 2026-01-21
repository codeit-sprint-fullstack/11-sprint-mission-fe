import mongoose from "mongoose";
import { config } from 'node:process';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection errror', error);
    process;
  }
};

export const disconnectDB = async () => {
  await mongoose.connection.close();
}