import mongoose from 'mongoose';

const connectDb = async (mongoUri) => {
  try {
    await mongoose.connect(mongoUri, {
      
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDb;