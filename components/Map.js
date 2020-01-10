import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

// function fetcher(url) {
//   return fetch(url).then(r => r.json());
// }

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
     <GoogleMap
        defaultCenter = { { lat: 51.5176597, lng: -0.072768 } }
        defaultZoom = { 16 }>
        {<Marker position={{ lat: 51.5176597, lng: -0.072768 }} />}
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
