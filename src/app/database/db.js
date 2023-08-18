import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectDatabase;
