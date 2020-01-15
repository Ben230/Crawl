import connectToDb from '../db';
import mongoose from 'mongoose';
const PubsSchema = new mongoose.Schema(
  {pubs: [{
            place_id: String,
            name: String,
            rating: Number,
            vicinity:String
          }
  ]}
)
const Pub = mongoose.model("Pub", PubsSchema);

export default (req, res) => {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ id, name: `User ${id}` })
      break
    case 'POST':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}



// export default async (req, res) => {
//   // await connectToDb();
//   // const kittySchema = new mongoose.Schema({name: String})
//
//   const {
//      query: { id },
//    } = req
//
//    res.end(`Post: ${id}`)
//   // var silence = new Kitten({name: "Hello"});
//   // console.log(silence.name)
//   //
//   // silence.save(function (err, silence) {
//   // if (err) return console.error(err);
//   // res.send("hello world")
//
// });
//
//   // const { email, password } = req.body;
//   // User.findByCredentials(email, password)
//   //   .then(user => user.generateSessionId())
//   //   .then(sessionId => {
//   //     const { name } = user;
//   //     res
//   //       .setHeader("Set-Cookie", `sessionId=${sessionId}; HttpOnly; Secure`)
//   //       .send(`welcome my homie, ${name}`);
//   //   })
//   //   .catch(e => {
//   //     // reject due to wrong email or password
//   //     res.status(401).send("who are u, i dun know u, go away");
//   //   });
//
// };
