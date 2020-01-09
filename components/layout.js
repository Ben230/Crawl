import React from 'react'

import Head from 'next/head'
const Layout = (props) => (
  <div className='root'>
    <Head>
    <title>{props.titleName}</title>
    <script src="https://maps.googleapis.com/maps/api/js?key=[KEY HERE]"></script>
    </Head>
        {props.children}
      </div>
)

export default Layout;
