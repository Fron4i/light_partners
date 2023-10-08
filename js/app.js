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




var elem = document.querySelector('.hero-slider');
var flkty = new Flickity( elem, {
	wrapAround: true,
	autoPlay: 1850,
	pauseAutoPlayOnHover: false,
	prevNextButtons: false
});

var playButton1 = document.querySelector('.popup__close');
var playButton2 = document.querySelector('.popup__area');
var stopButton = document.querySelector('.btn-bell');

$(".btn-bell").on("click", function() {
		setTimeout(function() {
			flkty.stopPlayer();
		}, 100)
})

$(".popup__area").on("click", function() {
		setTimeout(function() {
			flkty.playPlayer();
		}, 100)
})

function clisk() {
	stopButton.classList.toggle('active')
	flkty.playPlayer();

	playButton2.addEventListener( 'click', function() {
		flkty.playPlayer();
	});

	playButton1.addEventListener( 'click', function() {
		flkty.playPlayer();
	});
}

flkty.on( 'staticClick', function( event, pointer, cellElement, cellIndex ) {
	flkty.playPlayer();
	setTimeout(clisk, 100);
});

flkty.on( 'dragEnd', function( event, pointer ) { 
	flkty.playPlayer();
	setTimeout(clisk, 100);
});
