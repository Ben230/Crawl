import mongoose from 'mongoose';

export default async () => {
  await mongoose.connect(process.env.DB_LINK,
  { useNewUrlParser: true, user: process.env.DB_USER, pass: process.env.DB_PASSWORD });
};
