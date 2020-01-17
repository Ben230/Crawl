import mongoose from 'mongoose';

export default async () => {

  // if (mongoose.connections[0].readyState) return;
  // Using new database connection
  await mongoose.connect("mongodb+srv://cluster0-jygbk.mongodb.net/crawl",
  { useNewUrlParser: true, user: "Crawl_1", pass: "crawl" });
};
