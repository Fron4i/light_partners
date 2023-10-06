const mobileNabButton = document.querySelector('.mobile-nav-button')
const mobileNabIcon = document.querySelector('.mobile-nav-button__icon')
const mobileNab = document.querySelector('.mobile-nav')

mobileNabButton.addEventListener('click', function () {
	mobileNabIcon.classList.toggle('active')
	mobileNab.classList.toggle('active')
	document.body.classList.toggle('no-scroll')
	if (!mobileNabIcon.classList.contains('active')) {
		mobileNabIcon.src = './img/burger.svg'
	} else {
		mobileNabIcon.src = "./img/close-burger.svg"
	}
})
