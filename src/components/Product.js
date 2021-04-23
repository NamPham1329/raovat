import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="product">
                <div className="product_title">
                    <h4>Tin đăng mới</h4>
                </div>
                <div className="product_list">
                    <div className="product_item">
                        <div className="product_img">
                            <img src="./img/product/1.jpg" alt=''/>
                        </div>
                        <div className="product_content">
                            <div className="product_name">
                                <b>Ngân hàng thanh lý gấp KDC Lavender , DT 90m²</b>
                            </div>
                            <div className="product_price">
                                800 triệu
                            </div>
                            <div className="time_add">
                                <img src="./img/product_icon.svg" alt=''/>
                                <p className="time">4 phút trước</p> 
                                <p className="address">Đồng Nai</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;