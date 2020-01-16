import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import CrawlRouteRender from '../../components/crawlRouteRender';


const PubRoute = () => (

<Layout titleName={"Crawl Route"}>
  <div>
    <CrawlRouteRender routeId={useRouter().query.id} />
  </div>
  </Layout>

);

export default PubRoute;
