import React from 'react';
import MapWithADirectionsRenderer from '../components/directionsMap'


 class PubRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // pubObjArr: null
    }
  }

  componentDidMount() {
    fetch(`/api/testSelectedPubs`)
    .then(response => response.json())
    .then(result => {
      var pubsArray = result.results // note: removed result.myJson for mocking
      this.setState({pubObjArr: pubsArray});
    } );
  }

  render() {
    return (
      <div>
      {this.state.pubObjArr && <MapWithADirectionsRenderer pubs={this.state.pubObjArr} />}
      </div>
    )
  }
}

export default PubRoute;
