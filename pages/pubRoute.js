import React from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/layout';

function About({ router: { query } }) {
  if (query.selectedPubs) {
    const object = JSON.parse(query.selectedPubs);
    console.log(object)
    return (
      <div>
        {object.map(pub => (

          pub.name

        ))}
      </div>
    );
  } else {
    return (
    <Layout titleName={"Crawl Route"}>
      <h1>crawl route</h1>
    </Layout>
  )
  }

}
export default withRouter(About);