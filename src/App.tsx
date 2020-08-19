import React from 'react';
import './App.css';
import GridGenerator from './GridGenerator';
import { Col, Row, Grid } from 'react-flexbox-grid';

function Welcome(props: any) {
  return <h1>Hello, {props.name}</h1>
}

const request = require('request');




function GetServer(props: any) {
  let retError, retResponse, retbody : any;

  const options = {
    url: props.endpointURL
  };

  
  request(options, function (error : any, response : any, body : any) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  retResponse = response;
});

  return (
    <></>
  )
}

function App() {
  
  return(
    
    
    <GridGenerator cols={3}>
      <div className="up-status" key="0">
        
        </div>

      <div className="up-status" key="1">
        
      </div>

      <div className="up-status" key="2">
        
      </div>

      <div className="down-status" key="3">
        
      </div>

      <div className="down-status" key="4">
        
      </div>

      <div className="down-status" key="5">
        
      </div>

      <div className="unknown-status" key="6">
        
      </div>

      <div className="unknown-status"  key="7">
        
      </div>

      <div className="unknown-status"  key="8">
        
      </div>

      
    </GridGenerator>
  )
}



export default App;