import React from 'react';
import './App.css';
import GridGenerator from './GridGenerator';
import { Col, Row, Grid } from 'react-flexbox-grid';
import Server from './Components/server'

function App() {
  return(
    <GridGenerator cols={3}>
      <Server url="http://httpstat.us/200" key="1"/>
      <Server url="http://google.com" key="1"/>
      <Server url="httpstat.us/200" key="1"/>
      
    </GridGenerator>
  )
}
export default App;