import connectToDb from '../db';
import mongoose from 'mongoose';

const Route = mongoose.models.Route

export default async (req, res) => {
  await connectToDb();
  const route = await Route.findById({_id: req.query.id });
  res.status(200).json( route.pubs )
}
