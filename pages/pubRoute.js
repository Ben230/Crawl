import React from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/layout';
import MapWithADirectionsRenderer from '../components/directionsMap'
import PubListView from '../components/pubListView'

<<<<<<< HEAD
// function About({ router: { query } }) {
//   if (query.selectedPubs) {
//     const object = JSON.parse(query.selectedPubs);
//     console.log(object)
//     return (
//       <div>
//           <MapWithADirectionsRenderer pubsArray={object} />
//         {object.map(pub => (
//
//           pub.name
//
//         ))}
//       </div>
//     );
//   } else {
//     return (
//     <Layout titleName={"Crawl Route"}>
//       <h1>crawl route</h1>
//     </Layout>
//   )
//   }
//
// }
// export default withRouter(About);

const RouteView () => (

)
=======
function About({ router: { query } }) {
  if (query.selectedPubs) {
    const object = JSON.parse(query.selectedPubs);

    return (
      <div>
          <MapWithADirectionsRenderer pubs={object} />
      </div>
    );
  } else {
    return (
    <Layout titleName={"Crawl Route"}>
      <h1>crawl route</h1>
    </Layout>
  )
  }
>>>>>>> 760b7f4dec969b19577afbe279a4e21236b6db15

export default RouteView;
