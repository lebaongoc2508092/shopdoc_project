const imgPosition = document.querySelectorAll('.aspect-ratio-169 img');
const imgContainer = document.querySelector('.aspect-ratio-169');
const dotItem = document.querySelectorAll('.dot');
let imgNumber = imgPosition.length
let index = 0
// console.log(imgPosition)
imgPosition.forEach(function(image,index){
    image.style.left = index*100 + "%"
    dotItem[index].addEventListener("click",function(){
        slider (index)
    })
})
function imgSlider (){
    index++;
    if (index>=imgNumber) {index=0}
    slider (index)
}
function slider (index){
    imgContainer.style.left = "-" +index*100+ "%" 
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove("active")
    dotItem[index].classList.add('active')
}
setInterval(imgSlider,3000)
//........................product....................
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,x){
    imgItem.addEventListener("click",function(){
    bigImg.src = imgItem.src
})
})

// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];

btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// var remove_cart = document.getElementsByClassName("btn-danger");
// for (var i = 0; i < remove_cart.length; i++) {
//   var button = remove_cart[i]
//   button.addEventListener("click", function () {
//     var button_remove = event.target
//     button_remove.parentElement.parentElement.remove()

//     updatecart()
//   })
// }

// function updatecart() {
//     var cart_item = document.getElementsByClassName("cart-items")[0];
//     var cart_rows = cart_item.getElementsByClassName("cart-row");
//     var total = 0;
//     for (var i = 0; i < cart_rows.length; i++) {
//       var cart_row = cart_rows[i]
//       var price_item = cart_row.getElementsByClassName("cart-price")[0]
//       var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
//       var price = parseFloat(price_item.innerText)
//       var quantity = quantity_item.value
//       total = total + (price * quantity)
//     }
//     document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
//   }

  // var quantity_input = document.getElementsByClassName("cart-quantity-input");
  // for (var i = 0; i < quantity_input.length; i++) {
  //   var input = quantity_input[i];
  //   input.addEventListener("change", function (event) {
  //     var input = event.target
  //     if (isNaN(input.value) || input.value <= 0) {
  //       input.value = 1;
  //     }
  //     updatecart()
  //   })
  // }

  
// var add_cart = document.getElementsByClassName("buy");
// for (var i = 0; i < add_cart.length; i++) {
//   var add = add_cart[i];
//   add.addEventListener("click", function (event) {

//     var button = event.target;
//     var product = button.parentElement.parentElement;
//     var img = product.parentElement.getElementsByClassName("imgPr")[0].src
//     var title = product.getElementsByClassName("title")[0].innerText
//     var price = product.getElementsByClassName("price")[0].innerText
//     addItemToCart(title, price, img)
//     modal.style.display = "block";
    
//     updatecart()
//   })
// }

// function addItemToCart(title, price, img) {
//   var cartRow = document.createElement('div')
//   cartRow.classList.add('cart-row')
//   var cartItems = document.getElementsByClassName('cart-items')[0]
//   var cart_title = cartItems.getElementsByClassName('title')
//   for (var i = 0; i < cart_title.length; i++) {
//     if (cart_title[i].innerText == title) {
//       alert('Sản Phẩm Đã Có Trong Giỏ Hàng');
//       return;
//     }
//   }

//   var cartRowContents = `
//   <div class="cart-item cart-column">
//       <img class="cart-item-image" src="${item.imgProduct}" width="100" height="100">
//       <span class="cart-item-title">${item.nameProduct}</span>
//   </div>
//   <span class="cart-price cart-column">${item.price}</span>
//   <div class="cart-quantity cart-column">
//       <input class="cart-quantity-input" type="number" value="1">
//       <button class="btn btn-danger" type="button">Xóa</button>
//   </div>`
//   cartRow.innerHTML = cartRowContents
//   cartItems.append(cartRow)
//   cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
//     var button_remove = event.target
//     button_remove.parentElement.parentElement.remove()
//     updatecart()
//   })
//   cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//       input.value = 1;
//     }
//     updatecart()
//   })
// }


