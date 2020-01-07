import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';


function FindPubsLink(props) {
  return (
    <Link href="/map">
      <a>{props.name}</a>
    </Link>
  )
}

class HomePage extends React.Component {
  render() {
    return (
      <div class="homePage">
      <FindPubsLink
      name={ "Find Pubs Near Me" }
    />
    </div>
    )

  }
}

export default HomePage;
