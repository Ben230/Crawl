import React from 'react';
import MapWithADirectionsRenderer from './directionsMap'
import generateClickableURL from '../functionHelpers/generateClickableURL'

class CrawlRouteRender extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidUpdate(prevProps) {
    console.log("didupdate")
    if (this.props.routeId !== prevProps.routeId) {
    fetch(`/api/route/${this.props.routeId}`)
    .then(response => response.json())
    .then(result => {
      console.log("didupdate in fetch")
      const clickableURL = generateClickableURL(result)
      this.setState({pubsRoutes: result, clickableURL: clickableURL})
    }
    );
  }

  }

  render() {

    return this.state.pubsRoutes ? (
      <div>
      <MapWithADirectionsRenderer pubs={this.state.pubsRoutes} />
      <a href={this.state.clickableURL}> Click here to show the route on google maps </a>
      </div>
    ) : (
      <h2>Loading...</h2>
    )
  }
}

export default CrawlRouteRender;
