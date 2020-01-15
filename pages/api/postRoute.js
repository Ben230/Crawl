import connectToDb from './db';
import mongoose from 'mongoose';
const kittySchema = new mongoose.Schema({name: String})
const Kitten = mongoose.model("Cat", kittySchema);
export default async (req, res) => {
  await connectToDb();
  // const kittySchema = new mongoose.Schema({name: String})


  var silence = new Kitten({name: "Hello"});
  console.log(silence.name)

  silence.save(function (err, silence) {
  if (err) return console.error(err);
  res.send("hello world")

});

  // const { email, password } = req.body;
  // User.findByCredentials(email, password)
  //   .then(user => user.generateSessionId())
  //   .then(sessionId => {
  //     const { name } = user;
  //     res
  //       .setHeader("Set-Cookie", `sessionId=${sessionId}; HttpOnly; Secure`)
  //       .send(`welcome my homie, ${name}`);
  //   })
  //   .catch(e => {
  //     // reject due to wrong email or password
  //     res.status(401).send("who are u, i dun know u, go away");
  //   });

};
