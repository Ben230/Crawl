import React from 'react';
import Link from 'next/link';
import ButtonWithObj from './buttonWithObj';

class PubListView extends React.Component {
  constructor(props) {
    super(props)

  };

  render() {
    return(
      <div>
      <div>
        <ul>
        {this.props.pubs.map(pub =>(
          <li id={pub.id}>{pub.name}</li>
        )
      )}
        </ul>
      </div>

      <ButtonWithObj  pathName="/pubRoute" object={this.props.pubs} buttonName="Calculate Crawl!"/>
      </div>

    )
  }
};

export default PubListView;
