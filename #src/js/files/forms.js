

//Select
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}
function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	//select_callback();
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.code === 'Escape') {
			selects_close(e);
		}
	});
}
function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 100);
		}
	}
}
function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';

	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}
function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');

	if (select_items) {
		select_items.remove();
	}

	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}

	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');

	select_actions(select, select_parent);
}
function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');

	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 100);
			}
		}
		_slideToggle(select_body_options, 100);
		select.classList.toggle('_active');
	});

	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;

		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				//select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}
function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}
function select_search(e) {

	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();

	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}
function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}
//====================================


//QUANTITY
const tickets = {
	1: {
		type: 'Permanent exhibition',
		price: 20
	},
	2: {
		type: 'Temporary exhibition',
		price: 25
	},
	3: {
		type: 'Combined Admission',
		price: 40
	},

}
let bookingOptions = {
	ticketType: 1,
	quantity: {
		basic: 2,
		senior: 2
	},
}


if (sessionStorage.getItem('bookingOptions')) {
	bookingOptions = JSON.parse(sessionStorage.getItem('bookingOptions'))

}

const MIN = 0;
const MAX = 20;
const basic = document.getElementById('_basic');
const basics = document.querySelectorAll('._basic');
const seniors = document.querySelectorAll('._senior');
const senior = document.getElementById('_senior');
const totalBasic = document.getElementById('total-basic')
const totalSenior = document.getElementById('total-senior')
const quantityButtons = document.querySelectorAll('.quantity__button');

const basicPrice = document.querySelectorAll('.basic-price')
const seniorPrice = document.querySelectorAll('.senior-price')
const totalPrice = document.querySelectorAll('.total-price')

function setQuantity() {

	for (const basic of basics) {
		basic.querySelector('input').value = bookingOptions.quantity.basic;
	}

	for (const senior of seniors) {
		senior.querySelector('input').value = bookingOptions.quantity.senior;
	}
	sessionStorage.setItem('bookingOptions', JSON.stringify(bookingOptions))
}

function setOverview() {
	basic.innerHTML = bookingOptions.quantity.basic
	senior.innerHTML = bookingOptions.quantity.senior

	const tBasic = totalBasic.innerHTML = tickets[bookingOptions.ticketType].price * bookingOptions.quantity.basic
	const tSenior = totalSenior.innerHTML = tickets[bookingOptions.ticketType].price * bookingOptions.quantity.senior / 2

	for (const i of totalPrice) {
		i.innerHTML = tBasic + tSenior
	}
	for (const i of basicPrice) {
		i.innerHTML = tickets[bookingOptions.ticketType].price
	}
	for (const i of seniorPrice) {
		i.innerHTML = tickets[bookingOptions.ticketType].price / 2
	}


}

setOverview();
setQuantity();

for (const quantityButton of quantityButtons) {

	quantityButton.addEventListener("click", function (e) {
		e.preventDefault()
		const input = quantityButton.closest('.quantity').querySelector('input')
		let value = parseInt(input.value);
		if (quantityButton.classList.contains('quantity__button_plus')) {
			value++;
			if (value > MAX) {
				value = MAX
			}
		}
		if (quantityButton.classList.contains('quantity__button_minus')) {
			value = value - 1;
			if (value < MIN) {
				value = MIN
			}
		}

		if (quantityButton.closest('._basic')) {
			bookingOptions.quantity.basic = value
		}
		if (quantityButton.closest('._senior')) {
			bookingOptions.quantity.senior = value
		}

		setQuantity(quantityButton);
		setOverview()

	});
}





const radio = document.querySelector('.tickets__radio')
const ticketType = document.getElementById('ticket-type')
const selectTtitle = document.querySelector('.select__value>span')
const selectOptions = document.querySelector('.select__options')


const value = bookingOptions.ticketType
selectTtitle.innerHTML = ticketType.innerHTML = tickets[value].type
setSelect(value)
radio.elements[value - 1].checked = true


selectOptions.addEventListener('click', (e) => {
	const target = e.target.closest('.select__option')
	if (target) {
		const value = target.dataset.value
		ticketType.innerHTML = tickets[value].type
		selectTtitle.innerHTML = tickets[value].type
		radio.elements[value - 1].checked = true
		bookingOptions.ticketType = value
		setSelect(value)
		setOverview()

		sessionStorage.setItem('bookingOptions', JSON.stringify(bookingOptions))
	}
})


