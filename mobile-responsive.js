


var header = document.querySelector('#header');
var headerNow = document.querySelector('#header').clientHeight;
var mobileMenuBtn = document.querySelector('.mobile-menu-btn');

mobileMenuBtn.onclick = function(){
    if(header.clientHeight ==  headerNow){
        header.style.height='auto';
    }
    else{
        header.style.height=null;
    }
}


var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
menuItems.forEach(function(item){
    item.addEventListener('click',function(event){
        var isParent = item.nextElementSibling && item.nextElementSibling.classList.contains('sub_nav');
        if(isParent){
            event.preventDefault();
        }else{
            header.style.height=null;
        }
    });
    console.log(item.nextElementSibling);
});