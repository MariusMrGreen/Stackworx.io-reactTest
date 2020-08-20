import React from 'react';
import './App.css';
import GridGenerator from './GridGenerator';
import { Col, Row, Grid } from 'react-flexbox-grid';
import Server from './Components/server'

function App() {
  var endpointURLs = [
    "http://httpstat.us/200",
    "http://httpstat.us/300",
    "http://httpstat.us/500",
    "httpstat.us/200",
    "http://httpstat.us/204",
    "http://httpstat.us/404",
    "http://www.google.com",

  ]
  return(
    <GridGenerator cols={3}>
      {endpointURLs.map(item => <Server key={item} url={item} />)}      
    </GridGenerator>
  )
}


export default App;