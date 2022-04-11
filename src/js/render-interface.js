import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderCountryCard } from './renderCountryCard';
import { renderCountryList } from './renderCountryList';

function renderInterface(date) {
  if (date.length > 1 && date.length < 10) {
    /*
     * Если в ответ сервер прислал от 2 до 10 объектов
     * (массив содержащий объекты с информацией о странах)
     * Рисуем список полученных стран
     */
    renderCountryList(date);
  }
  if (date.length === 1) {
    /*
     * Если в ответ сервер прислал массив с одним объектом
     * Рисуем карточку с информацией о данной стране
     */
    renderCountryCard(date);
  }
  if (date.length > 10) {
    /*
     * Если сервер прислал массив с десятью и более объектов
     * Просим пользователя ввести более уникальное значение
     */
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
}

export { renderInterface };
