$(document).ready(function(){
  var currentPage = 0;




let first_to_cap = $('.first_to_cap');
let show_kolvo = $('.show_kolvo');

$('.cost_filter_link').on('click', function() {
  let data_finder = $(this).data('cost');
  first_to_cap.val(data_finder);
});

$('.show_filter_link').on('click', function() {
  let data_finder = $(this).data('show');
  show_kolvo.val(data_finder);
});



setInterval(function() {

var filter_form = $('.filter_form').serializeArray();
// console.log('filter_form: ', filter_form);


}, 1000);



var hidden_min_range = $('.input_for_min_range');
var hidden_max_range = $('.input_for_max_range');

var rangeFinder = $('.range_slider').length;
if (rangeFinder >= 1) {
  var slider = document.getElementById('slider');

  noUiSlider.create(slider, {
      start: [300, 5000],
      connect: true,
      range: {
          'min': 10,
          'max': 6000
      },
      tooltips: false,
  });
  var val_floor1;
  var val_floor2;
  slider.noUiSlider.on('update', function (values) {
    val_floor1 = Math.floor(values[0]);
    val_floor2 = Math.floor(values[1]);

    hidden_min_range.val(val_floor1);
    hidden_max_range.val(val_floor2);

    $('.cost_filter_num').text(val_floor1 + " - " + val_floor2);
});
  
}

hidden_min_range.val(val_floor1);
hidden_max_range.val(val_floor2);

$('.cost_filter_num').text(val_floor1 + " - " + val_floor2);
 










  function get_card_generate() {
    currentPage++;
    var fData = new FormData();
    fData.append('page', currentPage);
    fData.append('per_page', 3);
    
    fetch('', {
        method: 'POST',
        body: fData
      })
      .then(data => {
        return data.json();
      })
      .then(body => {
        let cur_step = 0;
        var last_page = body.last_page;
        var removeBtn = last_page;
        if (last_page >= currentPage) {
            if (currentPage == removeBtn) {
                $('.prod_card_more').css('display', 'none');
            }
           
            let fragment = document.createDocumentFragment();
              for (var key in body.page_cars) {
                cur_step += 0.2;
                cardNew1(body.page_cars[key]);
                var creat_card = createProdCard(body.page_cars[key], cur_step);
                   fragment.appendChild(creat_card);
                   $('.main_product-block')[0].appendChild(fragment);
              }      

        } 
          
        


      })
  }

$('.prod_card_more').on('click', function() {
  $('.main_product-block')[0].appendChild(createProdCard());
});

function createProdCard (product, step) {
  let card_prof = document.createElement('div');
  card_prof.style.setProperty('animation-delay', (step) + 's'),
  card_prof.classList.add('product_card-prof');

  var link_wrap = document.createElement('a');
  link_wrap.classList.add('prod_card_link');
  link_wrap.setAttribute(`href`, "product.my_absolute_url");

  var prod_img = document.createElement('img');
  prod_img.classList.add('prod_card-img');
  prod_img.setAttribute('src', 'static/img/best-1.jpg');

  var prod_name = document.createElement('div');
  prod_name.classList.add('prod_card-name');
  prod_name.textContent = 'Костюм';

  var prod_info = document.createElement('div');
  prod_info.classList.add('prod_card-info');

  var prod_cost = document.createElement('div');
  prod_cost.classList.add('prod_card-cost');
  prod_cost.textContent = '1022 грн.';

  var prod_btn = document.createElement('a');
  prod_btn.classList.add('prod_card-btn');
  prod_btn.setAttribute(`href`, "product.my_absolute_url");
  prod_btn.textContent = 'У Кошик';


  card_prof.appendChild(link_wrap);
  link_wrap.appendChild(prod_img);
  card_prof.appendChild(prod_name);
  card_prof.appendChild(prod_info);
  prod_info.appendChild(prod_cost);
  prod_info.appendChild(prod_btn);
  

  
       return card_prof;
};








  $('.cost_filter_link').on('click', function() {
      $('.cost_filter_link').removeClass('cost_filter_link_active');
      $(this).addClass('cost_filter_link_active');

  });

  $('.show_filter_link').on('click', function() {
    $('.show_filter_link').removeClass('show_filter_link_active');
    $(this).addClass('show_filter_link_active');
    
});








  var inputHasFocus = $('.input_focus');
inputHasFocus.on('focus', function() {
  let focusFinder = $(this).parents('.inp-vak-wrap').find('.label__style');
  focusFinder.addClass('label__style_active');
});

inputHasFocus.on('blur', function() {
  if ($(this).val().length < 1 || $(this).val() == '+38(___) __ __ ___') {
      let blurFinder =$(this).parents('.inp-vak-wrap').find('.label__style');
      blurFinder.removeClass('label__style_active');
  }
  
});

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



var slickFinder = $('.header_home').length;
if (slickFinder >= 1) {

  $('.header_home').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
  
}

var slickFinder2 = $('.best-sales-block').length;
if (slickFinder2 >= 1) {

  $('.best-sales-block').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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

}

 
$('.ham').on('click', function() {
    $(this).toggleClass('active');

    $('.main-nav').toggleClass('main-nav_active');
});




});