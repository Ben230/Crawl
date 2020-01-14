import React, { Component } from 'react';
import CurrentLocationMap from './currentLocationMap'
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import PubListView from './pubListView'

class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pubs:[],
      pubsForRoute:[],
      zoom: 14}
  }

  static defaultProps = {
    centerLat: 51.516967,
    centerLng: -0.073133,
    zoom: 6
  }



  componentDidMount(){
    fetch(`/api/pubs`)
    .then(response => response.json())
    .then(result => {
      var pubsArray = result.myJson.results
      this.setState({pubs:pubsArray})
    } );
  }

  handleClick (pubID){
    console.log('id', pubID)
    this.setState({
      pubsForRoute: [...this.state.pubsForRoute, pubID]
      // pubsForRoute: 'hello'
    })
  }

  render() {

    const GoogleMapContainer = withGoogleMap(props => (
      <GoogleMap
      defaultCenter = { { lat: this.props.centerLat, lng: this.props.centerLng } }
      defaultZoom = { this.props.zoom }>
      {this.state.pubs.map(pub => (
        <MarkerWithLabel
        position={{ lat: pub.geometry.location.lat, lng: pub.geometry.location.lng }}
        labelAnchor={new google.maps.Point(0, 0)}
        labelStyle={{ fontSize: "15px", padding: "8px"}}
        onClick={() => this.handleClick(pub.id)}
        // icon="/static/images/beerIcon.jpeg"
        >
        <div></div>
        </MarkerWithLabel>
      ))}
      </GoogleMap>
      ));

      return(
          <div>

            <GoogleMapContainer
              containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
              mapElement={ <div style={{ height: `100%` }} /> }
            />

            <PubListView pubs={this.state.pubsForRoute} />

          </div>
       );
   }

};



export default MapView;
