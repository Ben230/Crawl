import React from 'react';
import { withRouter } from 'next/router';

function About({ router: { query } }) {
  if (query.selectedPubs) {
    const object = JSON.parse(query.selectedPubs);
    console.log(object)
    return (
      <div>
        {object.map(pub => (

          pub.name

        ))}
      </div>
    );
  }

}
export default withRouter(About);
