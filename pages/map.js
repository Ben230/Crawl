import React from 'react';
// import ReactDOM from 'react-dom';
import Link from 'next/link';
import Layout from '../components/layout'
import Map from '../components/Map'
// const fetch = require("node-fetch");

const MapView = (props) => (
<Layout titleName={"Map View"}>
  <h1>Map!</h1>
  {
    props.pubs.map(pub => (
      <li>{pub.name}</li>
    ))
  }
  <Map/>
  </Layout>

);

MapView.getInitialProps = async function() {
  // console.log('helo')
  const res = await fetch("https://maps.googleapis.com/maps/api/js?key=AIzaSyA2tah7a3BQ0UGTg668mtESmzbqjyv_AJQ&libraries=places&callback=initMap");


  const data = await res.json();
  // console.log("hi");
  // console.log(data);

  return {
    pubs: data.results
  };
};

export default MapView;
