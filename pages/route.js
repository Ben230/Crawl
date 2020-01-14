import React from 'react';
// import ReactDOM from 'react-dom';
import Link from 'next/link';
import Layout from '../components/layout'
import MapView from '../components/mapView'
import CurrentLocationMap from '../components/currentLocationMap'
import MapWithADirectionsRenderer from '../components/directionsMap'

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Route = (props) => (

<Layout titleName={"Map View"}>
  <h1>Map!</h1>
    <MapWithADirectionsRenderer />
  </Layout>

);

export default Route;
