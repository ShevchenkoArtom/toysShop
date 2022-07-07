window.onscroll = function showHeader () {
	let header = document.querySelector('.container__wrapper-middle');
	if(window.pageYOffset > 0) {
		header.classList.add('header__fixed')
	} else {
		header.classList.remove('header__fixed')
	}
}