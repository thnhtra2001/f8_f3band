
var buyTickets = document.querySelectorAll('.js-buy-ticket');
var closeBuyTickets = document.querySelectorAll('.ti-close');
var modalTickets= document.querySelector('.modal');
var closeBtn = document.querySelector('.modal-close-footer');
var modalContainer = document.querySelector('.modal-container')
buyTickets.forEach(function(buy){
    buy.addEventListener('click',function(){
        modalTickets.classList.add('modal-display');
    })
});

closeBuyTickets.forEach(function(closeModalHeader){
    closeModalHeader.addEventListener('click',function(){
        modalTickets.classList.remove('modal-display');
    })
});

closeBtn.onclick= function(){
    modalTickets.classList.remove('modal-display');
}


modalTickets.onclick = function(){
    modalTickets.classList.remove('modal-display');
}
modalContainer.onclick = function(e){
    e.stopPropagation();
}