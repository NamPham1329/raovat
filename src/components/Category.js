import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
          <div className="category">
            <div className="category_title">
              <h3>
                Khám phá danh mục
              </h3>
            </div>
            <div className="owl-carousel owl-theme" id="myCarousel">
              <div className="item">
                <div className="item1">
                  <div className="category_img">
                    <img src="./img/1000.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Bất động sản</p>
                  </div>
                </div>
                <div className="item2">
                  <div className="category_img">
                    <img src="./img/việc làm.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Việc làm</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item1">
                  <div className="category_img">
                    <img src="./img/Xe cộ.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Xe cộ</p>
                  </div>
                </div>
                <div className="item2">
                  <div className="category_img">
                    <img src="./img/thú cưng.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Thú cưng</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item1">
                  <div className="category_img">
                    <img src="./img/đồ điện tử.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Đồ điện tử</p>
                  </div>
                </div>
                <div className="item2">
                  <div className="category_img">
                    <img src="./img/đồ gia dụng.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Đồ gia dụng, nội thất, cây cảnh</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item1">
                  <div className="category_img">
                    <img src="./img/đồ ăn.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Đồ ăn, thực phẩm và các loại khác</p>
                  </div>
                </div>
                <div className="item2">
                  <div className="category_img">
                    <img src="./img/tủ lạng.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Tủ lạnh, máy lạnh, máy giặt</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item1">
                  <div className="category_img">
                    <img src="./img/giải trí.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Giải trí, thể thao, sở thích</p>
                  </div>
                </div>
                <div className="item2">
                  <div className="category_img">
                    <img src="./img/thời trang.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Thời trang đồ dùng cá nhân</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item1">
                  <div className="category_img">
                    <img src="./img/mẹ và bé.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Mẹ và bé</p>
                  </div>
                </div>
                <div className="item2">
                  <div className="category_img">
                    <img src="./img/đồ dùng văn phòng.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Đồ dùng văn phòng, công nông nghiệp</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item1">
                  <div className="category_img">
                    <img src="./img/du lịch.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Dịch vụ, du lịch</p>
                  </div>
                </div>
                <div className="item2">
                  <div className="category_img">
                    <img src="./img/tất cae danh mục.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Tất cả danh mục</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item1">
                  <div className="category_img">
                    <img src="./img/cho tặng.png" alt=''/>
                  </div>
                  <div className="category_name">
                    <p>Cho tặng miễn phí</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Category;