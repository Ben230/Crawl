import connectToDb from '../db';
import mongoose from 'mongoose';

const RoutesSchema = new mongoose.Schema(
  {pubs: [{
            geometry:{
              location: {lat: Number,lng:Number},
              viewport:{northeast:{lat: Number,lng:Number},
                        southwest:{lat: Number,lng:Number}}
            },
            place_id: String,
            name: String,
            rating: Number,
            vicinity:String
          }
  ]}
)

const Route = mongoose.models.Route || mongoose.model("Route", RoutesSchema);

export default async (req, res) => {
  await connectToDb();
  console.log(req.query.id)
  const route = await Route.findById({_id: req.query.id });
  console.err(route)
  res.status(200).json( route.pubs )
}
