
// getting all the elements
const navbarToggler = document.getElementById('navbar-toggler');
const mobileMenu = document.getElementById('mobile-menu');
const onfocusShade = document.getElementById('onfocus-shade');
const closeNav = document.getElementById('close-nav');
const body = document.querySelector('body');

// showing and hiding the mobile menu
navbarToggler.addEventListener('click', function () {
    mobileMenu.classList.add('shown');
    onfocusShade.classList.add('active');
    body.style.overflow = 'hidden';
});

closeNav.addEventListener('click', function () {
    mobileMenu.classList.remove('shown');
    onfocusShade.classList.remove('active');
    body.style.overflow = 'auto';
});

onfocusShade.addEventListener('click', function () {
    mobileMenu.classList.remove('shown');
    onfocusShade.classList.remove('active');
    body.style.overflow = 'auto';
});

$("#mobile-menu ul li a").on("click", function () {
    $("#mobile-menu").removeClass("shown");
    $(".onfocus-shade").removeClass("active");
    $("body").css("overflow", "auto");
});

// showing sub menu in the mobile menu
$(".services-options-toggler").on("click", function() {
    $(".services-options").addClass("show");
    $(".mobile-menu-options").addClass("hide");
});

$(".back-from-services-options").on("click", function() {
    $(".services-options").removeClass("show");
    $(".mobile-menu-options").removeClass("hide");
});

// Show and hide the back-to-top button
$(document).ready(function () {
    $(window).scroll(function () {
        800 < $(this).scrollTop() ? $("#back2top").fadeIn() : $("#back2top").fadeOut()
    })
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var a = window.pageYOffset;
    prevScrollpos > a ? document.getElementById("back2top").style.right = "10px" : document.getElementById("back2top").style.right = "-50px";
    prevScrollpos = a
};

// for smooth scrolling
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeLapsed = currentTime - startTime;
        var run = ease(timeLapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeLapsed < duration) requestAnimationFrame(animation); 
    }
    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    }
    requestAnimationFrame(animation);
}

$('.goToAbout, .scroll-indicator').on('click', function() {
    smoothScroll('.about', 1000);
});
$('.goToServices').on('click', function() {
    smoothScroll('.services', 2000);
});
$('.goToWorks').on('click', function() {
    smoothScroll('.works', 2000);
});
$('.goToContact').on('click', function() {
    smoothScroll('.contact', 2000);
});
$('.back2top').on('click', function() {
    smoothScroll('.landing', 2000);
});

// slider options and modification
$(document).ready(function () {
    $(".team-wrap").slick({
        slidesToShow: 1,
        speed: 1E3,
        autoplay: !1,
        autoplaySpeed: 5E3,
        infinite: !0,
        fade: !1,
        dots: !0,
        dotsClass: "slick-dots",
        arrows: !1,
        prevArrow: '<button type="button" class="slick-prev fas fa-arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next fas fa-arrow-right"></button>',
        adaptiveHeight: !0,
        mobileFirst: !0,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
                autoplay: !0
            }
        }]
    })
});

$(document).ready(function () {
    $(".testimonials").slick({
        speed: 1E3,
        autoplay: !0,
        autoplaySpeed: 5E3,
        infinite: !0,
        slidesToShow: 1,
        fade: !0,
        dots: !1,
        dotsClass: "slick-dots",
        arrows: !0,
        prevArrow: '<button type="button" class="slick-prev fas fa-arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next fas fa-arrow-right"></button>',
        adaptiveHeight: !0
    })
});

// fetch the current year and display it in the footer
var yearId = document.getElementById("currentYear");
var currentYear = new Date().getFullYear();
yearId.innerHTML = currentYear;