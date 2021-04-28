import React, { Component } from 'react';
import './App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signin from './components/Signin/';
import List from './components/List/';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 



import Category from './components/Category.js';
class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/list" component={List}/>
        <Footer/>
      </Router>
    )
  }
}

export default App;
