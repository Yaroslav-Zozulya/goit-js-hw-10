import { fetchCountries } from './fetchCountries';
import { renderInterface } from './render-interface';
import { refs } from './get-refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

var debounce = require('lodash.debounce');

refs.searchCountry.addEventListener('input', debounce(onSearch, 300));

function onSearch() {
  /*
   * Проверяем значение инпута
   * Если пользователь ввёл больше одного символа отправляем запрос
   */

  name = refs.searchCountry.value.trim();
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
