import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import fetch from 'isomorphic-unfetch';


class Map extends Component {
   render() {
   const GoogleMapExample = withScriptjs(withGoogleMap((props) =>
     <GoogleMap
        defaultCenter = { { lat: 51.5176597, lng: -0.072768 } }
        defaultZoom = { 16 }
        >
          {<Marker position={{ lat: 51.5176597, lng: -0.072768 }} />}
          {<Marker position={{ lat: 51.5176, lng: -0.072768 }} />}
    </GoogleMap>
  ));
   return(
      <div>
        <GoogleMapExample
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2tah7a3BQ0UGTg668mtESmzbqjyv_AJQ&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
   );
   }
};

// Map.getInitialProps = async function() {
//   const res = await fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5176597,-0.072768&radius=1500&keyword=pub&key=AIzaSyC3T0o3mejJzeoQMxzpk0aRhXfo4mVPpkQ");
//   const data = await res.json();
//   console.log("hi");
//   console.log(data);
//
//   return {
//     shows: data.map(entry => entry.show)
//   };
// };
export default Map;