// đổ sản phẩm từ cơ sở dữ liệu 
const listProducts = [
  {
    id: 1,
    nameProduct: "AP1010 Áo Phông 28/621",
    imgProduct:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210705/Screenshot_21_thumb.png",
    price: 285000,
  },
  {
    id: 2,
    nameProduct: "AP6835 Áo Phông 28/621",
    imgProduct:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210706/BUM07485_min_thumb.jpg",
    price: 265000,
  },
  {
    id: 3,
    nameProduct:
      "AP6816 Áo Phông 28/621",
    imgProduct:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210705/BUM07449_thumb.jpg",
    price: 265000,
  },
  {
    id: 4,
    nameProduct: "AP6839 Áo Phông 28/621",
    imgProduct:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210706/BUM07490_min_thumb.jpg",
    price: 265000,
  },
  {
    id: 5,
    nameProduct:
      "AP138 Áo Phông 25/621",
    imgProduct:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210705/BUM07481_min_thumb.jpg  ",
    price: 285000,
  },
  {
    id: 6,
    nameProduct:
      "AP337 Áo Phông 25/621",
    imgProduct:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210705/Screenshot_16_thumb.png",
    price:285000,
  },
  {id: 7,
  nameProduct:
    "APL2109 Áo Polo Basic Regular 18/621",
  imgProduct:
    "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210705/BUM07498_thumb.jpg",
  price:269000,
},
{id: 8,
nameProduct:
  "APL2106 Áo Polo Basic Regular 18/621",
imgProduct:
  "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210705/BUM07501_thumb.jpg",
price:269000,
},
{id: 9,
nameProduct:
  "Áo Thun Tay Ngắn AP2091",
imgProduct:
  "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210424/bum05846_thumb.jpg",
price:265000,
},
{id: 10,
nameProduct:
  "Áo Thun Tay Ngắn AP2095",
imgProduct:
  "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210424/bum05845_thumb.jpg",
price:265000,
},
];

if(!localStorage.getItem('listProducts')){
  localStorage.setItem('listProducts',JSON.stringify(listProducts));
}

let data = JSON.parse(localStorage.getItem("listProducts"));
function start() {
  renderHTML(data);
}
function renderHTML(arr) {
  let lst = document.querySelector(".new-products-content");
  let strHTML = arr.map((item) =>{
    return`<div class="new-products-content-item">
    <div onclick="changeProducts(${item.id})">
    <a href="../shopdocproject/products.html" class="imgPr"><img src="${item.imgProduct}" alt="AP1010 Áo Phông 28/621"></a>
    <h3 class="title">${item.nameProduct}</h3>
    <p class="price">${item.price}<sup>đ</sup></p></div>
    <div class="qv row">
        <div class="buy-view">
        <button id="btn_buy" onclick="btn_buy(${item.id})" type="text" class="buy">
            <i class="buy-btn ti-shopping-cart"></i>Mua nhanh
        </button>
    </div>
    <div class="buy-view">
        <a href="#" class="view ">
            <i class="view-btn ti-eye"></i>Xem chi tiết
        </a>
    </div>
    </div>
</div>`
  });if (lst) {
    lst.innerHTML = strHTML.join(" ");
  }
}

start();
let idProduct;
function changeProducts(id) {
  localStorage.setItem("id", id);
  localStorage.removeItem('listBestSale')
  window.location.href = "./products.html";
}




