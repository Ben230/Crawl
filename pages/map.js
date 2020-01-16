import React from 'react';
// import ReactDOM from 'react-dom';
import Link from 'next/link';
import Layout from '../components/layout'
import MapView from '../components/mapView'
import CurrentLocationMap from '../components/currentLocationMap'

const PubSearchResults = (props) => (

<Layout titleName={"Map View"}>

    <CurrentLocationMap/>

  </Layout>

);

export default PubSearchResults;
