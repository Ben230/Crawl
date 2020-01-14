import React from 'react';
import Link from 'next/link';
import ButtonWithObj from './buttonWithObj';

class PubListView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonIsHidden: true
    }

  };

  render() {
    return(
      <div>

      {this.props.pubs.map(pub =>(
        <div id={pub.id}>
        <h3 >{pub.name}</h3>
        <p >Pub Rating: {pub.rating}</p>
        <p >address: {pub.vicinity}</p>
        </div>
      )
    )}

    {!this.props.buttonIsHidden && <ButtonWithObj  pathName="/pubRoute" object={this.props.pubs} buttonName="Calculate Crawl!"/>}
    </div>

    )
  }
};

export default PubListView;
