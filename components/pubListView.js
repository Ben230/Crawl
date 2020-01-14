import React from 'react';
import Link from 'next/link';

class PubListView extends React.Component {
  constructor(props) {
    super(props)

  };

  render() {
    return(
      <div>
        <ul>
        {this.props.pubs.map(pub =>(
          <li id={pub.id}>{pub.name}</li>
        )
      )}
        </ul>
        <Link href={{ pathname: '/pubRoute', query: { selectedPubs: JSON.stringify(this.props.pubs)  } }}>
        <button>Calculate route!</button>
        </Link>
      </div>
    )
  }
};

export default PubListView;
