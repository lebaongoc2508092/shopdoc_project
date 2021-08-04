// js phần đăng nhập 
var email = 'lebaongoc';
var pass = '123';
var btn = document.getElementById('button-btn')
btn.onclick = function(){
    var inputUsername = document.getElementById('username').value;
    var inputPassword = document.getElementById('password').value;
    if(inputUsername == email && inputPassword == pass) {
                window.location = './index.html';
                alert('bạn đã đăng nhập thành công')
            }else{
               alert('đăng nhập thất bại')
             }
        }








