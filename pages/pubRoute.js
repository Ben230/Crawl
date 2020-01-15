import React from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/layout';
import MapWithADirectionsRenderer from '../components/directionsMap'
import PubListView from '../components/pubListView'
import PubRoute from '../components/pubRoute'

const PubRouteView = () => (
  <Layout>
  <PubRoute/>
  </Layout>
);

export default PubRouteView;
