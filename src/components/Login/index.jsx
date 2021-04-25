import React, { Component } from 'react';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 

class Login extends Component {
    render() {
        return (
            <div className="main_login"> 
                    <div className="container">
                    <div className="form_login">
                        <div className="login_title">
                            <div className="welcome col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <h4>Đăng nhập</h4>
                            <p>Chào bạn quay lại</p>
                            </div>
                            <div className="logo_welcome col-xs-4 col-sm-4 col-md-4 col-lg-48">
                            <img src="./img/icon_login.svg" />
                            </div>
                        </div>
                    <div className="form_group">
                        <div className="form-group">
                        <div className="input" id="phone_number">
                            <input type="text" className="form-control" placeholder="Nhập SĐT của bạn" />
                        </div>
                        <div className="input" id="password">
                            <input type="text" className="form-control" placeholder="Nhập mật khẩu của bạn" />
                        </div>
                        <button type="button" className="btn btn-warning" data-toggle="button">Đăng nhập</button>
                        </div>
                        <div className="other_login">
                        <a href="#">Bạn quên mật khẩu?</a>
                        <p>hoặc sử dụng</p>
                        <ul className="social_list">
                            <li className="social_item_login col-xs-4 col-sm-4 col-md-4 col-lg-48">
                            <img src="./img/facebook-icon1.svg" />
                            </li>
                            <li className="social_item_login col-xs-4 col-sm-4 col-md-4 col-lg-48">
                            <img src="./img/google-icon1.svg" />
                            </li>
                            <li className="social_item_login col-xs-4 col-sm-4 col-md-4 col-lg-48">
                            <img src="./img/apple-icon1.svg" />
                            </li>
                        </ul>
                        <p>Chưa có tài khoản?<Link to="/signin"> Đăng ký ngay</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


export default Login;