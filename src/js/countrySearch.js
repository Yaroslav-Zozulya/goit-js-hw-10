import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import { renderInterface } from './render-interface';
import { refs } from './get-refs';
import { checkInput } from './helpers/regularTestInput';
var debounce = require('lodash.debounce');

refs.searchCountry.addEventListener('input', debounce(onSearch, 300));

function onSearch() {
  /*
   * Проверяем значение инпута
   * Если пользователь ввёл больше одного символа отправляем запрос
   * Допускаются только латинские буквы
   */

  name = refs.searchCountry.value.trim();
  if (!checkInput(name)) {
    Notify.warning('Please, enter latin letters from A to Z');
    refs.countryList.innerHTML = '';
    return;
  }
  if (name === '') {
    refs.countryList.innerHTML = '';
    return;
  }
  if (name.length === 1) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    refs.countryList.innerHTML = '';
    return;
  }

  fetchCountries(name).then(renderInterface);
}
