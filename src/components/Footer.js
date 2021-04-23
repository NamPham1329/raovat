import React, { Component } from 'react';
import './css/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="download">
                        <div className="download_title">
                            <b>Tải ứng dụng chợ tốt</b>
                        </div>
                        <div className="app_download">
                            <div className="qrcode col-xs-5 col-sm-5 col-md-5 col-lg-5">
                                <img src="./img/qrcode.jpeg" />
                            </div>
                            <div className="app col-xs-7 col-sm-7 col-md-7 col-lg-7">
                                <div className="ios">
                                    <img src="./img/appstore.svg" />
                                </div>
                                <div className="androin">
                                    <img src="./img/googleplay.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="support">
                        <div className="support_title">
                            <b>HỖ TRỢ KHÁCH HÀNG</b>
                        </div>
                        <div className="list_suport">
                            <ul className="list-group">
                                <li className="item">
                                    <a href="#">Trung tâm trợ giúp</a> 
                                </li>
                                <li className="item">
                                    <a href="#">An toàn mua bán</a> 
                                </li>
                                <li className="item">
                                    <a href="#">Quy định cần thiết</a> 
                                </li>
                                <li className="item">
                                    <a href="#">Quy chế quyền riêng tư</a> 
                                </li>
                                <li className="item">
                                    <a href="#">Liên hệ hỗ trợ</a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="about">
                        <div className="about_title">
                            <b>VỀ CHỢ TỐT</b>
                        </div>
                        <div className="about_us">
                            <div className="list_about_us">
                                <ul className="list-group">
                                    <li className="item">
                                        <a href="#">Giới thiệu</a> 
                                    </li>
                                    <li className="item">
                                        <a href="#">Tuyển dụng</a> 
                                    </li>
                                    <li className="item">
                                        <a href="#">Truyền thông</a> 
                                    </li>
                                    <li className="item">
                                        <a href="#">Blog</a> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="link_certification">
                        <div className="link_social">
                            <div className="link_social_title">
                                <b>LIÊN KẾT</b>
                            </div>
                            <ul className="list-social">
                                <li className="social_item">
                                    <img src="./img/facebook_icon.svg" />
                                </li>
                                <li className="social_item">
                                    <img src="./img/youtube_icon.svg" />
                                </li>
                                <li className="social_item">
                                    <img src="./img/google_icon.svg" />
                                </li>
                            </ul>
                        </div>
                        <div className="certification">
                            <div className="certification_title">
                                <b>CHỨNG NHẬN</b>
                            </div>
                            <div className="mark">
                                <img src="./img/chứng nhận.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="address">
                    <p>CÔNG TY TRÁCH NHIỆM HỮU HẠN CHỢ TỐT - Địa chỉ: Phòng 1808, Tầng 18, Mê Linh Point Tower, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh</p><br/>
                    <p>Giấy chứng nhận đăng ký doanh nghiệp số 0312120782 do Sở Kế Hoạch và Đầu Tư TPHCM cấp ngày 11/02/2013</p><br/>
                    <p>Email: trogiup@chotot.vn - Đường dây nóng: (028)38664041</p>
                </div>
            </div>
        );
    }
}

export default Footer;