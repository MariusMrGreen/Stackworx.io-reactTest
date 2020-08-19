import React from 'react';
import './App.css';

function Welcome(props: any) {
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return(
    <div className="container">
      <Welcome name ="Sara" />
      <Welcome name ="Cahal" />
      <Welcome name ="Edite" />
    </div>
  )
}



export default App;