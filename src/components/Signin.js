import React, { Component } from 'react';
import './css/signin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 


class Signin extends Component {
    render() {
        return (
            <div className="main_signin"> 
                <div className="form_signin">
                    <div className="signin_title">
                        <div className="welcome col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <h4>Đăng ký</h4>
                        <p>Tạo tài khoản Chợ Tốt ngay</p>
                        </div>
                        <div className="logo_welcome col-xs-4 col-sm-4 col-md-4 col-lg-48">
                        <img src="../img/icon_login.svg"/>
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
                    <div className="other_signin">
                    <p>Bằng việc Đăng ký, bạn đã đồng ý với <Link>Điều khoản sử dụng</Link> của Chợ tốt</p>
                    <p className='other_login_method'>hoặc sử dụng</p>
                    <ul className="social_list">
                        <li className="social_item_signin col-xs-4 col-sm-4 col-md-4 col-lg-48">
                        <img src="./img/facebook-icon1.svg" />
                        </li>
                        <li className="social_item_signin col-xs-4 col-sm-4 col-md-4 col-lg-48">
                        <img src="./img/google-icon1.svg" />
                        </li>
                        <li className="social_item_signin col-xs-4 col-sm-4 col-md-4 col-lg-48">
                        <img src="./img/apple-icon1.svg" />
                        </li>
                    </ul>
                    <p>Bạn đã có tài khoản?<Link to="/login"> Đăng nhập</Link></p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Signin;