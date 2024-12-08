// Find all parent elements matching the specified CSS selector
const cssSelector = '#main > div.b-container.b-content.b-wrapper > div.b-content__inline > div > div.b-content__inline_items > div.b-content__inline_item';
const elements = document.querySelectorAll(cssSelector);
elements.forEach(async element => {
  // Get data-id & data_url of an element
  // const data_id = element.attributes['data-id'].value;
  // const data_url = element.attributes['data-url'].value;
  // const content = await getRating(data_url, data_id);

  // Find the specific child element within each parent
  const cartoons = element.querySelector('div.b-content__inline_item-cover > a > span.cat.cartoons');
  const description = element.querySelector('div.b-content__inline_item-link > div');

  // Check if the description element includes any string from the array
  const filter = ['Китай', 'Корея Южная', 'Италия', 'Япония', 'Польша', 'Чехия', 'Франция', 'Германия', 'Индия', 'Таиланд', 'Комедии', 'Мелодрамы', 'Документальные', 'Стендап', 'Реальное ТВ', 'Дания', 'ЮАР'];
  const garbage = filter.some(substring => description.textContent.includes(substring));

  if (cartoons || garbage)
    element.style.display = 'none'; // Hides the element

});
