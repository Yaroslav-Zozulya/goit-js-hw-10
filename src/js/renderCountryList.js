import { refs } from './get-refs';
export function renderCountryList(response) {
  /*
   * Получаем массив объектов
   * Перебираем массив по элементу
   * Генерируем HTML фрагмент
   * Вставляем в вёрстку
   */
  const markup = response
    .map(
      element =>
        `<li class="country-list-item"><img src="${element.flags.svg}" class="country-list-img">${element.name.common}<li>`,
    )
    .join(' ');

  refs.countryList.innerHTML = markup;
}
