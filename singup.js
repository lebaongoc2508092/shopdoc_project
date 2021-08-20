let keyUser = 'user'
let userName = JSON.parse(localStorage.getItem(keyUser))
console.log(userName)
var btn = document.getElementById('button-btn')
btn.addEventListener('click',addUser)
function addUser (){
var ip = document.querySelectorAll('#ip')
let newUser = {
    id: userName.length + 1,
    username:ip[0].value,
    email:ip[1].value,
    phone:ip[2].value,
    password:ip[3].value,
}
var check = userName.findIndex(function(user){
    return user.username == ip[0].value;
});
console.log(check)
if(check !== -1){
    alert('tài khoản đã tồn tại vui lòng nhập lại')
    
}
else{
    userName.push(newUser)
    console.log(userName)
    alert('bạn đã đăng kí thành công')
}
localStorage.setItem('userName',JSON.stringify(userName))
    
}

 
     
    





let user = [
    {
        id:1,
        username:'lebaongoc',
        password:1234,
    },
    {
        id:2,
        username:'lebaongoc2',
        password:12345,
    },
    {
        id:3,
        username:'lebaongoc3',
        password:12346,
    },
    {
        id:4,
        username:'lebaongoc4',
        password:12347,
    },
];

 if(!localStorage.getItem('user')){
     localStorage.setItem('user',JSON.stringify(user))
 };

