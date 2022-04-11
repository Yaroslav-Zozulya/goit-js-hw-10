export function createLanguagesSting(date) {
  /*
   * Получаем массив с одним объектом
   * Генерируем строку (список языков)
   */
  let languages = [];
  date.map(country => {
    for (let i in country.languages) {
      languages.push(country.languages[i]);
    }
  });
  return languages.join(', ');
}
