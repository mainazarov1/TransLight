$('.burger-menu').on('click', function (e) {
    e.preventDefault();
    $('.burger-menu').toggleClass('burger-open');
    $('.menu').toggleClass('menu-show')
});

$(document).ready(function(){
    $(".projects-slider").owlCarousel( {
        items: 2,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<svg width="23px" height="23px" viewBox="0 0 11 20"><path style="fill:none;stroke-width:2px;stroke: #005BC1;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="23px" height="23px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #005BC1;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        responsive:{
            0:{
                items: 1
            },
            400:{
                items: 1
            },
            576:{
                items: 1
            },
            768:{
                items: 1
            },
            992:{
                items: 2
            }
        }
    });
});
$(document).ready(function(){
    $(".rent-slider").owlCarousel( {
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<svg width="23px" height="23px" viewBox="0 0 11 20"><path style="fill:none;stroke-width:2px;stroke: #005BC1;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="23px" height="23px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 2px;stroke: #005BC1;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
    });
});