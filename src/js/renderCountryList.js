import { refs } from './get-refs';
export function renderCountryList(response) {
  const markup = response
    .map(
      element =>
        `<li class="country-list-item"><img src="${element.flags.svg}" class="country-list-img">${element.name.common}<li>`,
    )
    .join(' ');

  refs.countryList.innerHTML = markup;
  return response;
}
