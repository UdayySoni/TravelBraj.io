(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

const carousel = document.querySelector('.carousel');
const container = carousel.querySelector('.carousel-container');
const prevBtn = carousel.querySelector('.carousel-prev');
const nextBtn = carousel.querySelector('.carousel-next');
const slides = container.querySelectorAll('img');

let currentSlide = 0;
let slideWidth = slides[0].clientWidth;

function slideToSlide(slideIndex) {
  container.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  currentSlide = slideIndex;
}

function prevSlide() {
  if (currentSlide === 0) {
    slideToSlide(slides.length - 1);
  } else {
    slideToSlide(currentSlide - 1);
  }
}

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    slideToSlide(0);
  } else {
    slideToSlide(currentSlide + 1);
  }
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

slideToSlide(currentSlide);
