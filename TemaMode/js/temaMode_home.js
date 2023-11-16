// 1 пустая сслыка темы
// 2 подключение js
// 3 замена footer


let flagMode = false
let mobeBtn = document.querySelector('.black-style')

$(".black-style").on("click", function() {
	if (flagMode) {
		console.log('1')
		lightIcon()
		applyTheme("light");
	} else {
		console.log('2')
		darkIcon()
		applyTheme("dark");
	}
});


function lightIcon() {
	$(".black-style > img").attr("src", "./TemaMode/img/light-btn.svg");

	$(".header-connection > * > * > img").attr("src", "./TemaMode/img/light-whatsapp.jpg");
	$(".mobile-connection > * > * > img").attr("src", "./TemaMode/img/light-whatsapp.jpg");
	$(".footer-connection > * > * > img").attr("src", "./TemaMode/img/light-whatsapp.jpg");

	$(".more > img").attr("src", "./TemaMode/img/light-more-arrow.svg");

	$(".f1").attr("src", "./TemaMode/img/light-foot-1.jpg");
	$(".f2").attr("src", "./TemaMode/img/light-foot-2.jpg");
	$(".f3").attr("src", "./TemaMode/img/light-foot-3.jpg");
	$(".f4").attr("src", "./TemaMode/img/light-foot-4.jpg");

	$(".popup__close > img").attr("src", "./TemaMode/img/light-closs.svg");

	$(".company-img-1").attr("src", "./TemaMode/img/light-devel.jpg");

	$(".popup-left > img").attr("src", "./TemaMode/img/light-left.svg");
	$(".popup-right > img").attr("src", "./TemaMode/img/light-right.svg");

	$(".non-active-img").attr("src", "./TemaMode/img/light-non-active.svg");
	$(".clos-left-mobile").attr("src", "./TemaMode/img/light-non-active.svg");
	$(".clos-left").attr("src", "./TemaMode/img/light-non-active.svg");

	$(".filter-wrapper > img").attr("src", "./TemaMode/img/light-filter.svg");
	

}

function darkIcon() {
	$(".black-style > img").attr("src", "./TemaMode/img/dark-btn.svg");

	$(".header-connection > * > * > img").attr("src", "./TemaMode/img/dark-whatsapp.svg");
	$(".mobile-connection > * > * > img").attr("src", "./TemaMode/img/dark-whatsapp.svg");
	$(".footer-connection > * > * > img").attr("src", "./TemaMode/img/dark-whatsapp.svg");

	$(".more > img").attr("src", "./TemaMode/img/dark-more-arrow.svg");
	
	$(".f1").attr("src", "./TemaMode/img/dark-foot-1.svg");
	$(".f2").attr("src", "./TemaMode/img/dark-foot-2.svg");
	$(".f3").attr("src", "./TemaMode/img/dark-foot-3.svg");
	$(".f4").attr("src", "./TemaMode/img/dark-foot-4.svg");

	$(".popup__close > img").attr("src", "./TemaMode/img/dark-closs.svg");

	$(".company-img-1").attr("src", "./TemaMode/img/dark-devel-2.svg");

	$(".popup-left > img").attr("src", "./TemaMode/img/dark-left.svg");
	$(".popup-right > img").attr("src", "./TemaMode/img/dark-right.svg");
	
	$(".non-active-img").attr("src", "./TemaMode/img/dark-non-active.svg");
	$(".clos-left-mobile").attr("src", "./TemaMode/img/dark-non-active.svg");
	$(".clos-left").attr("src", "./TemaMode/img/dark-non-active.svg");

	$(".filter-wrapper > img").attr("src", "./TemaMode/img/dark-filter.svg");

}


function applyTheme(themeName) {
	if (flagMode) {
		flagMode = false
	} else {
		flagMode = true
	}
	document.querySelector('[title="theme"]').setAttribute('href', `./TemaMode/css/${themeName}.css`);
	localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme'); // Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.

if(activeTheme === null || activeTheme === 'light') { // Если значение не записано, или оно равно 'light' - применяем светлую тему
	flagMode = true
	applyTheme('light');
	lightIcon()
} else if (activeTheme === 'dark') { // Если значение равно 'dark' - применяем темную
	flagMode = false
	applyTheme('dark');
	darkIcon()
}