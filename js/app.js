const slider = new Swiper('.welcome-slider', {
   
    effect: "coverflow",
    speed: 600,
    loop: true,
    
    pagination: {
       el: '.swiper-pagination',
       clickable: true,
     },
    
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
    coverflowEffect: {
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: true,
    },
});
 
const pag = document.querySelector('.pagination-current')
 
document.querySelector('.swiper-slide-active').addEventListener("transitionend", () => {
    const activeIndex = Number(document.querySelector('.swiper-slide-active').dataset.swiperSlideIndex)
    pag.innerHTML = `0${activeIndex + 1}`
 })
const swiper = new Swiper(".videoslider2", {
    spaceBetween: 20,
    slidesPerView: 2,
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    breakpoints: {
 
       770: {
          slidesPerView: 3,
          spaceBetween: 42,
       },
     },
});

const swiper2 = new Swiper(".videoslider", {
    spaceBetween: 10,
    loop: true,
    navigation: {
       nextEl: ".video__next",
       prevEl: ".video__prev",
    },
    pagination: {
       el: '.videoslider2-pagination',
       clickable: true,
    },
 
    thumbs: {
       swiper: swiper,
    },
 });
const cards = document.querySelectorAll('.gallery__card')

for (let x = 0; x < 15; x++) {
   const ran1 = Math.floor(Math.random() * 15)
   const ran2 = Math.floor(Math.random() * 15)

   const temp = cards[ran1].innerHTML;
   cards[ran1].innerHTML = cards[ran2].innerHTML;
   cards[ran2].innerHTML = temp
}

class BookingToggle {
    ticketButton = document.getElementById('tickets-button');
    booking = document.querySelector('.booking');
    bookingClose = document.querySelector('.booking__close');

    onTicketButtonClick = () => {
        this.booking.classList.add('booking__show')
     }

    onBookingClose = () => {
        this.booking.classList.remove('booking__show')
    }

    onClickOutside =  (event) => {
    
        const target = event.target.closest('.booking__box');
     
        if (!target) {
     
           if (this.booking.classList.contains('booking__show')) {
              this.booking.classList.remove('booking__show')
           }
        }
     }

    constructor(){
        this.initEventListeners();
     }
  
     initEventListeners() {
        this.ticketButton.addEventListener('click', this.onTicketButtonClick)
        this.bookingClose.addEventListener('click', this.onBookingClose)
        document.addEventListener('click', this.onClickOutside, true)
     }
}

const bookingToggle = new BookingToggle;

function createRipple(event) {
    const button = event.currentTarget;
 
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
 
    const radius = diameter / 2;
 
    circle.style.left = event.clientX - button.getBoundingClientRect().x - radius + 'px'
    circle.style.top = event.clientY - button.getBoundingClientRect().y - radius + 'px'
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.classList.add("ripple");
 
    const ripple = button.getElementsByClassName("ripple")[0];
 
    if (ripple) {
       ripple.remove();
    }
 
    button.appendChild(circle);
 }
 
 const buttons = document.querySelector('.tickets__button');
 
 buttons.addEventListener("click", createRipple);
const thumb = document.querySelector('.explore__curtain');
const exploreImages = document.querySelector('.explore__images');
const exploreImageAfter = document.querySelector('.explore__image_after');

exploreImageAfter.style.width = thumb.getBoundingClientRect().left - exploreImages.getBoundingClientRect().left + thumb.clientWidth / 2 + 'px';
thumb.addEventListener('pointerdown', (event) => {
   event.preventDefault(); 

   let shiftX = event.clientX - thumb.getBoundingClientRect().left;

   document.addEventListener('pointermove', onMouseMove);
   document.addEventListener('pointerup', onMouseUp);

   function onMouseMove(event) {

      let newLeft = event.clientX - shiftX - exploreImages.getBoundingClientRect().left;

      if (newLeft < 0) {
         newLeft = 0;
      }
      let rightEdge = exploreImages.offsetWidth - thumb.offsetWidth;
      if (newLeft > rightEdge) {
         newLeft = rightEdge;
      }

      thumb.style.left = newLeft + 'px';
      exploreImageAfter.style.width = newLeft + thumb.clientWidth / 2 + 'px';
   }

   function onMouseUp() {
      document.removeEventListener('pointerup', onMouseUp);
      document.removeEventListener('pointermove', onMouseMove);
   }
}) 



