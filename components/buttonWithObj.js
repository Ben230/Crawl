import React from 'react'
import Link from "next/link"
import Router from 'next/router'



class ButtonWithObj extends React.Component {

  constructor(props) {
    super(props)

  }

  handleClick() {
    
    Router.push('/')
  }

  render() {
    return (
      <div>

           <button onClick={() => this.handleClick()}>{this.props.buttonName}</button>
          </div>
    )



  }
}











export default ButtonWithObj;
