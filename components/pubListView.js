import React from 'react';

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
      </div>
    )
  }
};

export default PubListView;
