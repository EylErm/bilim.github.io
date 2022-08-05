const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

let progress=document.getElementById('progressbar');
let totalHeight=document.body.scrollHeight=window.innerHeight;
window.onscroll=function(){
  let progressHeight=(window.pageYOffset / totalHeight) * 100;
  progress.style.height=progressHeight+"%";
}