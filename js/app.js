$(function(){
    'use strict';

    $('.hide_btn').on('click', function () {
      $('#popup').hide()
    });

})

// bootstrap toolkit 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



// menu scroll 

$(function () {

  $(window).on('scroll', function () {
      var scrollSize = $(window).scrollTop()
      if (scrollSize > 500) {
          $('#backtotop').slideDown()
      } else {
          $('#backtotop').slideUp()
      }


      // if (scrollSize > 500) {
      //     $('#navigation').addClass('active')
      // } else {
      //     $('#navigation').removeClass('active')
      // }
  })
}) 

// backto top 

$('#backtotop').on('click', function () {
  $('html, body').animate({
      scrollTop:0,
  },1000)
})






// banner slider 

$('.banner_slider').slick({
    arrows: false,
    autoplay:true,
    dots:true,
    fade:true,
    pauseOnHover: false,
});



// mew product slider 

$('.new_product_slider').slick({
    slidesToShow: 4,
    arrows: true,
    autoplay:true,
})



// deals slider 

$('.deals_slider').slick({
  slidesToShow: 2,
  arrows: false,
  autoplay:true,
  
})


// blog slider 

$('.blog_slider').slick({
  slidesToShow: 4,
  autoplay: true,
  arrows: false,
})



// team slider 

$('.team_slider').slick({
  slidesToShow: 4,
  autoplay: true,
  arrows: false,
  pauseOnHover: false,
})


// testimonial slider 

$('.testimonial_slider').slick({
  slidesToShow: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  pauseOnHover: false,
  asNavFor: '.test_animate_slider',
})

$('.test_animate_slider').slick({
  
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  asNavFor: '.testimonial_slider',
  focusOnSelect:true,
  dots: false,
  pauseOnHover: false,
  centerMode:true,
  centerPadding:'0px',

})

// instagram slider 

$('.instagram_slider').slick({
  slidesToShow: 6,
  autoplay: true,
  arrows: false,
})




// shop product item slider 

$('.shop_product_item_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  autoplay: true,
  asNavFor: '.shop_product_small_slider',
})


$('.shop_product_small_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.shop_product_item_slider',
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
})




// related product slider 

$('.related_product_slider').slick({
  slidesToShow: 4,
  arrows: false,
  dots: false,
  autoplay: true,
  pauseOnHover: false,
})




// count down timer 

$("#deals_timer").countdown("2023/12/31", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          '<div class="deals_timer_param"><span>%D</span><span>Days</span></div>' +
          "<span>:</span>" +
          '<div class="deals_timer_param"><span>%H</span><span>Hours</span></div>' +
          "<span>:</span>" +
          '<div class="deals_timer_param"><span>%M</span><span>Minute</span></div>' +
          "<span>:</span>" +
          '<div class="deals_timer_param"><span>%S</span><span>Sec</span></div>'
      )
    );
  });








// cursor pointer 








// product count plus minus 

let cart_value = document.getElementById("cart_value");
let minusBtn = document.getElementById("cart_minus");

function cartMinus(btn_id) {
    if (cart_value.value < 2) {
        document.getElementById(btn_id).setAttribute("disabled", true);
    } else {
        cart_value.value--;
    }
}

function cartPlus() {
    cart_value.value++;
    if (cart_value.value > 1) {
      minusBtn.removeAttribute('disabled');
    }
}





// aos connect 
Aos.init();


// venobox connect 

new VenoBox({
  selector: '.my-video-links',
});







// pop up 
// $('.hide_btn').on('click', function () {
//   $('#popup').hide()
// })

