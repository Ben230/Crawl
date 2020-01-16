import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
const Layout = (props) => (

  <div className='root'>
    <Head>
    <title>{props.titleName}</title>
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        </link>

    <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY_CLIENT}&libraries=geometry,drawing,places`}></script>
    </Head>
    <Link href="/">
      <a>Home</a>
    </Link>
      {props.children}
      </div>
)

export default Layout;
