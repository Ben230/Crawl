import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout'

const Index = () => (
  <Layout titleName={"Crawl"}>
    <div>

    <div id="imgHome">
    <img id="homePageImage" src="/static/images/crawl-duff-beer-2.png" />
    </div>

    <Link href="/map">
    <button id="findPubsNearMe" type="button" class="btn btn-primary btn-lg">Find Pubs Near Me!</button>
    </Link>




    </div>
  </Layout>
)


export default Index;
