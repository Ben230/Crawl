import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
const fetch = require("node-fetch");



    function MapView() {


        fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=51.5176597,-0.072768&radius=1500&keyword=public&key=${process.env.GOOGLE_MAPS_API_KEY}`)
          .then(res => res.json())
          .then(
          (result) => {
            this.setState({
           isLoaded: true,
           mapData: result
         })
       })





     }

       // Note: it's important to handle errors here
       // instead of a catch() block so that we don't swallow
       // exceptions from actual bugs in components.
       // (error) => {
       //   this.setState({
       //     isLoaded: true,
       //     error
       //   });


       class Map extends React.Component {



           render() {
             return (
               <h1>Map</h1>
             )

           }



       }






export default Map;
