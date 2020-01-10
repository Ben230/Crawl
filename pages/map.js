import React from 'react';
// import ReactDOM from 'react-dom';
import Link from 'next/link';
import Layout from '../components/layout'
import Map from '../components/Map'



function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const MapView = (props) => (

<Layout titleName={"Map View"}>
  <h1>Map!</h1>
  <Map/>
  <p> env {process.env.GOOGLE_MAPS_API_KEY} </p>
  </Layout>

);


export default MapView;
