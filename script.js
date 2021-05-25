const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
	if(event.type === 'touchstart') event.preventDefault()
	const nav = document.getElementById('nav');
	
	nav.classList.toggle('active');
	const active = nav.classList.contains('active')
	event.currentTarget.setAttribute('aria-expanded', active);

	if (active) {
		event.currentTarget.setAttribute('aria-label', 'Fechar menu')
	} else {
		event.currentTarget.setAttribute('aria-label', 'Abrir menu')
	} 
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);