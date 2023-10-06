const mobileNabButton = document.querySelector('.mobile-nav-button')
const mobileNabIcon = document.querySelector('.mobile-nav-button__icon')
const mobileNab = document.querySelector('.mobile-nav')


mobileNabButton.addEventListener('click', $(function() {
		$('#nav-icon3').click(function(){
			$(this).toggleClass('open');
			mobileNabIcon.classList.toggle('active')
			mobileNab.classList.toggle('active')
			document.body.classList.toggle('no-scroll')
		});
	}))
