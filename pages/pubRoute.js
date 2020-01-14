import React from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/layout';
import MapWithADirectionsRenderer from '../components/directionsMap'
import PubListView from '../components/pubListView'

function About({ router: { query } }) {
  if (query.selectedPubs) {
    const object = JSON.parse(query.selectedPubs);
  
    return (
      <div>
          <MapWithADirectionsRenderer pubs={object} />
          <PubListView pubs={object} buttonIsHidden={true} />
      </div>
    );
  } else {
    return (
    <Layout titleName={"Crawl Route"}>
      <h1>crawl route</h1>
    </Layout>
  )
  }

}
export default withRouter(About);
