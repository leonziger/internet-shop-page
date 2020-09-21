import $ from 'jquery';
import {openThanksModal} from "../thanks/thanks";

export default {
  validate() {
    return $('.enter__form').validate({
      submitHandler(form){
        openThanksModal('Добро пожаловать на сайт');
      }
    });
  }
};
