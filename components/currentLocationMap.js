import React from "react";
import MapView from "./mapView"


class CurrentLocationMap extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      centerLat: 51.516967,
      centerLng: -0.073133,
      zoom: 100}
  }

componentDidMount(){
  var currentLocationMap = this
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      currentLocationMap.setState({lat: position.coords.latitude, lng: position.coords.longitude})
    });

  }
}





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

export default CurrentLocationMap;
