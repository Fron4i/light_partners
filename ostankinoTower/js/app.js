// * Burger-menu
const mobileNabButton = document.querySelector('.mobile-nav-button')
const mobileNabIcon = document.querySelector('.mobile-nav-button__icon')
const mobileNab = document.querySelector('.mobile-nav')
const headerLogo = document.querySelector('.header-logo')
const footer = document.querySelector('.footer')
const main = document.querySelector('.main')
const click1 = document.querySelector('.click')
const mapMenu = document.querySelector('.map-menu')
const closeMenu = document.querySelector('.close-menu')
const l1 = document.querySelector('.l1')
const r1 = document.querySelector('.r1')
const l2 = document.querySelector('.l2')
const r2 = document.querySelector('.r2')
const l3 = document.querySelector('.l3')
const r3 = document.querySelector('.r3')


let getStyle = function(e, styleName) {
	let styleValue = "";
	if (document.defaultView && document.defaultView.getComputedStyle) {
		styleValue = document.defaultView.getComputedStyle(e, "").getPropertyValue(styleName);
	} else if (e.currentStyle) {
		styleName = styleName.replace(/\-(\w)/g, function(strMatch, p1) {
			return p1.toUpperCase();
		});
		styleValue = e.currentStyle[styleName];
	}
	return parseInt(styleValue);
}

function setMargin(l, r) {
	let marLeft = getStyle(r, 'margin-left');
	console.log(marLeft); 

	if (marLeft <= 55) {
		l.style.marginRight = 55 + 'px'
		l.style.marginLeft = 43 + 'px'
		r.style.marginLeft = 55 + 'px'
		r.style.marginRight = 43 + 'px'
	}
}

$(".scheme1").click(function() { 
	setMargin(l1, r1)
})
$(".scheme2").click(function() { 
	setMargin(l2, r2)
})
$(".scheme3").click(function() { 
	setMargin(l3, r3)
})
$(".l1").click(function() { 
	setMargin(l3, r3)
})
$(".r1").click(function() { 
	setMargin(l2, r2)
})
$(".l2").click(function() { 
	setMargin(l1, r1)
})
$(".r2").click(function() { 
	setMargin(l3, r3)
})
$(".l3").click(function() { 
	setMargin(l2, r2)
})
$(".r3").click(function() { 
	setMargin(l1, r1)
})

const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth+ 'px'
let widthHeader = document.querySelector('.header').offsetHeight + 5  + 'px';

window.onload = () => {
	main.style.paddingTop = widthHeader;
	if (document.documentElement.clientWidth < 1080) headerLogo.style.paddingLeft = lockPaddingValue;
}

$(document).on("click.click", ".click", function(){
	mapMenu.style.zIndex = '101';
});

$(document).on("click.close-menu", ".close-menu", function(){
	mapMenu.style.zIndex = '-1';
});

mobileNabButton.addEventListener('click', $(function() {
	$('#nav-icon3').click(function(){

		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index]
				el.style.paddingRight = lockPaddingValue
			}
		}
		//! .header-logo
		headerLogo.style.paddingRight = '0px'
		main.style.paddingRight = lockPaddingValue
		footer.style.paddingRight = lockPaddingValue

		$(this).toggleClass('open');
		mobileNabIcon.classList.toggle('active')
		mobileNab.classList.toggle('active')
		document.body.classList.toggle('no-scroll')

		if (!mobileNabIcon.classList.contains('active')) {
				if (lockPadding.length > 0) {
					for (let index = 0; index < lockPadding.length; index++) {
						const el = lockPadding[index];
						el.style.paddingRight = '0px'
					}
				}
				//! .header-logo
				main.style.paddingRight = '0px'
				footer.style.paddingRight = '0px'
		}
	});
}))

// ? Popup

const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true

const timeout = 200

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index]
		popupLink.addEventListener('click', function (e){
				const popupName = popupLink.getAttribute('href').replace('#', '');
				const curentPopup = document.getElementById(popupName);
				popupOpen(curentPopup)
				e.preventDefault();
		})
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup')) ;
			e.preventDefault()
		})
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open')
		if (popupActive) {
			popupClose(popupActive, false)
		} else {
			bodyLock()
		}
		curentPopup.classList.add('open')
		curentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'))
			}
		})
	}
}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open')
		if (doUnlock) {
			bodyUnLock()
		}
	}
}

function bodyLock() {
	//~ lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index]
			el.style.paddingRight = lockPaddingValue
		}
	}
	body.style.paddingRight = lockPaddingValue
	body.classList.add('lock')

	unlock = false
	setTimeout(function () {
		unlock = true
	}, timeout)
}

function bodyUnLock() {
	setTimeout(function() {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px'
			}
		}
		body.style.paddingRight = '0px'
		body.classList.remove('lock')
	}, timeout)

	unlock = false
	setTimeout(function () {
		unlock = true
	}, timeout)
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open')
		popupClose(popupActive)
	}
})