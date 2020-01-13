import React from "react";
import MapView from "./mapView"
import { geolocated } from "react-geolocated";

class CurrentLocationMap extends React.Component {



  render() {
      // this.returnLatLng()
    return  this.props.isGeolocationAvailable ?
        this.props.isGeolocationEnabled ?
        this.props.coords ? (
          <div>
          <MapView centerLat={this.props.coords.latitude} centerLng={this.props.coords.longitude}/>
          </div>
        ) : (
          <div>
            <p>Loading Map...</p>
          </div>
        ) : (
          <div>
          <p>Current Location not enabled</p>

            </div>
        ) :
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
