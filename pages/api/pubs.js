import fetch from 'isomorphic-unfetch';

export default (req, res) => {

  fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.query.lat},${req.query.lng}&radius=400&keyword=pub&key=${process.env.GOOGLE_MAPS_API_KEY_SERVER}`)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    const pubResponse = myJson.results.map(pub => {
      const container = {}
      container.geometry = pub.geometry
      container.name = pub.name
      container.place_id = pub.place_id
      container.rating = pub.rating
      container.vicinity = pub.vicinity
      return container;
    })

    res.status(200).json({
      pubResponse
    });
  })
};
