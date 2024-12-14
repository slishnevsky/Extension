let ocs_verified = false;
let shopelfbar_verified = false;
let gtavapes_verified = false;
let canadavapes_verified = false;
let majesticvapes_verified = false;

if (document.location.hostname == 'ocs.ca' && ocs_verified) {
	document.querySelector('#dob__month').value = '12';
	document.querySelector('#dob__day').value = '01';
	document.querySelector('#dob__year').value = '1971';
	document.querySelector('#shopify-section-overlay > div > section > div > div.overlay__navigation > form > p:nth-child(3) > button').click();
}
if (document.location.hostname == 'shopelfbar.ca' && shopelfbar_verified) {
	document.querySelector('#provinces').value = 'Ontario';
	document.querySelector('#bmonth').value = '12';
	document.querySelector('#bday').value = '01';
	document.querySelector('#byear').value = '1971';
	document.querySelector('#verify_btn').click();
}
if (document.location.hostname == 'gtavapes.com' && gtavapes_verified) {
	document.querySelector('#bprovince').value = '19';
	document.querySelector('#bmonth').value = '11';
	document.querySelector('#bday').value = '1';
	document.querySelector('#byear').value = '1971';
	document.querySelector('#submit_birthdate').click();
}
if (document.location.hostname == 'canadavapes.com' && canadavapes_verified) {
	document.querySelector('#province').value = 'ON';
	document.querySelector('#month').value = '12';
	document.querySelector('#day').value = '1';
	document.querySelector('#year').value = '1971';
	document.querySelector('#dob-box > input').click();
}
if (document.location.hostname == 'www.majesticvapes.ca' && majesticvapes_verified) {
	document.querySelector('body > div.pp-offcanvas-container > div.age-gate__wrapper > div.age-gate > form > select').value = 'on';
	document.querySelector('#age-gate-m').value = '12';
	document.querySelector('#age-gate-d').value = '01';
	document.querySelector('#age-gate-y').value = '1971';
	document.querySelector('body > div.pp-offcanvas-container > div.age-gate__wrapper > div.age-gate > form > div.age-gate__submit > button').click();
}

