import dotenv from 'dotenv';
import app from './app.js';
import connectDb from './config/database.js';
//import session from 'express-session';
//const session=require('express-session');

dotenv.config();

const startserver = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    await connectDb(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
};

startserver();              

