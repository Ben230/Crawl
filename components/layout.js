import React from 'react'

import Head from 'next/head'
const Layout = (props) => (
  <div className='root'>
    <Head>
    <title>{props.titleName}</title>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2tah7a3BQ0UGTg668mtESmzbqjyv_AJQ"></script>
    </Head>
        {props.children}
      </div>
)

export default Layout;
