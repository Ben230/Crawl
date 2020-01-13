import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout'

const Index = () => (
  <Layout titleName={"Crawl"}>
    <div>
    <Link href="/map">
      <a>Find Pubs Near Me!</a>
    </Link>
    <p>{process.env.GOOGLE_MAPS_API_KEY_CLIENT}</p>
    <p>{process.env.GOOGLE_MAPS_API_KEY_SERVER}</p>
    </div>
  </Layout>
)


export default Index;
