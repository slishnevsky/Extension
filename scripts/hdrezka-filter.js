// Find all parent elements matching the specified CSS selector
const elements = document.querySelectorAll('#main > div.b-container.b-content.b-wrapper > div.b-content__inline > div > div.b-content__inline_items > div.b-content__inline_item');
elements.forEach(async element => {
	// Get data-id & data_url of an element
	const data_id = element.attributes['data-id'].value;
	const data_url = element.attributes['data-url'].value;
	// const content = await getRating(data_url, data_id);
	
	// Find the specific child element within each parent
	const childElement = element.querySelector('div.b-content__inline_item-link > div');
	// Check if the child element exists and its text content includes any string from the array
	if (childElement) {
		// Array of filters to check
		const filter = ['Китай', 'Корея Южная', 'Италия', 'Япония', 'Польша', 'Чехия', 'Франция', 'Германия', 'Индия', 'Таиланд', 'Комедии', 'Мелодрамы', 'Документальные', 'Стендап', 'Реальное ТВ', 'Дания', 'ЮАР'];
		const includesAny = filter.some(substring => childElement.textContent.includes(substring));
		if (includesAny) {
			element.style.display = 'none'; // Hides the element
			// console.log('Found element:', element);
		}
	}
});

// document.querySelector("#rating-layer-num-75331")

async function getRating(data_url, data_id) {
	const rating = await fetch(data_url);
	
}