import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import Product from './components/Product';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
        <div className="main">
            <div className="container">
              <Header/>
              <Category/>
              <Product/>
            </div>
            <Footer/>
        </div>
    )
  }
}

export default App;
