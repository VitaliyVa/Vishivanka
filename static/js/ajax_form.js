$(function() {


    Onload();
  })
// /**
//  * valide_form - Валідація форм
//  * @param {selector form} ID Форми на яку підвішують валідацію
//  * @param {class name} class групи куди виводять помилки
//  * @param {bull} true Чи виводи вспливайку пісял відповіді ajax
//  *
//  **/
function Onload() {
    valide_form('#form_cons', '.inp-vak-wrap', true);
    valide_form('.order_form', '.input-field', true);
    valide_form('.reg_form', '.inp-vak-wrap', true);
}
function location_leng() {
    return location.pathname.split('/')[1];
}


function valide_form(id_form, error_inp_wrap, check_request) {
    var check_request = check_request;
    if ($(id_form).length > 0) {
        var lang_site;
        var error_text = {};

        lang_site = location_leng();
        switch (lang_site) {
            case 'uk':
            error_text.required = 'Поле обов\'язкове для заповнення';
            error_text.email = 'Поле має містити email';
            break;
            case 'ru':
            error_text.required = 'Поле обязательно для заполнения';
            error_text.email = 'Поле должно содержать email';
            break;
            case 'en':
            error_text.required = 'The field is required';
            error_text.email = 'The field must contain an email';
            break;
            default:
            error_text.required = 'Поле обов\'язкове для заповнення.';
            error_text.email = 'Поле має містити email.';
        }
        $(id_form).validate({
            errorPlacement: function (event, validator) {
                $(validator).parents(error_inp_wrap).append($(event));
            },
            rules: {
              email: {
                required: true,
                email: true,
              },
              order_email: {
                required: true,
                email: true,
              },
              name: {
                required: true,
              },
              mobile: {
                required: true,
              },
              city: {
                required: true,
              },
              password: {
                required: true,
              },
              re_password: {
                required: true,
              },
              order_name: {
                required: true,
              },
              order_mobile: {
                required: true,
              },
              order_adress: {
                required: true,
              },
              order_adress_2: {
                required: true,
              },
              phone: {
                required: true,
              },
              footer_text: {
                required: true,
              },
            },
            messages: {
                email: {
                required: error_text.required,
                email: error_text.email
                },
                order_email: {
                    required: error_text.required,
                    email: error_text.email
                    },
                name: {
                required: error_text.required,
                },
                mobile: {
                required: error_text.required,
                },
                city: {
                required: error_text.required,
                },
                password: {
                required: error_text.required,
                },
                re_password: {
                required: error_text.required,
                },
                order_name: {
                    required: error_text.required,
                },
                order_mobile: {
                    required: error_text.required,
                },
                order_adress: {
                    required: error_text.required,
                },
                order_adress_2: {
                    required: error_text.required,
                },
                phone: {
                required: error_text.required,
                },
                footer_text: {
                    required: error_text.required,
                },
            },
            submitHandler: function(form) {
                event.preventDefault();

                $('.load_spin').addClass('load_spin_active');
                var form_input = $(form).serializeArray();
                var url_form = form.action;
                var form_json = {

                };
                var data_form = $(form).data('form') ;

                $(form_input).each(function(index, obj) {
                    form_json[obj.name] = obj.value;
                });
                var pass_checked = true;
                var pass_finder = $('.pass_2').length; 

                if (pass_finder == 1) {
                    var pass_1 = $('.pass_1').val();
                    var pass_2 = $('.pass_2').val();
                        pass_checked = false;
                    if (pass_1 == pass_2) {
                        $('.pass_checked_error').text('');
                        pass_checked = true;
                    } else {
                        $('.pass_checked_error').text('паролі не співпадають');
                    }
                    
                }
                console.log('pass_finder: ', pass_finder);

                if(url_form != '' && pass_checked == true) {


                    console.log(url_form);
                    console.log(form_json);
                    console.log(new URLSearchParams($.param(form_json)));

                    fetch(url_form, {
                        method: 'POST',
                        body: new URLSearchParams($.param(form_json))
                    })
                    .then(data => {
                        return data.json();
                    })
                    .then(data => {
                        if(data.status=='OK' && typeof data['status'] !== "undefined"){
                            sayHi();
                        }
                        if(data.status=='BAD' && typeof data['status'] !== "undefined"){
                            $(".error_block_false").text("Невірний логін або пароль");
                            $('.load_spin').removeClass('load_spin_active');
                        }
                        if(typeof data['url'] !== "undefined" && data.url!=''){
                            location.href=data.url;
                        }
                    })
                }else {
                    console.log("forn_not_actions");
                }
                function sayHi() {
                    $('.load_spin').removeClass('load_spin_active');
                    $.fancybox.close();
                    if (check_request === true) {
                        $.fancybox.open({
                            src: '#modal-form_true',
                        });
                        var form_inputs = $(form)[0].querySelectorAll('input');

                        if (form_inputs.length > 0) {
                            for (var key in form_inputs) {
                                if (form_inputs.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
                                    if (form_inputs[key].type !== 'submit') {
                                        form_inputs[key].value = '';
                                    }
                                }
                            }
                            var form_textaria = $(form)[0].querySelectorAll('textarea');
                            if (form_textaria.length > 0) {
                                form_textaria[0].value = '';
                            }
                        }
                    }
                }
            }
        });
    }
}
