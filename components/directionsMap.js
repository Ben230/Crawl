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
      var origin ={'placeId': this.props.pubsArray.results[0].place_id}
      var destination ={'placeId': this.props.pubsArray.results[this.props.pubsArray.results.length -1].place_id}
      var waypoints = [];
      var i;
      for (i=1; i<this.props.pubsArray.results.length -1; i++) {
          console.log("in loop")
        var waypoint = {
        location: {'placeId': `${this.props.pubsArray.results[i].place_id}`}
      }
        waypoints.push(waypoint)
      }

      console.log('waypoints',waypoints)
    //   var waypoints = [
    //     {location: {'placeId': `${this.props.pubsArray.results[1].place_id}`}},
    //   {location: {'placeId': "ChIJ4-6PJ7QcdkgRLlAsVjwGdf8"}},
    // ]
      DirectionsService.route({
        origin: origin,
        destination: destination,
        waypoints: waypoints,
        //optimizeWaypoints: true,
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
