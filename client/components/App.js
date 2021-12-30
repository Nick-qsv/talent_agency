import React from "react";
import {HashRouter as Router, Route} from 'react-router-dom'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
    <Router>
        <div className="mainPage--container">
        <h1>HI THERE</h1>
        
        </div>
    </Router>
    )
  }
}
