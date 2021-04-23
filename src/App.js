import React, { Component } from 'react';
import './App.css';
import Header from './common/Header';
// import Category from './components/Category';
import Product from './components/Product';
import Footer from './common/Footer';
import Login from './components/Login';
import Signin from './components/Signin';
import List from './components/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import Category from './components/Category';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
            <div className="container">
              <Header/>
              <Route exact path="/" component={Product} />
              <Route exact path="/category" component={Category} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/list" component={List} />
            </div>
            <Footer/>
        </div>
        </Router>
    )
  }
}

export default App;
