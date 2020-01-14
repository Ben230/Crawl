import fetch from 'isomorphic-unfetch';

export default (req, res) => {

    // console.log('in api')
    // console.log(process.env.GOOGLE_MAPS_API_KEY_SERVER)
    // console.log(process.env.GOOGLE_MAPS_API_KEY_CLIENT)




  fetch(`https://maps.googleapis.com/maps/api/directions/json?key=${process.env.GOOGLE_MAPS_API_KEY_SERVER}&destination=51.5168921,-0.0730285&origin=51.51935599999999,-0.074303&mode=walking&waypoints=51.520155,-0.07425459999999999|51.51713059999999,-0.07905269999999999`)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    res.status(200).json({
      myJson
    });
  })

};
