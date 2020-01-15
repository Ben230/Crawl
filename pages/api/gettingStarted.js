var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://cluster0-jygbk.mongodb.net/test",  { useNewUrlParser: true, user: "Crawl_1", pass: "crawl" })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected!")

});
