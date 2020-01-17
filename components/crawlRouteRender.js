import React from 'react';
import MapWithADirectionsRenderer from './directionsMap'
import generateClickableURL from '../functionHelpers/generateClickableURL'
import Link from "next/link"
class CrawlRouteRender extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidUpdate(prevProps) {
    
    console.log("didupdate")
    if (this.props.routeId !== prevProps.routeId) {
      console.log(this.props.routeId)
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

    return this.state.pubsRoutes ? (<div>



      <MapWithADirectionsRenderer pubs={this.state.pubsRoutes} />
      <form action={this.state.clickableURL}>
               <input type="submit" id="openMaps" class="btn btn-primary btn-lg"value="Open In Maps"/>
            </form>


      </div>
    ) : (
      <img className="loadingGiff" src="/static/giffImage/pub-crawl-loading.gif" />
    )
  }
}

export default CrawlRouteRender;
