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
		// body.style.display = 'block';
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
				// body.style.display = 'flex';
				main.style.paddingRight = '0px'
				footer.style.paddingRight = '0px'
		}
	});
}))

// ~ Accordion
const accordion777 = document.querySelector('.accordion-777')
const container = document.querySelector('.container')
const header = document.querySelector('.header')
// const footer = document.querySelector('.footer')



const imgActive = document.querySelector('.active-img')
const imgNoneActive = document.querySelector('.non-active-img')
let flag = true
let flag2 = true


$(document).ready(function() {
	$('.filter-wrapper').click(function() {
		body.style.display = 'flex';
		if (flag2) {
			header.classList.add("adaptive");
			// header.style.maxWidth = "60%";
			e = document.createElement("style");
			// e.innerHTML=`.header{width: calc(100% - 350px);}`;

			e.innerHTML=".wrapper{width: 678px}";
			
			e.innerHTML=`
			.header-row {
				justify-content: space-between;
				flex-direction: row-reverse;
			}
			.header-connection {
				margin-left: 0;
				width: 33.33%;
			}
			.header-logo {
				width: 33.33%;
				text-align: center;
			}
			.mobile-nav-button {
				display: flex;
			}
			.mobile-nav-button {
				width: 33.33%;
			}
			.nav-2-step {
				width: 33.33%;
				display: flex;
				justify-content: end;
			}
			.header-row {
				flex-direction: row-reverse;
		
			}
			.header-connection {
				margin-left: 0;
			}`;
			e.innerHTML=`.footer-nav {
				display: none;
			}
			.footer-row {
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;
			}
			.polit-conf {
				display: flex;
				width: 60%;
			}
			.footer-log > img {
				width: 64px;
				height: 64px;
			}
			.footer-log {
				width: 40%
			}
			.footer-connection {
				width: 47.5%;
				display: flex;
				align-items: start;
			}
			.polit-conf ul {
				display: flex;
			}
			.polit-conf ul > li + li {
				margin-left: 38px;
			}
			.dop-polit {
				display: flex;
				font-size: 14px;
				text-transform: uppercase;
				width: 40%;
				font-weight: 400;
				font-family: 'Roboto';
			}`;
			// e.innerHTML=".header{width: 678px}";
			// e.innerHTML=".container{max-width: 678px}";
			document.body.append(e);
			// prof.style.maxWidth = '300px';
			// header.style.maxWidth = '100%';
			// footer.style.maxWidth = '392px';
			// accordion777.removeClass('accordion-active');
			accordion777.style.display = 'block'
			flag2 = false
			
			// imgA()
		} else {
			header.classList.remove("adaptive");

			e = document.createElement("style");
			e.innerHTML=".wrapper{width: 100%}";
			// e.innerHTML=".header{width: 678px}";
			// e.innerHTML=".container{max-width: 678px}";
			document.body.append(e);
			// $('.accordion-777').removeClass('accordion-active')
			// accordion777.addClass('accordion-active')
			accordion777.style.display = 'none'
			flag2 = true

		}
	})
})

$(document).ready(function() {
	$('.accordion-item__trigger').click(function() {
		const aaa = $('.accordion-item__content')
		const parent = $(this).parent();

		if (parent.hasClass('accordion-item--active')) {
			parent.removeClass('accordion-item--active');
			aaa.removeClass('hidden');
			// imgA()
		} else {
			$('.accordion-item').removeClass('accordion-item--active')
			parent.addClass('accordion-item--active')
			aaa.addClass('hidden')
			// imgA()
		}
		
		// $(this).next('.accordion-item__content').slideToggle(400)
	})
})



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