import React from 'react';
import Layout from '../components/layout'
import CurrentLocationMap from '../components/currentLocationMap'

const PubSearchResults = (props) => (

  <Layout titleName={"Map View"}>
    <h1>Map!</h1>
    <CurrentLocationMap/>
  </Layout>

);

export default PubSearchResults;
