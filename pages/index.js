import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout'

const Index = () => (
  <Layout titleName={"Crawl"}>
    <div>
    <Link href="/map">
      <a>Find Pubs Near Me!</a>
    </Link>
    </div>
  </Layout>
)


export default Index;
