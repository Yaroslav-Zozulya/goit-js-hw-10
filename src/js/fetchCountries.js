var debounce = require('lodash.debounce');

const URL = 'https://restcountries.com/v3.1/name/';
let country;

const refs = {
  searchCountry: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
};

refs.searchCountry.addEventListener('input', debounce(onSearch, 300));

function onSearch() {
  country = refs.searchCountry.value.trim();

  fetchCountries(country)
    .then(renderOne)
    .then(renderCountryList)
    .catch(error => console.log('ЭТО CATCH'));
}

function fetchCountries(country) {
  return fetch(`${URL}${country}?fields=name,capital,population,flags,languages`).then(response => {
    return response.json();
  });
}

function renderOne(response) {
  if (response.length === 1) {
    console.log('test');
    return;
  }
  return response;
}

function renderCountryList(response) {
  // if (country.length === 1) {
  //   console.log(country.length);
  //   return;
  // }
  // if (response.length > 10) {
  //   console.log('test');
  //   return;
  // }
  if (response) {
    console.log(response);
    const markup = response
      .map(
        element =>
          `<li class="country-list-item"><img src="${element.flags.svg}" class="country-list-img">${element.name.common}<li>`,
      )
      .join(' ');
    console.log(markup);
    refs.countryList.innerHTML = markup;
  }
}
