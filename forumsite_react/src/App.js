import React, { Component } from 'react';
import './App.css';
import MainContainer from "./MainContainer";
import { Route, Switch } from "react-router-dom";

const My404 = () => {
  return (
    <div>
        <h1>Your Doom is at Hand</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
         <Route exact path="/" component={MainContainer}/>
         <Route component={My404} />
       </Switch>
      </div>
    );
  }
}

export default App;
