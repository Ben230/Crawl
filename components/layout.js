import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
const Layout = (props) => (

  <div className='root'>
    <Head>
    <title>{props.titleName}</title>
    <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY_CLIENT}&libraries=geometry,drawing,places`}></script>
    </Head>
    <Link href="/">
      <a>Home</a>
    </Link>
      {props.children}
      </div>
)

export default Layout;
