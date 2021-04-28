import React, { Component } from 'react';
import axios from 'axios';


class List extends Component {
    state = {
        products: [],
        error: null,
        isLoading :true
      };
      componentDidMount = async () => {
        try {
          const response = await axios.get('http://localhost:1337/products');
          this.setState({ products: response.data });
        } catch (error) {
          this.setState({ error });
        }
      };
    render() {
        console.log(
            this.state.products
          )
        return (
            <div className="main_listview">
                <div className="container">
                    <div className="list_view_title">
                        <b>Mua Bán Vật Nuôi, Thú Cưng Giá Cực Tốt Tại Toàn Quốc</b>
                    </div>
                    <div className="list_view">
                            <ul className="list_product">
                            {this.state.products.map(product => (
                                <li key={product.id} className="product_item">
                                <div className="image_product">
                                <div>
                                    
                                </div>
                                </div>
                                <div className="product_content">
                                <div className="wrapper_header">
                                    <div className="name_product">
                                        {product.product_name}
                                    </div>
                                    <div className="price">
                                        {product.product_price}
                                    </div>
                                </div>
                                <div className="wrapper_footer">
                                    <div className="time_add">
                                    <i className="fas fa-briefcase" />
                                    <p>Bán chuyên</p>
                                    <p className="time">{product.date_time}</p>
                                    <p className="address">{product.address}</p>
                                    </div>
                                    <div className="review">
                                        <i className="far fa-heart" />
                                    </div>
                                </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
