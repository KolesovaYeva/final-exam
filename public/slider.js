
$(document).ready(function(){
    $('.slider_wrapper').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        autoplay:true,
        autoplaySpeed:300,
        speed: 1400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: true,
        responsive: [
        {
            breakpoint: 1025,
            settings: {
                lazyLoad: 'ondemand',
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                // prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="./assets/img/prev-icon.svg"/></button>',
                // nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="./assets/img/next-icon.svg"/></button>',
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 769,
            settings: {
                lazyLoad: 'ondemand',
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 569,
            settings: {
                lazyLoad: 'ondemand',
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }
        ]
    });
});

$(document).ready(function(){
  $('.slider_music_wrapper').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})