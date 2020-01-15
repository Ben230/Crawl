import React from 'react'
import Link from "next/link"



class ButtonWithObj extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>

          <Link href={{ pathname: this.props.pathName, query: { selectedPubs: JSON.stringify(this.props.object)  } }}>
           <button>{this.props.buttonName}</button>
          </Link>
          </div>
    )



  }
}











export default ButtonWithObj;
