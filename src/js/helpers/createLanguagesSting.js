export function createLanguagesSting(date) {
  let languages = [];
  date.map(country => {
    for (let i in country.languages) {
      languages.push(country.languages[i]);
    }
  });
  return languages.join(', ');
}
