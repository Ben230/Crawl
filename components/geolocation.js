import React from "react";
import { geolocated } from "react-geolocated";

class Geolocation extends React.Component {

  returnLatLng() {
    return   {lat: this.props.coords.latitude, lng: this.props.coords.longitude}


  }

  render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) :

        !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) :

        this.props.coords ? (
          <div>
          {this.returnLatLng()}
          </div>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }


}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Geolocation);
