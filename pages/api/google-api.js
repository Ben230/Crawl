import fetch from 'isomorphic-unfetch';

export default (req, res) => {

  fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.516967,-0.073133&radius=400&keyword=pub&key=${process.env.GOOGLE_MAPS_API_KEY}`)
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
