import Head from 'next/head'
const Layout = (props) => (
  <div className='root'>
    <Head>
      <title>Crawl</title>
    </Head>
    {props.children}
  </div>
);

export default Layout;