// cơ sở dữ liệu sản phẩm bán chạy
const listBestSale = [
  {
    id: 11,
    name: "AP3312 áo phông 12/621",
    img:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210630/BUM06010_thumb.jpg",
    price: 265000,
  },
  {
    id: 12,
    name: "AP4072 áo phông 12/621",
    img:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210630/BUM06006_thumb.jpg",
    price: 265000,
  },
  {
    id: 13,
    name:
      "TT1111 áo tanktop 11/621",
    img:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210630/BUM06005_thumb.jpg",
    price: 225000,
  },
  {
    id: 14,
    name: "TT1113 áo tanktop 11/621",
    img:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210630/BUM06007_thumb.jpg",
    price: 225000,
  },
  {
    id: 15,
    name:
      "AP4075 áo phông 9/621",
    img:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210630/BUM06011_thumb.jpg",
    price: 265000,
  },
  {
    id: 16,
    name:
      "TT1110 áo tanktop 9/621",
    img:
      "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210630/BUM06009_thumb.jpg",
    price:225000,
  },
  {id: 17,
  name:
    "TT1114 tanktop 29/521",
  img:
    "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210630/BUM06004_thumb.jpg",
  price:215000,
},
{id: 18,
name:
  "TT1107 tanktop 22/521",
img:
  "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210630/BUM06002_thumb.jpg",
price:215000,
},
{id: 19,
name:
  "TT1112 áo tanktop 25/521",
img:
  "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210630/BUM06003_thumb.jpg",
price:215000,
},
{id: 20,
name:
  "AP2096 ÁO PHÔNG SLIM FIT 26/521",
img:
  "https://storage.googleapis.com/cdn.nhanh.vn/store/8901/ps/20210630/BUM06001_thumb.jpg",
price:265000,
},
];
localStorage.setItem('listBestSale',JSON.stringify(listBestSale));
let bestSale = JSON.parse(localStorage.getItem('listBestSale'));
console.log(bestSale)
function startbestSale(){
  renderHTML2(bestSale)
}
function renderHTML2(arr){
  let lstbestSale = document.querySelector('#best-sale');
  let strHTML2 = arr.map((item) => {
    return`<div class="new-products-content-item new-products-best-sale">
    <div onclick="bestProduct(${item.id})">
    <img src="${item.img}" alt="AP3312 áo phông 12/621">
    <h3>${item.name}</h3>
    <p>${item.price}<sup>đ</sup></p>
    </div>
<div class="qv row">
    <div class="buy-view">
    <a href="#"  class="buy">
            <i class="buy-btn ti-shopping-cart"></i>Mua nhanh
        </a>
</div>
<div class="buy-view">
    <a href="#" class="view ">
        <i class="view-btn ti-eye"></i>Xem chi tiết
    </a>
</div>
</div>
</div>`
}); if(lstbestSale){
  lstbestSale.innerHTML += strHTML2.join(" ")
}
}
startbestSale();

let idProduct2;
function bestProduct(id) {
  localStorage.setItem("id2", id);
  localStorage.removeItem('listProducts')
  window.location.href = "./products.html";
}
// bật mở modal search 
 const iconSearch = document.querySelector('#js-search')
 const modalSearch = document.querySelector('.js-modal-search')
 const modalClose = document.querySelector('#js-modal-search-icon')

 function showModalSearch() {
  modalSearch.classList.add('open')
 }

 function hideModalSearch() {
  modalSearch.classList.remove('open')
 }

 iconSearch.addEventListener('click', showModalSearch );


 modalClose.addEventListener('click', hideModalSearch);
//  tìm kiếm sản phẩm ////
// function timkiem(){
//   var storageKey = 'listProducts'
//   var todoList = JSON.parse(localStorage.getItem(storageKey))
//   var giatritim = document.getElementById('giatritim').value
//   var ketqua = todoList.indexOf(giatritim,0)
//   alert(ketqua)

// }

//
function btn_buy(id){
  var sanPham = data.find(function(item){
    return item.id == id
  })
  gioHang.push(sanPham)
  console.log(gioHang);
  renderHtml3(gioHang);
}

let gioHang = []



function renderHtml3(arr) {
  let modal = document.querySelector("#cart-row2");
  let strHTML3 = arr.map((gioHang) =>{
    return(`
    <div class="cart-item cart-column">
      <img class="cart-item-image" src="${gioHang.imgProduct}" width="100" height="100">
      <span class="cart-item-title">${gioHang.nameProduct}</span>
  </div>
  <span class="cart-price cart-column">${gioHang.price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`);
  }); 
  
  if (modal) {
    modal.innerHTML = strHTML3.join("");
  }


var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()

    updatecart()
  })
}

function updatecart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row2");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
      var cart_row = cart_rows[i]
      var price_item = cart_row.getElementsByClassName("cart-price ")[0]
      var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
      var price = parseFloat(price_item.innerText)
      var quantity = quantity_item.value
      total = total + (price * quantity)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
  }

  var quantity_input = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantity_input.length; i++) {
    var input = quantity_input[i];
    input.addEventListener("change", function (event) {
      var input = event.target
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      updatecart()
    })
  }
}
