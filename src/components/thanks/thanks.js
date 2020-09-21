import $ from "jquery";
import vex from "vex-js";

export const openThanksModal = function(message) {

    const modal = $(`[data-modal=thanks]`);

    if (!modal.length) {
        return console.error('Modal is not exist!');
    }

    vex.open({
        unsafeContent: modal.html(),
        afterOpen: function() {
            const hello = $('.thanks__description');
            hello.html(message);
        },
        closeClassName: 'thanks__close'
    });
};
