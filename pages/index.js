import Link from 'next/link';
import React from 'react';
import Layout from '../components/layout'

const Index = () => (
  <Layout titleName={"Crawl"}>
    <div>


    <img id="homePageImage" src="/static/images/crawl-duff-beer.png" height="400" width="400"/>

    <Link href="/map">
    <button type="button" className="btn btn-primary btn-lg btn-block">Find Pubs Near Me!</button>
    </Link>




    </div>
  </Layout>
)


export default Index;
