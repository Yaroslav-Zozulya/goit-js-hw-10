import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './get-refs';

function createLanguagesList(response) {
  let languages = [];
  response.map(country => {
    for (let i in country.languages) {
      languages.push(country.languages[i]);
    }
  });
  return languages.join();
}

function renderCountryList(response) {
  if (response.length < 10) {
    const markup = response
      .map(
        element =>
          `<li class="country-list-item"><img src="${element.flags.svg}" class="country-list-img">${element.name.common}<li>`,
      )
      .join(' ');

    refs.countryList.innerHTML = markup;
    return response;
  }
  Notify.info('Too many matches found. Please enter a more specific name.');
  return response;
}

function renderCountryCard(response) {
  if (response.length === 1) {
    const markup = response
      .map(
        element => `
      <li>
        <h1><img src="${element.flags.svg}" class="country-list-img">${element.name.common}</h1>
        <p>Capital: ${element.capital}</p>
        <p>Population: ${element.population}</p>
        <p>Languages: ${createLanguagesList(response)}</p>
    </li>`,
      )
      .join(' ');
    refs.countryList.innerHTML = markup;
    return response;
  }
  return response;
}

export { renderCountryList, renderCountryCard };
