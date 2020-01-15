import React from 'react'
import Link from "next/link"
import Router from 'next/router'




class ButtonWithObj extends React.Component {

  constructor(props) {
    super(props)

  }

  async postRoute(data) {
    const requestObj = {pubs: data}
    const response = await fetch('/api/route', {
      method: 'POST',
      body: JSON.stringify(requestObj)
    });
    return await response.json();
  }

  handleClick() {
    this.postRoute(this.props.object)
    .then((data) => {
      console.log("data" + data)
    })

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
