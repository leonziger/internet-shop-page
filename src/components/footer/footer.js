import $ from 'jquery';
import toastr from "toastr";
import {openThanksModal} from "../thanks/thanks";

$('.subscribe__submit').click(function(e) {
    e.preventDefault();

    const subForm = $('.subscribe');
    const fieldErrorClassName = 'subscribe-error';
    const fieldValidClassName = 'subscribe-valid';

    const subValidator = subForm.validate({
        highlight: (element) => {
            $(element).addClass(fieldErrorClassName).removeClass(fieldValidClassName);
        },

        unhighlight: (element) => {
            $(element).removeClass(fieldErrorClassName).addClass(fieldValidClassName);
        },

        errorPlacement: function(error, element) {
            error.addClass('subscribe__error');
            error.insertAfter(element);
        },
        submitHandler: function(form) {
            subForm.trigger('reset');
            $('.modal__close').trigger('click');
            openThanksModal('Вы подписаны на рассылку');
        }
    });

    subForm.click( function() {
        subValidator.form();
    });

});