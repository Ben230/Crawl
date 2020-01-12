import React from 'react';
// import ReactDOM from 'react-dom';
import Link from 'next/link';
import Layout from '../components/layout'
import MapView from '../components/mapView'



function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const PubSearchResults = (props) => (

<Layout titleName={"Map View"}>
  <h1>Map!</h1>
  <MapView/>
  </Layout>

);


export default PubSearchResults;
