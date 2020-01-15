import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import CrawlRouteRender from '../../components/CrawlRouteRender';


const PubRoute = () => (

<Layout titleName={"Crawl Route"}>
  <div>
    {useRouter().query.id}
  </div>
  </Layout>

);

export default PubRoute;
