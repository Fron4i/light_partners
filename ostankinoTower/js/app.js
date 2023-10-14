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
const zi = document.querySelector('.zi')



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

// click1.addEventListener('click', $(function() {
// 	$('.click').click(function(){
// 		mapMenu.style.zIndex = '101';
// 	});
// }))

// closeMenu.addEventListener('click', $(function() {
// 	mapMenu.style.zIndex = '-1';
// }))

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
				flkty.playPlayer();
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