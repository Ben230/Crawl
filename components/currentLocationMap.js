import React from "react";
import MapView from "./mapView"
import { geolocated } from "react-geolocated";

class CurrentLocationMap extends React.Component {



  render() {
      // this.returnLatLng()
    return  this.props.isGeolocationAvailable ?
        // Geolocation Available / browser supports the Geolocation API == true
        this.props.isGeolocationEnabled ?
        // Geolocation Enable / User has allowed the use of the Geolocation API == true
        this.props.coords ? (
          <div>
          <MapView centerLat={this.props.coords.latitude} centerLng={this.props.coords.longitude}/>
          </div>
        ) : (
          <div>
            <p>Loading Map...</p>
          </div>
        ) :
        // Geolocation Enable / User has allowed the use of the Geolocation API == false
        (
          <div>
            <MapView/>
          </div>
        ) :
        // Geolocation Available / browser supports the Geolocation API == false
         (
           <div>
              <MapView/>
            </div>
         );
      }


}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(CurrentLocationMap);
