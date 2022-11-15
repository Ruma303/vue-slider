const app = new Vue ({
	el: '#root',
	data:{ 
		arrImages : [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
],
	// il resto dei dati
	timeSlider : 3 * 1000,
	direction : 1,
	activeIndex : 0,
	idInterval: 0,
	isAutoplayActive : true,
}, 
methods: {
	changeSlide() {}, 
	startAutoplay() {setInterval(this.element, 3000)}, //quasi ok
	stopAutoplay() {clearInterval(idInterval)}, //ok

	renderSlider(arrImages){},
	invertDirection() {direction *= -1;},
	// togliere la classe active dall'elemento attivo corrente
	moveSlide(direction) {
		listSlides[activeIndex].classList.remove('active');
		listThumbs[activeIndex].classList.remove('active');
		if (direction > 0) {
			activeIndex++;
			if (activeIndex === listSlides.length) {
				activeIndex = 0;
			}
		} else {
			if (activeIndex === 0) {
				activeIndex = listSlides.length;
			}
			activeIndex--;
		}},

	},
	// aggiungere la classe active all'elemento successivo
	// listSlides[activeIndex].classList.add('active');
	// listThumbs[activeIndex].classList.add('active');
	// document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`;
	/*events: {
	document.querySelector('.slider').addEventListener('mouseenter', () => stopAutoplay()),
	document.querySelector('.slider').addEventListener('mouseleave', () => {
		if (isAutoplayActive) {
			startAutoplay();
		}}),
		document.querySelector('.btn-invert').addEventListener('click', () => invertDirection()),
		document.querySelector('.btn-start-stop').addEventListener('click', function() {
			if (isAutoplayActive) {
				stopAutoplay();
				isAutoplayActive = false;
				this.innerHTML = 'Start';
			} else {
				startAutoplay();
				isAutoplayActive = true;
				this.innerHTML = 'Stop';
			}}),
			eleBtnDown.addEventListener('click', () => moveSlide(1)),
			eleBtnUp.addEventListener('click', () => moveSlide(-1)),
			
			listThumbs.forEach((eleThumb, index) => {
				eleThumb.addEventListener('click', () => {
					listSlides[activeIndex].classList.remove('active');
					listThumbs[activeIndex].classList.remove('active');
					activeIndex = index;
					listSlides[activeIndex].classList.add('active');
					listThumbs[activeIndex].classList.add('active');
					document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`,
				})
			}),
	}*/
})







// FUNCTIONS


/*function renderSlider(arrImages) {
	const eleSliderViewer = document.querySelector('.slider-viewer');
	const eleSliderThumbs = document.querySelector('.thumbs');

	document.body.style.backgroundImage = `url('img/${arrImages[activeIndex].image}')`;
	// creare i tag immagine nell'html
	for (let i = 0; i < arrImages.length; i++) {
		const objSlide = arrImages[i];
		// creare le slide
		eleSliderThumbs.innerHTML = eleSliderThumbs.innerHTML + `<img src="img/${objSlide.image}" class="thumb-img ${i === 0 ? 'active' : ''}">`;
		eleSliderViewer.innerHTML += `
			<div class="slide ${i === 0 ? 'active' : ''}">
				<img src="img/${objSlide.image}" alt="${objSlide.title}">
				<div class="text">
					<h2>${objSlide.title}</h2>
					<p>${objSlide.text}</p>
				</div>
			</div>
		`
	}
}*/





