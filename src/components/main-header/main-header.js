import $ from 'jquery';
import vex from 'vex-js';


$('.main-header__auth-btn').click(function(e) {
  e.preventDefault();

  const modal = $(`[data-modal=enter]`);

  if (!modal.length) {
    return console.error('Modal is not exist!');
  }

    vex.open({
        unsafeContent: modal.html(),
        closeClassName: 'modal__close',
        afterOpen: function () {
            const enterForm = $('.enter__form');

            $.validator.addMethod('condition', function(value, element, condition) {
                if (typeof condition !== 'function') {
                    throw new Error('"condition" rule must return a function');
                }
                return this.optional(element) || condition(value);
            });
            const enterValidator = enterForm.validate({
                submitHandler: function(form) {
                    enterForm.trigger('reset');
                    $('.modal__close').trigger('click');
                    toastr.success('Добро пожаловать на сайт');
                }
            });

            enterForm.click( function() {
                enterValidator.form();
            });
        }
    });
});
