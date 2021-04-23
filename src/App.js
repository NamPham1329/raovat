import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
// import Category from './components/Category';
import Product from './components/Product';
import Footer from './components/Footer';
import Login from './components/Login';
import Signin from './components/Signin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 


class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
            <div className="container">
              <Header/>
              <Route exact path="/" component={Product} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signin" component={Signin} />
            </div>
            <Footer/>
        </div>
        </Router>
    )
  }
}

export default App;