var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}




// LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
	for (let index = 0; index < title.length; index++) {
		let el = title[index];
		let txt = el.innerHTML;
		let txt_words = txt.replace('  ', ' ').split(' ');
		let new_title = '';
		for (let index = 0; index < txt_words.length; index++) {
			let txt_word = txt_words[index];
			let len = txt_word.length;
			new_title = new_title + '<p>';
			for (let index = 0; index < len; index++) {
				let it = txt_word.substr(index, 1);
				if (it == ' ') {
					it = '&nbsp;';
				}
				new_title = new_title + '<span>' + it + '</span>';
			}
			el.innerHTML = new_title;
			new_title = new_title + '&nbsp;</p>';
		}
	}
}
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spollersGo) {
				spollersGo = false;
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				_slideToggle(spoller.nextElementSibling);

				setTimeout(function () {
					spollersGo = true;
				}, 500);
			}
		});
	}
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}
//=================
//SearchInList
function search_in_list(input) {
	let ul = input.parentNode.querySelector('ul')
	let li = ul.querySelectorAll('li');
	let filter = input.value.toUpperCase();

	for (i = 0; i < li.length; i++) {
		let el = li[i];
		let item = el;
		txtValue = item.textContent || item.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	}
}
//=================
//DigiFormat
function digi(str) {
	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
	if (digi_animate.length > 0) {
		for (let index = 0; index < digi_animate.length; index++) {
			const el = digi_animate[index];
			const el_to = parseInt(el.innerHTML.replace(' ', ''));
			if (!el.classList.contains('_done')) {
				digi_animate_value(el, 0, el_to, 1500);
			}
		}
	}
}
function digi_animate_value(el, start, end, duration) {
	var obj = el;
	var range = end - start;
	// no timer shorter than 50ms (not really visible any way)
	var minTimer = 50;
	// calc step time to show all interediate values
	var stepTime = Math.abs(Math.floor(duration / range));

	// never go below minTimer
	stepTime = Math.max(stepTime, minTimer);

	// get current time and calculate desired end time
	var startTime = new Date().getTime();
	var endTime = startTime + duration;
	var timer;

	function run() {
		var now = new Date().getTime();
		var remaining = Math.max((endTime - now) / duration, 0);
		var value = Math.round(end - (remaining * range));
		obj.innerHTML = digi(value);
		if (value == end) {
			clearInterval(timer);
		}
	}

	timer = setInterval(run, stepTime);
	run();

	el.classList.add('_done');
}
//=================

