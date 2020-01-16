import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout'

const Index = () => (
  <Layout titleName={"Crawl"}>
    <div>


    <img id="homePageImage" src="/static/images/crawl-duff-beer.png" height="500" width="500"/>

    <Link href="/map">
    <button id="findPubsNearMe" type="button" class="btn btn-primary btn-lg">Find Pubs Near Me!</button>
    </Link>




    </div>
  </Layout>
)


export default Index;
