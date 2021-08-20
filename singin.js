///js phần đăng nhập 
let user = JSON.parse(localStorage.getItem('userName'));
console.log(user)

var btn = document.getElementById('button-btn')
btn.onclick = function(){
    var inputUsername = document.getElementById('username').value;
    var inputPassword = document.getElementById('password').value;
    let check = user.find(function(item){
      return item.username == inputUsername && item.password == inputPassword
    });
      
    if(check) {
                window.location = './index.html';
                 localStorage.setItem('check',JSON.stringify(check))
                alert('bạn đã đăng nhập thành công')
            }else{
               alert('đăng nhập thất bại')
             }
        }








