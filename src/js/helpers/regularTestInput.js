export function checkInput(name) {
  /*
   * Проверяем строку на  наличие символов кроме латинских букв
   * Если введены только латинские буквы возвращает true
   */
  let regexp = /^[a-zA-Z]*$/i;
  return regexp.test(name);
}