//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}
function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}
function makeEaseInOut(timing) {
	return function (timeFraction) {
		if (timeFraction < .5)
			return timing(2 * timeFraction) / 2;
		else
			return (2 - timing(2 * (1 - timeFraction))) / 2;
	}
}
function quad(timeFraction) {
	return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();


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




class Header {
   iconMenu = document.querySelector(".icon-menu");
   menuBody = document.querySelector(".header__nav");
   welcome = document.querySelector(".welcome");
   br = 1200;

   onIconMenuClick = () => {
      this.iconMenu.classList.toggle("_active");
      this.menuBody.classList.toggle("_active");
      this.welcome.classList.toggle("_active");
   }
   
   onMenuBodyClick = (event) => {
   
      if (document.documentElement.clientWidth > this.br) return;
   
      const target = event.target.closest('.nav__item>a');
   
      if (!target) return;
   
      this.menuBody.classList.remove("_active");
      this.iconMenu.classList.remove("_active");
      this.welcome.classList.remove("_active");
   }
   
   onResize = () => {
   
      if (!this.menuBody.classList.contains("_active")) return;
   
      if (document.documentElement.clientWidth > this.br) {
   
         this.menuBody.classList.remove("_active");
         this.iconMenu.classList.remove("_active");
         this.welcome.classList.remove("_active");
      }
   }
   
   onClickOutside = (event) => {
   
      const target = event.target.closest('.header');
   
      if (!target) {
         this.menuBody.classList.remove("_active");
         this.iconMenu.classList.remove("_active");
         this.welcome.classList.remove("_active");
      }
   }
   constructor(){
      this.initEventListeners();
   }

   initEventListeners() {
     this.iconMenu.addEventListener("click", this.onIconMenuClick);
     this.menuBody.addEventListener("click", this.onMenuBodyClick)
     window.addEventListener("resize", this.onResize);
     document.addEventListener('click', this.onClickOutside)
   }
}
 
const header = new Header;



let currentVideo = document.querySelector('.swiper-slide-active>.video')
const videoToggler = document.getElementById('video-toggle')
const volumeToggler = document.getElementById('volume-toggle')
const playButton = document.querySelector('.video__start')
const progressBar = document.querySelector('.video--progress-video')
const volume = document.querySelector('.video--loud')
const videoCurrentSpeed = document.querySelector('.video__current-speed')
let isStop = true
let isVolume = true

progressBar.value = 0;

function stopVideo() {
   currentVideo.pause()
   // videoToggler.removeEventListener('click', play)
   const value = 0;
   progressBar.value = value
   progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
   currentVideo.currentTime = value;
   isStop = true
   videoToggler.classList.remove('_pause')
   playButton.classList.remove('_pause')
}

function onVolumeToggler() {
   volumeToggler.classList.toggle('_not-vol')
   isVolume = !isVolume
   const currentValue = isVolume ? 40 : 0
   volume.value = currentValue
   currentVideo.volume = currentValue / 100;
   volume.style.background = `linear-gradient(to right, #710707 0%, #710707 ${currentValue}%, #C4C4C4 ${currentValue}%, #C4C4C4 100%)`

}

function showCurrentSpeed(speed, el = videoCurrentSpeed) {
   el.classList.add('is-show-speed')
   el.innerHTML = speed;
   setTimeout(() => {
      el.classList.remove('is-show-speed')
   }, 1000)

}

function play() {

   isStop ? currentVideo.play() : currentVideo.pause()
   isStop = !isStop;
   videoToggler.classList.toggle('_pause')
   playButton.classList.toggle('_pause')
}

function videoVolume() {
   const value = Number(this.value)
   let currentValue;
   if (value === 0) {
      isVolume = false
      volumeToggler.classList.add('_not-vol')
      currentValue = 0;

   } else {
      isVolume = true
      volumeToggler.classList.remove('_not-vol')
      currentValue = value
   }

   currentVideo.volume = currentValue / 100
   this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${currentValue}%, #C4C4C4 ${currentValue}%, #C4C4C4 100%)`


}

function onVideoClick() {

   play()

}

function resetVideo() {
   stopVideo()
   currentVideo.removeEventListener('timeupdate', onTimeUpdate)
   currentVideo.removeEventListener('click', onVideoClick)

   currentVideo = document.querySelector('.swiper-slide-active>.video')

   currentVideo.addEventListener('timeupdate', onTimeUpdate)
   currentVideo.addEventListener('click', onVideoClick)
   currentVideo.volume = Number(volume.value) / 100
}

let shift = '';
function onkeydownHendler(e) {

   if (e.code === 'Space' && currentVideo.currentTime) {
      e.preventDefault()
      play()
   }
   if (e.code === 'KeyM') {
      onVolumeToggler()
   }
   if (e.code === 'KeyF') {
      fullscreenToggle()
   }


   if (e.key === 'Shift') {

      shift = 'Shift'

      document.addEventListener('keyup', () => {
         shift = ''
      })
   }

   if (e.code === 'Period') {
      shift = shift + 'Period'
      if (shift === 'ShiftPeriod' && currentVideo.currentTime) {

         if (currentVideo.playbackRate < 2) {
            currentVideo.playbackRate += 0.25
         }
         shift = ''
         showCurrentSpeed(currentVideo.playbackRate)

      }
   }
   if (e.code === 'Comma') {
      shift = shift + 'Comma'
      if (shift === 'ShiftComma' && currentVideo.currentTime) {
         if (currentVideo.playbackRate > 0.25) {
            currentVideo.playbackRate -= 0.25
         }
         shift = ''
         showCurrentSpeed(currentVideo.playbackRate)

      }
   }


   /*   console.log(e.code)
     console.log(e.key) */
}



progressBar.addEventListener('input', function () {
   const value = this.value;

   this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`

   let a = Number(currentVideo.duration);
   let b = Number(value)

   currentVideo.currentTime = a / 100 * b

})

function onTimeUpdate() {
   //progressBar.

   const value = this.currentTime / this.duration * 100
   progressBar.value = value
   if (value >= 100) {
      stopVideo()
   }

   progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
}

volume.addEventListener('input', videoVolume)
volumeToggler.addEventListener('click', onVolumeToggler)
videoToggler.addEventListener('click', play)
playButton.addEventListener('click', play)
currentVideo.addEventListener('timeupdate', onTimeUpdate)
currentVideo.addEventListener('click', onVideoClick)
document.querySelector('.videoslider__wrapper').addEventListener("transitionend", resetVideo);
document.addEventListener('keydown', onkeydownHendler)




//==============================================================
const videosliderPanel = document.querySelector('.videoslider__panel')
const videosliderWrapper = document.querySelector('.videoslider')


function fullscreenToggle() {
   document.fullscreenElement ? exitFullscreen('fs_section_video') : enterFullscreen('fs_section_video')

}


document.getElementById('fs-button').addEventListener('click', fullscreenToggle)



document.cancelFullScreen = document.cancelFullScreen ||
   document.webkitCancelFullScreen ||
   document.mozCancelFullScreen;


function enterFullscreen(id) {

   var el = document.getElementById(id);
   var onfullscreenchange = function (event) {

      console.log('!!!')
      var fullscreenElement = document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement;
      var fullscreenEnabled = document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled;
   }

   el.addEventListener("webkitfullscreenchange", onfullscreenchange);
   el.addEventListener("mozfullscreenchange", onfullscreenchange);
   el.addEventListener("fullscreenchange", onfullscreenchange);

   /*  if (el.webkitRequestFullScreen) {
       el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else {
       el.mozRequestFullScreen();
    } */
   if (el.requestFullscreen) {
      el.requestFullscreen();
   } else if (el.webkitrequestFullscreen) {
      el.webkitRequestFullscreen();
   } else if (el.mozRequestFullscreen) {
      el.mozRequestFullScreen();
   }

}

function exitFullscreen(id) {

   document.cancelFullScreen();

}
//=========================================================
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const videosliderVideoItem = document.querySelectorAll('.videoslider__video-item')
const videosliderItem = document.querySelectorAll('.videoslider__item')
const arr = []
let done = false;
let isFirstTimeStateChange = true;


function onYouTubeIframeAPIReady() {
   for (const id of videosliderVideoItem) {


      let player = new YT.Player(id, {

         events: {
            'onReady': (event) => {
               window.addEventListener('click', (e) => {
                  event.target.pauseVideo();
               });
            },
            'onStateChange': (event) => {

               stopVideo();
               if (!isFirstTimeStateChange) {
                  for (const i of arr) {

                     if (i.getPlayerState() === 1 && i.id !== event.target.id && !done) {
                        i.pauseVideo();
                     }
                  }
                  done = !done;
               }
               isFirstTimeStateChange = false
            }
         }

      });
      arr.push(player)

   }

}
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0aHVyLW1pbmciLCJhIjoiY2t1amxyeThlMGw0eTJ3bzZ4bzd5cXk5NSJ9.RgNpohPUytRnYuf0rmRRDg';
const map = new mapboxgl.Map({
   container: 'map', // container ID
   style: 'mapbox://styles/mapbox/light-v10', // style URL
   center: [2.3364, 48.86091], // starting position [lng, lat]
   zoom: 15.75 // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: '#171717' })
   .setLngLat([2.3364, 48.86091])
   .addTo(map);

// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: '#757575' })
   .setLngLat([2.3333, 48.8602])
   .addTo(map);

const marker3 = new mapboxgl.Marker({ color: '#757575' })
   .setLngLat([2.3397, 48.8607])
   .addTo(map);


const marker4 = new mapboxgl.Marker({ color: '#757575' })
   .setLngLat([2.3330, 48.8619])
   .addTo(map);


const marker5 = new mapboxgl.Marker({ color: '#757575' })
   .setLngLat([2.3365, 48.8625])
   .addTo(map);

map.on('load', () => {
   // Add a new vector tile source with ID 'mapillary'.
   map.addSource('mapillary', {
      'type': 'vector',
      'tiles': [
         'https://tiles.mapillary.com/maps/vtp/mly1_public/2/{z}/{x}/{y}'
      ],
      'minzoom': 6,
      'maxzoom': 14
   });
   map.addLayer(
      {
         'id': 'mapillary', // Layer ID
         'type': 'line',
         'source': 'mapillary', // ID of the tile source created above
         // Source has several layers. We visualize the one with name 'sequence'.
         'source-layer': 'sequence',
         'layout': {
            'line-cap': 'round',
            'line-join': 'round'
         },
         'paint': {
            'line-opacity': 0.6,
            'line-color': 'rgb(53, 175, 109)',
            'line-width': 2
         }
      },
      'road-label' // Arrange our new layer beneath this layer
   );
});

map.addControl(new mapboxgl.NavigationControl());
window.addEventListener('scroll', onScrolledBottom)

const buttonUp = document.querySelector('.button-up')
const gall = document.querySelector('.gallery')

let h = document.documentElement.clientHeight
let step = 500;
let st = h / 2;
if (document.documentElement.clientWidth <= 1200) {
   step = 300;
}
if (document.documentElement.clientWidth <= 600) {
   step = 200;

}
if (document.documentElement.clientWidth <= 420) {
   step = 100;
}
window.addEventListener('resize', () => {

   h = document.documentElement.clientHeight
   step = 500;
   st = h / 2;

   if (document.documentElement.clientWidth <= 1200) {
      step = 300;
   }
   if (document.documentElement.clientWidth <= 600) {
      step = 200;
   }
   if (document.documentElement.clientWidth <= 420) {
      step = 100;
   }
})

function onScrolledBottom(event) {



   let top = gall.getBoundingClientRect().top

   if (window.pageYOffset > h) {
      buttonUp.classList.add('button-up_sh')
   } else {
      buttonUp.classList.remove('button-up_sh')
   }


   if (top < st) {

      gall.classList.add('gallery_hs-1')
   }
   if (top < (st - step)) {
      gall.classList.add('gallery_hs-2')
   }
   if (top < (st - step * 2)) {
      gall.classList.add('gallery_hs-3')
   }
   if (top < (st - step * 3)) {
      gall.classList.add('gallery_hs-4')
   }
   if (top < (st - step * 4)) {
      gall.classList.add('gallery_hs-5')
   }

   if (top > st) {

      gall.classList.remove('gallery_hs-1')
   }
   if (top > (st - step)) {
      gall.classList.remove('gallery_hs-2')
   }
   if (top > (st - step * 2)) {
      gall.classList.remove('gallery_hs-3')
   }
   if (top > (st - step * 3)) {
      gall.classList.remove('gallery_hs-4')
   }
   if (top > (st - step * 4)) {
      gall.classList.remove('gallery_hs-5')
   }

}


buttonUp.addEventListener('click', () => {


   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   })

})