function setSelect(value) {
	const selectOption = selectOptions.querySelectorAll('.select__option')

	for (const option of selectOption) {

		option.style.display = 'block';

		if (Number(option.dataset.value) === Number(value)) {
			option.style.display = 'none'




		}
	}

}

radio.addEventListener('change', (event) => {

	const value = Number(event.target.value)
	ticketType.innerHTML = tickets[value].type
	selectTtitle.innerHTML = tickets[value].type

	bookingOptions.ticketType = value
	setSelect(value)
	setOverview()

	sessionStorage.setItem('bookingOptions', JSON.stringify(bookingOptions))
})


//============================================================================

const btime = document.getElementById('b-time')
const bdate = document.getElementById('b-date')
const overviewTime = document.getElementById('overview-time')
const overviewDate = document.getElementById('overview-date')

const date = new Date()

bdate.min = date.toISOString().split('T')[0]


btime.addEventListener('change', (event) => {

	overviewTime.innerHTML = event.target.value.split(':').join(' : ')
})

bdate.addEventListener('change', (event) => {

	const date = new Date(event.target.value)

	overviewDate.innerHTML = date.toLocaleString('eng', {
		month: 'long',
		day: '2-digit',
		weekday: 'long',
	})

})


//=======================================================
function email_test(input) {
	return /^[-\w]{3,15}@\w{4,}\.\w{2,}$/.test(input.value);
}
const email = document.getElementById('email')
const emailErrorText = document.querySelector('.email-error-text')

email.addEventListener('focus', () => {
	document.removeEventListener('keydown', onkeydownHendler)
})
email.addEventListener('blur', () => {
	document.addEventListener('keydown', onkeydownHendler)
})


email.addEventListener('input', (event) => {

	if (!email_test(event.target)) {
		email.classList.add('input-error')
		emailErrorText.classList.add('email-error-text_show')
	} else {
		email.classList.remove('input-error')
		emailErrorText.classList.remove('email-error-text_show')
	}
})

function username_test(input) {
	return /^[\s\p{L}]{3,15}$/u.test(input.value);
}

const userName = document.getElementById('user-name')
const usernameErrorText = document.querySelector('.username-error-text')


userName.addEventListener('focus', () => {
	document.removeEventListener('keydown', onkeydownHendler)
})
userName.addEventListener('blur', () => {
	document.addEventListener('keydown', onkeydownHendler)
})

userName.addEventListener('input', (event) => {

	if (!username_test(event.target)) {
		userName.classList.add('input-error')
		usernameErrorText.classList.add('username-error-text_show')
	} else {
		userName.classList.remove('input-error')
		usernameErrorText.classList.remove('username-error-text_show')
	}
})


const tel = document.getElementById('tel')
const telErrorText = document.querySelector('.tel-error-text')
function tel_test(input) {
	return /^[0-9]{2,3}[ -]?[0-9]{2,3}[ -]?[0-9]{2,3}[ -]?[0-9]{2,3}[ -]?([0-9]{2,3}[ -]?)?$/.test(input.value);
	//return /^[0-9]+([0-9]{2,3}[ -]?)?([0-9]{2,3}[ -]?)?([0-9]{2,3}[ -]?)?([0-9]{2,3}[ -]?)?([0-9]{2,3}[ -]?)?$/.test(input.value);
}

function tel_test_length(input) {

	let str = input.value
	return str.split('').filter((item) => item !== '-' && item !== ' ').length <= 10

}



tel.addEventListener('focus', () => {
	document.removeEventListener('keydown', onkeydownHendler)
})
tel.addEventListener('blur', () => {
	document.addEventListener('keydown', onkeydownHendler)
})

tel.addEventListener('input', (event) => {

	if (!tel_test_length(event.target) || !tel_test(event.target)) {
		tel.classList.add('input-error')
		telErrorText.classList.add('tel-error-text_show')
	} else {
		tel.classList.remove('input-error')
		telErrorText.classList.remove('tel-error-text_show')
	}
})

//==========================================================



