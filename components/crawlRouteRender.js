import React from 'react';
import MapWithADirectionsRenderer from './directionsMap'
import { withRouter } from 'next/router';

class CrawlRouteRender extends React.Component {

  constructor(props) {
    super(props)
    this.state = {pubRoute: null}
  }

  componentDidUpdate() {
    fetch(`/api/route/${this.props.routeId}`)
    .then(response => response.json())
    .then(result => {
      this.setState({pubsRoutes: result})
    } );

  }

  render() {
    return this.state.pubsRoutes ? (
      <MapWithADirectionsRenderer pubs={this.state.pubsRoutes} />
    ) : (
      <h2>Loading...</h2>
    )
  }
}

export default CrawlRouteRender;
