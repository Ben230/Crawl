import React from 'react';
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


      <div className="list-group">


      {this.props.pubs.map(pub =>(


        <a class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{pub.name}</h5>
            <small class="text-muted">Rating: {pub.rating}</small>
          </div>
          <p class="mb-1">{pub.vicinity}</p>

        </a>



        )
      )}




      </div>
      <div className="button">
        {!this.props.buttonIsHidden && <ButtonWithObj  pathName="/pubRoute" object={this.props.pubs} buttonName="Calculate Crawl!"/>}
      </div>


      </div>
    )
  }
};

export default PubListView;
