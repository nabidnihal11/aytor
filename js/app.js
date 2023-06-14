

setTimeout(()=>{
  $('#popup').show()
},1000)


$(function(){
    'use strict';


    // news letter hide 
    
    $('.hide_btn').on('click', function () {
      $('#popup').hide(500)
    });


    $('#popContainer').on('click', function(e){
      
      if(e.target.classList.contains('popcontainer') )
      {
        $('#popup').hide(500)
        $(this).hide(500)

      }
      console.log(e.target);
    })
  




// search box 

    document.getElementById('search_bar').addEventListener('click', function() {
    document.getElementById('search-box').classList.add("show");
    });

  document.getElementById('search-close').addEventListener("click", function () {
  document.getElementById('search-box').classList.remove("show");
  });




// counter up 

// $('.counting_number').counterUp({
//   delay: 10,
//   time: 2000
// });
   



})


jQuery(document).ready(function($) {
  $('.counting_number').counterUp({
      delay: 10,
      time: 2000
  });
});




    // preloader 

    $(window).on("load", function () {
      $("#preloader").fadeOut(1000);
    });

    $("#cancel_preloader").on("click", function () {
      $("#preloader").fadeOut(500);
    });













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


      if (scrollSize > 500) {
          $('#navigation').addClass('active')
      } else {
          $('#navigation').removeClass('active')
      }
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
    dotsClass: 'banner_slider_dots',
});



// mew product slider 

$('.new_product_slider').slick({
    slidesToShow: 4,
    arrows: true,
    prevArrow:'.new_product_left',
    nextArrow:'.new_product_right',
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
})



// deals slider 

$('.deals_slider').slick({
  slidesToShow: 2,
  arrows: false,
  autoplay:true,
  dots: true,
  dotsClass: 'deal_dots',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
  
})


// blog slider 

$('.blog_slider').slick({
  slidesToShow: 4,
  autoplay: true,
  arrows: false,
  dots: true,
  dotsClass: 'blog_dots',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 3,
      }
    },
    
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
})



// blog_main_slider slider 

$('.blog_main_slider').slick({
  slidesToShow: 1,
  autoplay: true,
  arrows: false,
  pauseOnHover: false,
})


// team slider 

$('.team_slider').slick({
  slidesToShow: 4,
  autoplay: true,
  pauseOnHover: false,
  arrows: true,
  nextArrow: '.team_right',
  prevArrow: '.team_left',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
  ]

})


// testimonial slider 

$('.testimonial_slider').slick({
  slidesToShow: 1,
  arrows: false,
  fade: true,
  dots: true,
  dotsClass: 'testimonial_dots',
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
  dots: true,
  dotsClass: 'instagram_dots',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
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
  dots: false,
  arrows: true,
  nextArrow: '.shop_small_slider_right',
  prevArrow: '.shop_small_slider_left',
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
})


// star rating 

const stars = document.querySelectorAll(".stars i");
stars.forEach((star, index1) => {
  star.addEventListener("click",() => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("fa-solid", "fa-star") : star.classList.remove("fa-regular","fa-star");
      // index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
    });
  });
});




// related product slider 

$('.related_product_slider').slick({
  slidesToShow: 4,
  arrows: false,
  dots: false,
  autoplay: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
  ]

})




// count down timer 

$("#deals_timer").countdown("2023/12/31", function (event) {
    var $this = $(this).html(
      event.strftime(
        "" +
          '<div class="deals_timer_param"><span>%D</span><br><span>Days</span></div>' +
          "<small>:</small>" +
          '<div class="deals_timer_param"><span>%H</span><br><span>Hours</span></div>' +
          "<small>:</small>" +
          '<div class="deals_timer_param"><span>%M</span><br><span>Minute</span></div>' +
          "<small>:</small>" +
          '<div class="deals_timer_param"><span>%S</span><br><span>Sec</span></div>'
      )
    );
  });







// venobox connect 
new VenoBox({
  selector: ".my-video-links"
});


// aos connect 
AOS.init();




// video open modal 

// const videoPlayBtn = document.querySelector('.video_play span')
// const modalBox = document.querySelector('#modal')
// const modalCloseBtn = modalBox.querySelector('.modalCloseBtn')

// function openVideo () {
//     modalBox.classList.add('active')
// }

// function closeVideo(){
//     modalBox.classList.remove('active')
// }

// videoPlayBtn.addEventListener('click',openVideo)
// modalCloseBtn.addEventListener('click',closeVideo)






// product count plus minus 

// function cartMinus() {

//   let btn = document.getElementById('cart_minus');
//   // console.log(btn)
//   let input = document.getElementById('cart_value');


//   btn.addEventListener('click', function(){
//     if (input.value < 2) {
//       btn.setAttribute('disabled', true);
//     } else {
//       input.value--;
//     }
//   })
// }

// cartMinus()

// function cartPlus() {

//   let btn = document.getElementById('cart_plus');
//   let input = document.getElementById('cart_value');


//   btn.addEventListener('click', function(){
//     input.value++;
//     if (input.value > 0) {
//       document.getElementById('cart_minus').removeAttribute('disabled');
//     }
//   })   
// }
// cartPlus()











