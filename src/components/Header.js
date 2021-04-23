import React, { Component } from 'react';
import logo from '../logo.png';
import './css/header.css';
class Header extends Component {
    render() {
        return (
            <div className="header">
              <div className="top_header">
                <div className="logo col-xs-7 col-sm-7 col-md-7 col-lg-7">
                <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="menu col-xs-5 col-sm-5 col-md-5 col-lg-5">
                  <ul className="menu_header">
                    <li className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <i className="fas fa-home" />
                      <a href>Trang chủ</a>
                    </li>
                    <li className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <i className="fas fa-user-circle" />
                      <a href>Tài khoản</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bottom_header">
                <div className="search col-xs-7 col-sm-7 col-md-7 col-lg-7">
                  <div className="input-group">
                    <div className="form-outline col-xs-10 col-sm-10 col-md-10 col-lg-10">
                      <input id="search-input" type="search" className="form-control" />
                    </div>
                    <button id="search-button" type="button" className="btn btn-primary">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
                <div className="login_group col-xs-5 col-sm-5 col-md-5 col-lg-5">
                  <div className="menu">
                    <ul className="menu_header">
                      <li className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <i className="far fa-user-circle" />
                        <a href>Đăng nhập</a>
                      </li>
                      <li className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <button id="btn_upload" type="button" className="btn btn-default">
                          <i className="far fa-edit" />
                          <p>ĐĂNG TIN</p>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}

export default Header;