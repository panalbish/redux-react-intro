import React, { Component } from 'react';

import CustomerName from './components/CustomerName';
import ProductList from './components/ProductList';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React-Redux Demo</h2>
          <CustomerName />
        </div>
        <ProductList />
      </div>
    );
  }
}

export default App;
