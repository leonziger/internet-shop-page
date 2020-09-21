import $ from 'jquery';
import select2 from 'select2/dist/js/select2.full';
import { maskInput } from 'vanilla-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import toastr from 'toastr';

select2($);

$('.filter__selector select').select2({
  minimumResultsForSearch: -1,
  dropdownCssClass: 'filter__selectorDropdown'
});

const pricesFields = document.querySelectorAll('.filter__prices input');

pricesFields.forEach(input => {
  maskInput({
    inputElement: input,
    mask: createNumberMask({
      prefix: '',
      allowDecimal: true
    })
  });
});

$('.filter__innerBlocks').submit(function(e) {
  e.preventDefault();

  const from = $(this).find('[name=price_from]');
  const to = $(this).find('[name=price_to]');

  if (to.val() < from.val()) {
    toastr.error('Начальная цена больше конечной!');
  }
});

const filter__tab = $('.filter__tab');
const filter__block = $('.filter__block');

filter__tab.each(function() {
    filter__tab.click(function() {
        const index = $(this).index();
        filter__tab.eq(index).addClass('filter__tab_active').siblings().removeClass('filter__tab_active');
        filter__block.eq(index).addClass('filter__block_active').siblings().removeClass('filter__block_active');
        return false;
    });
});
