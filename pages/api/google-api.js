import fetch from 'isomorphic-unfetch';

export default (req, res) => {
  fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5176597,-0.072768&radius=1500&keyword=pub&key=AIzaSyA2tah7a3BQ0UGTg668mtESmzbqjyv_AJQ")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    res.status(200).json({
      myJson
    });
  })

};
