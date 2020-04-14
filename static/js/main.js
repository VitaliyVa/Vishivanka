$(document).ready(function(){


  let search_inp = $('.nav_search');

  search_inp.on('focus', function() {
    let focusFinder_search = $('.label_search');
    let focusFinder_searchInp = $('.nav_search');
    focusFinder_search.addClass('label_search_active');
    focusFinder_searchInp.addClass('nav_search_active');
  });

  search_inp.on('blur', function() {

    if ($(this).val().length < 1) {
    let blurFinder_search = $('.label_search');
    let blurFinder_searchInp = $('.nav_search');
        blurFinder_search.removeClass('label_search_active');
        blurFinder_searchInp.removeClass('nav_search_active');
    }
    
  });

  $('.search-svg').on('click', function() {
    search_inp.focus();

  })


  $('.header_home').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
    prevArrow: '<div class="header-slick-first"><</div>',
    nextArrow: '<div class="header-slick-second">></div>',
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
          breakpoint: 582,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
     

    ]

  });
  $('.header-slick-first').click(function(){
    $(".header_home").slick('slickPrev');
  });
  $('.header-slick-second').click(function(){
    $(".header_home").slick('slickNext');
  });
  $('.best-sales-block').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    arrows: true,
    prevArrow: '<div class="slick-first"><</div>',
    nextArrow: '<div class="slick-second">></div>',
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 452,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        
     

    ]
  });


  $('.slick-first').click(function(){
    $(".best-sales-block").slick('slickPrev');
  });
  $('.slick-second').click(function(){
    $(".best-sales-block").slick('slickNext');
  });

$('.ham').on('click', function() {
    $(this).toggleClass('active');

    $('.main-nav').toggleClass('main-nav_active');
});




});