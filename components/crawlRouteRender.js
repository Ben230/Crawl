import React from 'react';
import MapWithADirectionsRenderer from './directionsMap'

class CrawlRouteRender extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidUpdate() {
    fetch(`/api/route/${this.props.routeId}`)
    .then(response => response.json())
    .then(result => {
      this.setState({pubsRoutes: result})
    });
  }

  render() {
    return this.state.pubsRoutes ? (
      <MapWithADirectionsRenderer pubs={this.state.pubsRoutes} />
      <p>
      {this.state.pubRoutes}
      </p>
    ) : (
      <h2>Loading...</h2>
    )
  }
}

export default CrawlRouteRender;
