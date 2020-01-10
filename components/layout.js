import React from 'react'


import Head from 'next/head'

const Layout = (props) => (

  <div className='root'>
    <Head>
    <title>{props.titleName}</title>
    <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,places`}></script>
    </Head>
        {props.children}
      </div>
)

export default Layout;


// AIzaSyA2tah7a3BQ0UGTg668mtESmzbqjyv_AJQ
