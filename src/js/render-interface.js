import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderCountryCard } from './renderCountryCard';
import { renderCountryList } from './renderCountryList';

function renderInterface(date) {
  if (date.length > 1 && date.length < 10) {
    renderCountryList(date);
  }
  if (date.length === 1) {
    renderCountryCard(date);
  }
  if (date.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
}

export { renderInterface };
