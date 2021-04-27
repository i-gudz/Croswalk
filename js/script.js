let myFullpage = new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', '3rdPage', '4page', '5page', '6page', '7page',
        '8page', '9page', '10page', '11page', '12page'
    ],
    menu: '.navigation',
    lazyLoad: true,
    scrollBar: true
});

let delay = 15000;
let sliderRadios = document.getElementsByName("carousel-3d");
let index = 0
let imageCount = sliderRadios.length;

setInterval(function () {
    index++;
    if (index > imageCount - 1) {
        index = 0;
    }
    sliderRadios[index].click();
}, delay);

let menu = document.querySelector(".menus"),
    toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
    toggle.classList.toggle("menu-open");
};

function toggleMenu() {
    menu.classList.toggle("active");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);

$(window).scroll(function () {
    let top = $('#section2').offset().top,
        sctop = $(this).scrollTop(),
        winh = $(this).height(),
        y = top - sctop - winh;
    if (y > 0 || -y > winh) {
        $('.menuGallery').removeClass('active');
    } else {
        $('.menuGallery').addClass('active');
    }
});

$(window).scroll(function () {
    let top = $('#section4').offset().top,
        sctop = $(this).scrollTop(),
        winh = $(this).height(),
        y = top - sctop - winh;
    if (y > 0 || -y > winh) {
        $('.menuRoad').hide();
        $('.menuApplication').css('opacity', '.7');
    } else {
        $('.menuRoad').show();
        $('.menuApplication').css('opacity', '0');
    }
});

$(window).scroll(function () {
    let top = $('#section5').offset().top,
        sctop = $(this).scrollTop(),
        winh = $(this).height(),
        y = top - sctop - winh;
    if (y > 0 || -y > winh) {
        $('.menuApplication').removeClass('active');
    } else {
        $('.menuApplication').addClass('active');
    }
});

$(window).scroll(function () {
    let top = $('#section6').offset().top,
        sctop = $(this).scrollTop(),
        winh = $(this).height(),
        y = top - sctop - winh;
    if (y > 0 || -y > winh) {
        $('.menuApplication').removeClass('active');
    } else {
        $('.menuApplication').addClass('active');
    }
});



$(window).scroll(function () {
    let top = $('#section7').offset().top,
        sctop = $(this).scrollTop(),
        winh = $(this).height(),
        y = top - sctop - winh;
    if (y > 0 || -y > winh) {
        $('.menuProjects').removeClass('active');
    } else {
        $('.menuProjects').addClass('active');
    }
});
$(window).scroll(function () {
    let top = $('#section8').offset().top,
        sctop = $(this).scrollTop(),
        winh = $(this).height(),
        y = top - sctop - winh;
    if (y > 0 || -y > winh) {
        $('.menuProjects').removeClass('active');
    } else {
        $('.menuProjects').addClass('active');
    }
});

$(window).scroll(function () {
    let top = $('#section10').offset().top,
        sctop = $(this).scrollTop(),
        winh = $(this).height(),
        y = top - sctop - winh;
    if (y > 0 || -y > winh) {
        $('.menuConnection').removeClass('active');
    } else {
        $('.menuConnection').addClass('active');
    }
});