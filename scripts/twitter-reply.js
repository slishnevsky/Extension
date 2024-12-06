// Select all elements on the page
const allElements = document.querySelectorAll('*');

// Loop through the elements and find one containing the exact text
const targetElement = Array.from(allElements).find(el => 
  el.textContent.trim() === 'Post your reply'
);

if (targetElement) {
  targetElement.textContent = 'My comment goes here';
}
