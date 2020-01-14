import React from "react";
import PubListView from '../components/pubListView'


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

      var origin ={'placeId': this.props.pubs[0].place_id}
      var arrayLength = this.props.pubs.length - 1
      var destination ={
        'placeId':
        this.props.pubs[ arrayLength ].place_id
      }

      var waypoints = [];
      var i;
      for (i = 1; i < arrayLength; i++) {
        var waypoint = {
          location: {'placeId': `${this.props.pubs[i].place_id}`}
        }
        waypoints.push(waypoint)
      }

      DirectionsService.route({
        origin: origin,
        destination: destination,
        waypoints: waypoints,
        optimizeWaypoints: true,
        travelMode: 'WALKING'

      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {

          const orderPubs = result.geocoded_waypoints.map(location => {
            const container = {}
            var pub = this.props.pubs.find(x => {
              return x.place_id === location.place_id
            })

            container.place_id = location.place_id
            container.name = pub.name
            container.vicinity = pub.vicinity
            container.rating = pub.rating
            return container;
          })
          this.setState({
            orderPubs: orderPubs,
            directions: result,
          });

        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <div>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={origin}
  >
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
    {props.orderPubs && <PubListView pubs={props.orderPubs} buttonIsHidden={true} />}
  </div>

);
export default MapWithADirectionsRenderer;
