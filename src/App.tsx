import React from 'react';
import './App.css';
import GridGenerator from './GridGenerator';
import { Col, Row, Grid } from 'react-flexbox-grid';
import Server from './Components/server'

function Welcome(props: any) {
  return <h1>Hello, {props.name}</h1>
}

const request = require('request');






function App() {
  
  return(
    
    
    <GridGenerator cols={3}>
      <Server key="1"/>
      <Server key="1"/>
      <Server key="1"/>
      
      
      
    </GridGenerator>
  )
}



export default App;