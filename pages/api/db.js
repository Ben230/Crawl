// db.js
import mongoose from 'mongoose';


export default async () => {
  if (mongoose.connections[0].readyState) return;
  // Using new database connection
  await mongoose.connect(process.env.DB_LINK,
  { useNewUrlParser: true, user: process.env.DB_USER, pass: process.env.DB_PASSWORD });
};
