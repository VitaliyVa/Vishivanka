$(document).ready(function(){
  var currentPage = 0;
  var super_kostile = false;










  console.log();

  var anActive_inp = $('.radio_block.ANactive').find('.input_radio');
  var anActive_label = $('.radio_block.ANactive').find('.label_radio');

  anActive_inp.remove();
  
  // $(anActive_label)[0].innerHTML = `<label class="label_radios" for="rb-10"><s>${anActive_label.text()}</s></label>`;

  




 
    $('.order_validate').on('focus', function() {
      if (super_kostile == true) {
        func_for_indefined_input('.first_step-content', '.order_validate', '.order_label', '.input-field');
      }
    });
    $('.order_validate').on('blur', function() {
      if (super_kostile == true) {
        func_for_indefined_input('.first_step-content', '.order_validate', '.order_label', '.input-field');
      }
    });
    document.addEventListener('keydown', function(event) {
      
      if (super_kostile == true) {
        func_for_indefined_input('.first_step-content', '.order_validate', '.order_label', '.input-field');
      }
    });

  
$('.first_order_btn').on('click', function() {
  super_kostile = true;
  func_for_indefined_input('.first_step-content', '.order_validate', '.order_label', '.input-field');

// var finder_error = $('.error').parents('.input-field').find('order_label');
  // console.log('finder_error: ', finder_error);
  // finder_error.addClass('123');
});

function func_for_indefined_input (input_content_block, main_inputs, main_label, input_parents) {
  var finder_undefind_inp = $(input_content_block + ' ' + main_inputs);
  for (let i = 0; i < finder_undefind_inp.length; i++) {
    
    let curr_input = finder_undefind_inp[i];
    var check_val = $(curr_input).val();

    if (check_val == "") {
      var finder_error = $(curr_input).parents(input_parents).find(main_label);
      finder_error.addClass('error_label');
      $(curr_input).addClass('error_input');
    } else if (check_val !== "") {
      var finder_error = $(curr_input).parents(input_parents).find(main_label);
      finder_error.removeClass('error_label');
      $(curr_input).removeClass('error_input');
    }
  }
}








$('.order_btn_active_fixed').on('click', function() {
  $('.step_2').removeClass('wrong');
});

  $(".order_tab_link").on("click", function(){
  // ($(this)[0].dataset.tab);
  var className = $(this).data('tab');
  console.log('className: ', className);

    if (className == 2) {
      $(".change_order_adress").remove();
    } else {
      $(".change_order_adress").remove();

      var input_order = document.createElement('input');
      input_order.classList.add('validate', 'order_validate', 'change_order_adress');
      input_order.setAttribute(`name`, "order_adress_2");
      input_order.setAttribute(`id`, "order_adress_2");
      input_order.setAttribute(`type`, "text");
      input_order.setAttribute('required', 'required');
      $('.change_input-field')[0].appendChild(input_order);



var orderInputHasFocus = $('.order_validate');
orderInputHasFocus.on('focus', function() {
  let focusFinder = $(this).parents('.input-field').find('.order_label');
  focusFinder.addClass('order_label_active');
  
});

orderInputHasFocus.on('blur', function() {
  if ($(this).val().length < 1 || $(this).val() == '+38(___) __ __ ___') {
      let blurFinder =$(this).parents('.input-field').find('.order_label');
      blurFinder.removeClass('order_label_active');
  }
  
});
    }
  

    ($(".order_tab_link").removeClass("order_tab_link_active"));
     ($(this).addClass("order_tab_link_active"));
    ($(".order_tab_content").removeClass("order_tab_content_active"));
    
    var content_tab = $("#tab_" + className);
    content_tab.addClass("order_tab_content_active");
  });


  $(".cabinet_link").on("click", function(){
    // ($(this)[0].dataset.tab);
    var className = $(this).data('tab');
    console.log('className: ', className);

    ($(".cabinet_link").removeClass("cabinet_link_active"));
     ($(this).addClass("cabinet_link_active"));
    ($(".cabinet_content-block").removeClass("cabinet_content-block_active"));
    
    var content_tab = $("#tab_" + className);
    content_tab.addClass("cabinet_content-block_active");
  });
   

$('.order_label_check-1').on('click', function() {
  $('.change_order_label').text('Адреса');
  $('.change_order_adress').attr('type', 'text');
  $('.change_order_adress').val('');

});

$('.order_label_check-2').on('click', function() {
  $('.change_order_label').text('Номер відділення');
  $('.change_order_adress').attr('type', 'number');
  $('.change_order_adress').val('');

});






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


var wish_finder = $('.wish_content-wrap').length;
  if (wish_finder >= 1) {
    $('.wish_content-wrap')[0].appendChild(createWishCard());
  }



function createWishCard (product, step) {
  
  let basket_card = document.createElement('div');
  basket_card.classList.add('basket_card');

  var basket_left = document.createElement('div');
  basket_left.classList.add('basket_left-content');

  var basket_right = document.createElement('div');
  basket_right.classList.add('basket_right-content');

  var basket_img_wrap = document.createElement('div');
  basket_img_wrap.classList.add('basket-img');

  var basket_img = document.createElement('img');
  basket_img.setAttribute('src', 'static/img/basket-1.jpg');

  var basket_name = document.createElement('div');
  basket_name.classList.add('basket-name', 'basket_name-content');
  basket_name.textContent = 'Сукня Фіалка';

  var basket_size = document.createElement('div');
  basket_size.classList.add('basket-size', 'basket_name-content');
  basket_size.textContent = 'S';

  var basket_color = document.createElement('div');
  basket_color.classList.add('basket-color', 'basket_name-content');
  basket_color.setAttribute('style', 'background-color:' + '#929db2' + ';');

  var basket_cost = document.createElement('div');
  basket_cost.classList.add('basket-cost', 'basket_name-content');
  basket_cost.textContent = '₴ 1223';

  var basket_btn = document.createElement('div');
  basket_btn.classList.add('basket_btn');
  basket_btn.textContent = 'Додати в кошик';

  var del_block = document.createElement('div');
  del_block.classList.add('del_block');

  var del_img = document.createElement('img');
  del_img.setAttribute('src', 'static/img/trash.svg');

  var del_btn = document.createElement('div');
  del_btn.classList.add('del_btn');
  del_btn.textContent = 'Видалити';

  basket_card.appendChild(basket_left);
  basket_card.appendChild(basket_right);
  basket_left.appendChild(basket_img_wrap);
  basket_img_wrap.appendChild(basket_img);
  basket_left.appendChild(basket_name);
  basket_left.appendChild(basket_size);
  basket_left.appendChild(basket_color);
  basket_left.appendChild(basket_cost);
  basket_right.appendChild(basket_btn);
  basket_right.appendChild(del_block);
  del_block.appendChild(del_img);
  del_block.appendChild(del_btn);
  
  

  
       return basket_card;
       
};


var basket_finder = $('.basket_content-wrap').length;
  if (basket_finder >= 1) {
    $('.basket_content-wrap')[0].appendChild(createBasketCard());
    $('.basket_content-wrap')[0].appendChild(createBasketCard());
  }


function createBasketCard (product, step) {
  
  let basket_card = document.createElement('div');
  basket_card.classList.add('basket_card');

  var basket_left = document.createElement('div');
  basket_left.classList.add('basket_left-content');

  var basket_img_wrap = document.createElement('div');
  basket_img_wrap.classList.add('basket-img');

  var basket_img = document.createElement('img');
  basket_img.setAttribute('src', 'static/img/basket-1.jpg');

  var basket_name = document.createElement('div');
  basket_name.classList.add('basket-name', 'basket_name-content');
  basket_name.textContent = 'Сукня Фіалка';

  var basket_size = document.createElement('div');
  basket_size.classList.add('basket-size', 'basket_name-content');
  basket_size.textContent = 'S';

  var basket_color = document.createElement('div');
  basket_color.classList.add('basket-color', 'basket_name-content');
  basket_color.setAttribute('style', 'background-color:' + '#929db2' + ';');

  var basket_cost = document.createElement('div');
  basket_cost.classList.add('basket-cost', 'basket_name-content');
  basket_cost.textContent = '₴ 1223';

  var basket_right = document.createElement('div');
  basket_right.classList.add('basket_right-content');

  

  var del_block = document.createElement('div');
  del_block.classList.add('del_block');

  var del_img = document.createElement('img');
  del_img.setAttribute('src', 'static/img/trash.svg');

  var del_btn = document.createElement('div');
  del_btn.classList.add('del_btn');
  del_btn.textContent = 'Видалити';

  basket_card.appendChild(basket_left);
  basket_card.appendChild(basket_right);
  basket_left.appendChild(basket_img_wrap);
  basket_img_wrap.appendChild(basket_img);
  basket_left.appendChild(basket_name);
  basket_left.appendChild(basket_size);
  basket_left.appendChild(basket_color);
  basket_left.appendChild(basket_cost);
  basket_right.appendChild(del_block);
  del_block.appendChild(del_img);
  del_block.appendChild(del_btn);
  
  

  
       return basket_card;
       
};





$('.del_block').on('click', function() {
 $(this).parents(".basket_right-content").parents('.basket_card').remove() //удаляем элемент

 let finder_prod_card = $('.basket_card').length;

    if (finder_prod_card == 0) {

        $('.basket_info-block_none').addClass('basket_info-block_none_active');
        $('.basket_none').addClass('basket_none_active');

      }

});
    let finder_prod_card = $('.basket_card').length;

    if (finder_prod_card == 0) {
      $('.basket_info-block_none').addClass('basket_info-block_none_active');
      $('.basket_none').addClass('basket_none_active');
    }






  $('.cost_filter_link').on('click', function() {
      $('.cost_filter_link').removeClass('cost_filter_link_active');
      $(this).addClass('cost_filter_link_active');

  });

  $('.show_filter_link').on('click', function() {
    $('.show_filter_link').removeClass('show_filter_link_active');
    $(this).addClass('show_filter_link_active');
    
});


var order_finder = $('.order_content_card-wrap').length;
  if (order_finder >= 1) {
    $('.order_content_card-wrap')[0].appendChild(createOrderCard());
  }



function createOrderCard (product, step) {
  let card_order_prof = document.createElement('div');
  card_order_prof.classList.add('card_info-prof');

  var order_img = document.createElement('img');
  order_img.setAttribute('src', 'static/img/card-2.jpg');

  var char_wrap = document.createElement('div');
  char_wrap.classList.add('char_data');

  var char_top = document.createElement('div');
  char_top.classList.add('char_top');

  var char_name = document.createElement('span');
  char_name.classList.add('char_web', 'char_name');
  char_name.textContent = 'Сукня Фіалка' + ", ";

  var char_2 = document.createElement('span');
  char_2.classList.add('char_web', 'char_2');
  char_2.textContent = 'Синій колір' + ", ";

  var char_3 = document.createElement('span');
  char_3.classList.add('char_web', 'char_3');
  char_3.textContent = 'S';

  var char_cost = document.createElement('span');
  char_cost.classList.add('char_web', 'char_one_cost');
  char_cost.textContent = '₴ 1223';

  card_order_prof.appendChild(order_img);
  card_order_prof.appendChild(char_wrap);
  char_wrap.appendChild(char_top);
  char_top.appendChild(char_name);
  char_top.appendChild(char_2);
  char_top.appendChild(char_3);
  char_wrap.appendChild(char_cost);
  
  

  
       return card_order_prof;
};



// function easy_create(name, tag, clases, attr, attr_content, content) {
//   var name = document.createElement(tag);
//   name.classList.add(clases);
//   name.setAttribute(attr, attr_content);
//   name.textContent = content;
// }


var orderInputHasFocus = $('.order_validate');
orderInputHasFocus.on('focus', function() {
  let focusFinder = $(this).parents('.input-field').find('.order_label');
  focusFinder.addClass('order_label_active');
});

orderInputHasFocus.on('blur', function() {
  if ($(this).val().length < 1 || $(this).val() == '+38(___) __ __ ___') {
      let blurFinder =$(this).parents('.input-field').find('.order_label');
      blurFinder.removeClass('order_label_active');
  }
  
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


  var slickFinder0 = $('.slider_card-wrap').length;
  if (slickFinder0 >= 1) {
    $('.main_card_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.mini_slider'
    });

    $('.mini_slider').slick({
      infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    asNavFor: '.main_card_slider',
    });
  }

var slickFinder1 = $('.header_home').length;
if (slickFinder1 >= 1) {

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






// ========================================================>




});