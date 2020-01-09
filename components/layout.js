import React from 'react'

import Head from 'next/head'
const Layout = (props) => (
  <div className='root'>
    <Head>
    <title>{props.titleName}</title>
    </Head>
        {props.children}
      </div>
)

export default Layout;
