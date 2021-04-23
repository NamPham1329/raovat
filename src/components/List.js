import React, { Component } from 'react';
import './css/list.css';

class list extends Component {
    render() {
        return (
            <div className="main_listview">
                <div className="list_view_title">
                    <b>Mua Bán Vật Nuôi, Thú Cưng Giá Cực Tốt Tại Toàn Quốc</b>
                </div>
                <div className="list_view">
                        <ul className="list_product">
                        <li className="product_item">
                            <div className="image_product">
                                <img src="../img/cho tặng.png"/>
                            </div>
                            <div className="product_content">
                            <div className="wrapper_header">
                                <div className="name_product">
                                Chim mồi
                                </div>
                                <div className="price">
                                400.000 đ
                                </div>
                            </div>
                            <div className="wrapper_footer">
                                <div className="time_add">
                                <i className="fas fa-briefcase" />
                                <p>Bán chuyên</p>
                                <p className="time">20 phút trước</p>
                                <p className="address">Huyện Phong Điền</p>
                                </div>
                                <div className="review">
                                    <i className="far fa-heart" />
                                </div>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default list;
