if(localStorage.getItem('check')){
  let user = JSON.parse(localStorage.getItem('check'))
  let username = document.getElementById('check')
  username.innerHTML= user.username
  username.removeAttribute("href")
  document.getElementById("navbar-user").style.display = 'inline-block';

}
var logOut = document.getElementById('log-out');
logOut.onclick = function(){
 localStorage.removeItem('check')
 window.location = './index.html';


}