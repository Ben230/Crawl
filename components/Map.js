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
    fetch(`http://localhost:3000/api/google-api`)
    .then(response => response.json())
    .then(result => {
      var pubsArray = result.myJson.results
      this.setState({pubs:pubsArray})


    } );

  }

   render() {
   const GoogleMapExample = withGoogleMap(props => (
     <GoogleMap
        defaultCenter = { { lat: 51.5176597, lng: -0.072768 } }
        defaultZoom = { 14 }>
        {this.state.pubs.map(pub => (
          <Marker position={{ lat: pub.geometry.location.lat, lng: pub.geometry.location.lng }} />
          // <p>lat: {pub.geometry.location.lat} long: {pub.geometry.location.lng}</p>

        ))}

        {<Marker position={{ lat: 51.5176597, lng: -0.072768 }} />}
        {<Marker position={{ lat: 51.5176, lng: -0.072768 }} />}
        {<Marker position={{ lat: 51.5176, lng: -0.072768 }} />}

    </GoogleMap>
  ));
   return(
      <div>

        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};

export default Map;
