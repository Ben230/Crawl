import React from "react";
import MapView from "./mapView"

class CurrentLocationMap extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      locationFound: false}
    }

    componentDidMount(){
      var currentLocationMap = this
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          currentLocationMap.setState({locationFound: true, centerLat: position.coords.latitude,centerLng: position.coords.longitude, zoom: 15, locationFound: true} )
        });
      }
    }

    render() {
      return  this.state.locationFound ? (
        <div>
        <MapView centerLat={this.state.centerLat} centerLng={this.state.centerLng} zoom={this.state.zoom}/>
        </div>
      ) : (
        <img  className="loadingGiff" src="/static/giffImage/pub-crawl-loading.gif" />
      )
    }
  }

  export default CurrentLocationMap;
