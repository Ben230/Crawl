import React from 'react'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


const PubsSearch = (props) => (
  <div>
  <h2>Pubs</h2>
  <ul>
  {
    props.pubs.map(pub => (
    <li key={pub.id}>{pub.name}</li>
  )
 )
}
  </ul>
  </div>

)



PubsSearch.getInitialProps = async function() {
  const res = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5176597,-0.072768&radius=1500&keyword=pub&key=${process.env.GOOGLE_MAPS_API_KEY}`);
  const data = await res.json();

  // console.log(`Show data fetched. Count: ${data}`);

  return {
    pubs: data.results
  };
};

export default PubsSearch
