var storageKey = 'listProducts'
var todoList = JSON.parse(localStorage.getItem(storageKey))
console.log(todoList)
var btnAdd = document.getElementById('btn')
    btnAdd.addEventListener('click',addItem)
    function addItem() {
        var ip = document.querySelectorAll('input');
        let productNew = {
            id: todoList.length + 1,
            nameProduct:ip[0].value,
            imgProduct:ip[1].value,
            price:ip[2].value,
        };

       todoList.push(productNew);
       localStorage.setItem('listProducts',JSON.stringify(todoList))
       var listItem = JSON.parse(localStorage.getItem(storageKey))
    
    }
    
    
    function renderHTMLList(arr) {
        let table = document.querySelector("#list-sanpham tbody");
        let strHTML = "";
        for(let i = 0; i<arr.length ;i++){
            strHTML+=`<tr><td>${arr[i].id}</td><td>${arr[i].nameProduct}</td><td><img src="${arr[i].imgProduct}"</td><td>${arr[i].price}</td>
            <td><button onclick="deleteItem(${arr[i].id})">Xóa</button>
            <button onclick="creatItem(${arr[i].id})">Sửa</button></td>
            </tr>`;
            
        }
        table.innerHTML = strHTML
    }
    function start(){
        renderHTMLList(todoList)
    }
   

    function deleteItem (id) {
        let index = todoList.findIndex(function(item){
            return item.id === id;
        });
        todoList.splice(index,1)
        renderHTMLList(todoList);
        localStorage.setItem('listProducts',JSON.stringify(todoList))
        var listItem = JSON.parse(localStorage.getItem(storageKey))
    }

    // pha sua san pham

    var ip = document.querySelectorAll('input');
    var idEdit = 0;
    
    function creatItem(id){
        let index = todoList.findIndex(function(item){
            return item.id === id;
        });
        idEdit=index;
        console.log(index);
        ip[0].value = todoList[index].nameProduct;
        ip[1].value = todoList[index].imgProduct;
        ip[2].value = todoList[index].price;

    }

    start()
    document.getElementById('btn-edit').onclick = function (){
        
        todoList[idEdit].nameProduct = ip[0].value;
        todoList[idEdit].imgProduct =ip[1].value;
        todoList[idEdit].price = ip[2].value;
        renderHTMLList(todoList);
    }