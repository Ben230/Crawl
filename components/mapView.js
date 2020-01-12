import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

// function fetcher(url) {
//   return fetch(url).then(r => r.json());
// }

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {pubs:[]}
  }


  componentDidMount(){
    console.log("Method runs!")
    fetch(`/api/pubs`)
    .then(response => response.json())
    .then(result => {
      var pubsArray = result.myJson.results
      this.setState({pubs:pubsArray})
    } );

  }

   render() {
   const GoogleMapContainer = withGoogleMap(props => (
     <GoogleMap
        defaultCenter = { { lat: 51.516967, lng: -0.073133 } }
        defaultZoom = { 14 }>
        {this.state.pubs.map(pub => (
          <Marker position={{ lat: pub.geometry.location.lat, lng: pub.geometry.location.lng }} />
        ))}

    </GoogleMap>
  ));
   return(
      <div>

        <GoogleMapContainer
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};

export default Map;
