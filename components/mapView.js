import React, { Component } from 'react';
import CurrentLocationMap from './currentLocationMap'
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
import fetch from 'isomorphic-unfetch';
import PubListView from './pubListView'

class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pubs:[],
      pubsForRoute:[],
      zoom: 14}

  }

  componentDidMount(){
    fetch(`/api/pubs?lat=${this.props.centerLat}&lng=${this.props.centerLng}`)
    .then(response => response.json())
    .then(result => {
      var pubsArray = result.pubResponse
      this.setState({pubs:pubsArray})
    } );
  }

  handleClick (pubID){
    this.setState({
      pubsForRoute: [...this.state.pubsForRoute, pubID]
    })
  }

  iconSelector(pub) {
    if (!this.state.pubsForRoute.includes(pub)){
      return "/static/images/beer-mug.png"
    }else {
      return "/static/images/beer-mug-green-tick.png"
    }
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
          onClick={() => this.handleClick(pub)}
          icon={{url: this.iconSelector(pub), scaledSize: new google.maps.Size(30,30)}}
          >
            <div></div>
          </MarkerWithLabel>
        ))}
      </GoogleMap>
      ));

      return(
          <div>
            <h5 id="touchInstructions"> Touch the pints and we'll build the crawl!</h5>
            <GoogleMapContainer
              containerElement={ <div style={{ height: `600px`, width: '100%' }} /> }
              mapElement={ <div style={{ height: `100%` }} /> }
            />
            
            <PubListView pubs={this.state.pubsForRoute} buttonIsHidden={this.state.pubsForRoute.length <= 0}/>
          </div>
       );
   }
};

export default MapView;
