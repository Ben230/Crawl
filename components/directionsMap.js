import React from "react";

const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY_SERVER}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount(props) {
      const DirectionsService = new google.maps.DirectionsService();
      console.log('props',this.props)
      //51.5168921
      //-0.0730285

      var waypoints = [{
        location: new google.maps.LatLng(51.5168921,-0.0730285),
        stopover: false
      },
      {
        location: new google.maps.LatLng(51.5188976,-0.0711718),
        stopover: false
      },
      {
        location: new google.maps.LatLng(51.515832,-0.0708476),
        stopover: false
      }
    ]
      DirectionsService.route({
        origin: new google.maps.LatLng(this.props.originlat, this.props.originlng),
        destination: new google.maps.LatLng(51.5158977,-0.0756678),

        waypoints: waypoints,
        optimizeWaypoints: true,
        travelMode: 'WALKING'

      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(51.51935599999999,-0.074303)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
    <p>
  {props.pubs}
  </p>
  </GoogleMap>

);
export default MapWithADirectionsRenderer;
