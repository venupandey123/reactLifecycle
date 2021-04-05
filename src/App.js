import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Count from './component/Count';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.mount = this.mount.bind(this);
    this.unMount = this.unMount.bind(this);
  }

  mount(){
    // default props
    ReactDOM.render(<Count num={0}/>, document.getElementById("countHere"));
  }

  unMount(){
    ReactDOM.unmountComponentAtNode(document.getElementById("countHere"));

  }

  render() {
    return (
      <div className="container">
      <h3>React Life Cycle</h3>
      
       <button onClick={this.mount}>Mount</button>
       <button onClick={this.unMount} className="b">UnMount Component</button>

       <div id="countHere"></div>
      </div>
    )
  }
}