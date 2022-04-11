import { createLanguagesSting } from './helpers/createLanguagesSting';
import { refs } from './get-refs';

export function renderCountryCard(date) {
  /*
   * Получаем массив с одним объектом
   * Генерируем HTML фрагмент
   * Вставляем в вёрстку
   */
  const markup = date
    .map(
      element => `
      <li>
        <h1><img src="${element.flags.svg}" class="country-list-img">${element.name.common}</h1>
        <p>Capital: ${element.capital}</p>
        <p>Population: ${element.population}</p>
        <p>Languages: ${createLanguagesSting(date)}</p>
    </li>`,
    )
    .join(' ');
  refs.countryList.innerHTML = markup;
}
