import mongoose from 'mongoose';

export default async () => {
  await mongoose.connect("mongodb+srv://cluster0-jygbk.mongodb.net/crawl",
  { useNewUrlParser: true, user: "Crawl_1", pass: "crawl" });
};
