import $ from 'jquery';
import select2 from 'select2/dist/js/select2.full';


select2($);

$('.search__select select').select2({
  minimumResultsForSearch: -1,
  dropdownCssClass: 'search__selectDropdown'
});

$('.search').validate();
