var logo = document.querySelector('.logo');
var modalBg = document.querySelector('.modal-bg');

logo.onclick = function() 
    {
        modalBg.classList.add('bg-active');
    }
;

/* var slupka = document.querySelector(".modal-bg");
var vnitrek = document.getElementsByClassName(".modal");
var inHeight = vnitrek.offsetHeight;
slupka.style.height = window.innerHeight;
slupka.style.width = window.innerWidth;
var conHeight = slupka.offsetHeight;

vnitrek.style.marginTop = ((conHeight-inHeight)/2)+'px'; */