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
  {
    props.pubs.map(pub => (
      <li>{pub.name}</li>
    ))
  }
  <Map/>
  <p> env {process.env.GOOGLE_MAPS_API_KEY} </p>
  </Layout>

);

MapView.getInitialProps = async function() {

  const res = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5176597,-0.072768&radius=1500&keyword=pub&key=${process.env.GOOGLE_MAPS_API_KEY}`);
  const data = await res.json();
  // console.log("hi");
  // console.log(data);

  return {
    pubs: data.results
  };
};

export default MapView;
