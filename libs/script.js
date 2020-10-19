const overLay = document.querySelector('.overlay');
const mainBg = document.querySelector('.main-bg');

const menuBtn = document.querySelector('#menu');
const blockMenuLeft = document.querySelector('.block-menu__left');
const blockMenuRight = document.querySelector('.block-menu__right');
const blockMenuItems = document.querySelector('.block-menu__items');
const blockMenu = document.querySelector('.block-menu');
const blockMenuLink = document.querySelectorAll('.block-menu__link');
const closeMenu = document.querySelector('#closeMenu');

overLay.addEventListener('mousemove', rotate);

function rotate(event){
    const halfWidth = mainBg.offsetWidth / 2;
    const halfHeight = mainBg.offsetHeight / 2;
    mainBg.style.transform = 'rotateX(' + -(event.offsetY - halfHeight)/50 + 'deg) rotateY(' + (event.offsetX - halfWidth)/180 + 'deg';
}


// Preloader

document.body.onload = function(){
    setTimeout(function(){
        let preloader = document.querySelector('#page-preloader');
        if(preloader){
            if( !preloader.classList.contains('done') ){
                preloader.classList.add('done');
            }
        }
        
    }, 1000*6)
}

// block-menu

menuBtn.addEventListener('click', function(e){
    blockMenuLeft.classList.toggle('block-menu__left-active');
    blockMenuRight.classList.toggle('block-menu__right-active');
    blockMenuItems.classList.toggle('block-menu__items-active');

    if( blockMenuItems.contains(document.querySelector('.block-menu__active')) ){
        
        blockMenu.style.width = 0 + "%";
        
        blockMenuLink.forEach(menuItem => {
            blockMenuLink[0].classList.remove('block-menu__active');
            blockMenuLink[1].classList.remove('block-menu__active');
            blockMenuLink[2].classList.remove('block-menu__active');
            blockMenuLink[3].classList.remove('block-menu__active');
        })
        
    } else{
        blockMenu.style.width = 100 + "%";
        
        blockMenuLink.forEach(menuLink => {
            setTimeout(function(event){
                blockMenuLink[0].classList.add('block-menu__active');
            }, 600);
    
            setTimeout(function(event){
                blockMenuLink[1].classList.add('block-menu__active');
            }, 800);
            setTimeout(function(event){
                blockMenuLink[2].classList.add('block-menu__active');
            }, 1000);
            setTimeout(function(event){
                blockMenuLink[3].classList.add('block-menu__active');
            }, 1200);
        });
    }
});

closeMenu.addEventListener('click', function(e){
    blockMenuLeft.classList.toggle('block-menu__left-active');
    blockMenuRight.classList.toggle('block-menu__right-active');
    blockMenuItems.classList.toggle('block-menu__items-active');

    if( blockMenuItems.contains(document.querySelector('.block-menu__active')) ){

        blockMenu.style.width = 0 + "%";
        
        blockMenuLink.forEach(menuItem => {
            blockMenuLink[0].classList.remove('block-menu__active');
            blockMenuLink[1].classList.remove('block-menu__active');
            blockMenuLink[2].classList.remove('block-menu__active');
            blockMenuLink[3].classList.remove('block-menu__active');
        })
        
    } else{
        
        blockMenu.style.width = 100 + "%";
        
        blockMenuLink.forEach(menuLink => {
            setTimeout(function(event){
                blockMenuLink[0].classList.add('block-menu__active');
            }, 600);
    
            setTimeout(function(event){
                blockMenuLink[1].classList.add('block-menu__active');
            }, 800);
            setTimeout(function(event){
                blockMenuLink[2].classList.add('block-menu__active');
            }, 1000);
            setTimeout(function(event){
                blockMenuLink[3].classList.add('block-menu__active');
            }, 1200);
        });
    }
});