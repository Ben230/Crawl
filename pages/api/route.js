import connectToDb from './db';
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
  var routeObj = JSON.parse(req.body)
  console.log(routeObj)
  var route = new Route(routeObj)
  route.save(function(err,route) {
    if (err) return console.log(err);
  })

  res.status(200).json({ route })

}
