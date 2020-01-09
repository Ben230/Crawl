import React from 'react';
// import ReactDOM from 'react-dom';
import Link from 'next/link';
import Layout from '../components/layout'
import Map from '../components/Map'
// const fetch = require("node-fetch");

const MapView = () => (
<Layout titleName={"Map View"}>
  <h1>Map!</h1>
  <Map/>
  </Layout>

)

export default MapView;
