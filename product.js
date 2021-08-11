let id = localStorage.getItem("id");
let data = JSON.parse(localStorage.getItem("listProducts"));
if(data){
    var index = data.findIndex((item) => {
        return item.id == id;
      });
}
let id2 = localStorage.getItem("id2");
let data2 = JSON.parse(localStorage.getItem("listBestSale"));
if(data2){
    var index2 = data2.findIndex((item) => {
        return item.id == id2;
      });
}
 document.querySelector(".product").innerHTML = ` <div class="container">
    <div class="product-top row">
        <p>Trang chủ</p> <span>&#10230;</span> <p>ÁO NAM</p> <span>&#10230;</span><p>Áo thun tay ngắn</p>
    </div>
    <div class="product-content row">
        <div class="product-content-left row">
            <div class="product-content-left-small-img">
                <img src="${data?data[index].imgProduct:data2[index2].img}" alt="">
                <img src="${data?data[index].imgProduct:data2[index2].img}" alt="">
            </div>
            <div class="product-content-left-big-img">
                <img src="${data?data[index].imgProduct:data2[index2].img}" alt="">
            </div>
    
        </div>
        <div class="product-content-right">
            <div class="product-content-right-product-name">
                <h3>${data?data[index].nameProduct:data2[index2].name}</h3>
                <span class="mst"><strong>Mã sản phẩm:</strong> AP3310 Áo thun 18/321</span>
            </div>
            <div class="product-content-right-product-price">
                <p>${data?[index].price:data2[index2].price}<sup>đ</sup></p>
            </div>
            <div class="product-content-right-product-color row ">
                <p>Màu sắc:</p> 
                <div class="product-content-right-product-color-img row ">
                    <img src="./shopdocstyle/img/mau nen/maucamdat.jpg" alt=""> 
                    <img src="./shopdocstyle/img/mau nen/mauvang.png" alt=""> 
                    <img src="./shopdocstyle/img/mau nen/mautrang.png" alt=""> 
                    <img src="./shopdocstyle/img/mau nen/mauden.jpg" alt=""> 
                </div>   
            </div>
            <div class="product-content-right-product-size">
                <p style="font-weight: bold;">Size</p>
                <div class="size">
                    <span>XL</span>
                    <span>L</span>
                    <span>M</span>
                </div>
            </div>
            <div class="hd-chonsize">
                <a href=""><i class="ti-ruler"></i>Hướng dẫn chọn size</a>
            </div>
            <div class="quantity">
                <p style="font-weight: bold;">Số lượng  :</p>
                <input type="number"min="0" value="1">
            </div>
                <div class="product-content-right-product-button">
                    <button id="dat-hang"><i class="ti-shopping-cart"></i><p>Đặt hàng</p></button>
                    <button><i class="ti-home"></i><p>Chi nhánh còn</p></button>
                </div>
                <div class="description-content">
                <h3>Mô tả:</h3>
                <p>Chất liệu: Thun cao cấp<br>
                    Đặc tính: Hút ẩm tốt, thấm hút tốt, mềm mại.<br>
                    Hướng dẫn sử dụng:<br>
                    - Giặt ở nhiệt độ bình thường.<br>
                    - Không được dùng hóa chất tẩy, ủi ở nhiệt độ thích hợp.<br>
                    - Hạn chế sử dụng máy sấy.</p>
                </div>
        </div>
    </div>
    <!-- product bottom  -->
    <div class="product-bottom">
        <div class="info-product row">
            <div class="policy-item col-bottom">
                <h4>CHÍNH SÁCH GIAO NHẬN - ĐỔI TRẢ HÀNG</h4>
                <div class="content">
                    <p>- Mức phí: 30,000đ cho đơn hàng nội thành và 40,000đ cho đơn hàng ngoại thành<br>
                        - Đổi / Trả trong vòng 7 ngày kể từ khi nhận hàng<br>
                        - Không áp dụng đổi/trả sản phẩm trong CTKM<br>
                        - Miễn phí đổi trả nếu lỗi sai sót từ phía Shop Độc</p>
                </div>
            </div>
            <div class="policy-item col-bottom">
                <h4>ƯU ĐÃI MEMBER</h4>
                <div class="content">
                    <p>Đang cập nhập</p>
                </div>
            </div>
            <div class="policy-item col-bottom">
                <h4>ĐỊA CHỈ CỬA HÀNG</h4>
                <div class="content">
                    <p>
                        <ul>
                            <li>⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣⁣Hotline : 0968.959.050</li>
                            <li>Hệ thống cửa hàng tại Hà Nội:</li>
                        </ul>
                        <span>
                            - 110 Phố Nhổn - HN<br>
                            - 326 Cầu Giấy - HN<br>
                            - 154 Quang Trung - Hà Đông - HN<br>
                            - 225 Bạch Mai - HN<br>
                            ⁣- 49 Chùa Bộc - HN<br>
                            ⁣- 131 Cầu Giấy - HN<br>
                        </span>
                    </p>
                </div>
            </div>
            <div class="info-below-product row">
                <div class="banner-info-product col-bottom">
                    <div class="img-info">
                        <img src="./shopdocstyle/img/bannerinfo/info_1.png" alt="">
                    </div>
                    <div class="content-info">
                        <p>GIAO HÀNG NHANH</p>
                    </div>
                </div>
                <div class="banner-info-product col-bottom">
                    <div class="img-info">
                        <img src="./shopdocstyle/img/bannerinfo/info_2.png" alt="">
                    </div>
                    <div class="content-info">
                        <p>ĐỔI TRẢ TRONG VÒNG 7 NGÀY</p>
                    </div>
                </div>
                <div class="banner-info-product col-bottom">
                    <div class="img-info">
                        <img src="./shopdocstyle/img/bannerinfo/info_3.png" alt="">
                    </div>
                    <div class="content-info">
                        <p>THANH TOÁN KHI NHẬN HÀNG</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="suggest-products">
            <h2>SẢN PHẨM CÙNG DANH MỤC</h2>
            <div class="suggest-product-item row">
                <div class="new-products-content-item">
                    <img src="./shopdocstyle/img/sanphammoi/sp1.jpg" alt="AP1010 Áo Phông 28/621">
                    <h3>AP1010 Áo Phông 28/621</h3>
                    <p>285.000<sup>đ</sup></p>
                </div>
                <div class="new-products-content-item">
                    <img src="./shopdocstyle/img/sanphammoi/sp2.jpg" alt="AP6835 Áo Phông 28/621">
                    <h3>AP6835 Áo Phông 28/621</h3>
                    <p>265.000<sup>đ</sup></p>
                </div>
                <div class="new-products-content-item">
                    <img src="./shopdocstyle/img/sanphammoi/sp3.jpg" alt="AP6816 Áo Phông 28/621">
                    <h3>AP6816 Áo Phông 28/621</h3>
                    <p>265.000<sup>đ</sup></p>
                </div>
                <div class="new-products-content-item">
                    <img src="./shopdocstyle/img/sanphammoi/sp4.jpg" alt="AP6839 Áo Phông 28/621">
                    <h3>AP6839 Áo Phông 28/621</h3>
                    <p>265.000<sup>đ</sup></p>
                </div>
                <div class="new-products-content-item">
                    <img src="./shopdocstyle/img/sanphammoi/sp5.jpg" alt="AP1010 Áo Phông 28/621">
                    <h3>AP1010 Áo Phông 28/621</h3>
                    <p>285.000<sup>đ</sup></p>
                </div>
            </div>
        </div>
    </div>
    </div>`;


// gio hang 




