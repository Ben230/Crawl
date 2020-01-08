// import React from 'react';
// import ReactDOM from 'react-dom';
// import Link from 'next/link';
import Fetch from 'isomorphic-unfetch';
// import Layout from '../components/layout'
// const fetch = require("node-fetch");


const MapView = (props) => (
    <div>

      <h1>Map!</h1>
      {props.gmapjson}

    </div>

);

MapView.getInitialProps = async function() {
  const res = await fetch
  ('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5176597,-0.072768&radius=1500&keyword=pub&key=AIzaSyA2tah7a3BQ0UGTg668mtESmzbqjyv_AJQ');
  const data = await res.json();

  return {
    gmapjson: data
  };
}

export default MapView;
