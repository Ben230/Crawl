import fetch from 'isomorphic-unfetch';


export default (req, res) => {

  fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.lat},${req.query.lng}&radius=400&keyword=pub&key=${process.env.GOOGLE_MAPS_API_KEY_SERVER}`)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    res.status(200).json({
      myJson
    });
  })

};
