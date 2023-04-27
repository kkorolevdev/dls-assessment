(function(){
    "use strict";

    let pageTop;
    const menuClass = document.getElementById('menu');
    const contentClass = document.getElementById('content');
    window.addEventListener('scroll', function(){
        pageTop = window.pageYOffset;
        if (pageTop > 200) {
            menuClass.classList.add('hide');
            contentClass.classList.add('grow');
        } else {
            menuClass.classList.remove('hide');
            contentClass.classList.remove('grow');
        }
    });

    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarClose = document.querySelector('.navbar-close');
    const navbarWrapper = document.getElementById('navbar-wrapper');
    navbarToggle.addEventListener('click', function(){
        console.log('click open')
        navbarWrapper.classList.add('show');
    });
    navbarClose.addEventListener('click', function(){
        console.log('click close')
        navbarWrapper.classList.remove('show');
    });
    navbarWrapper.addEventListener('click', function(e){
        const isOutter = e.target.nodeName === 'DIV';
        if (!isOutter) return;
        console.log('outside');
        navbarWrapper.classList.remove('show');
    });
})();