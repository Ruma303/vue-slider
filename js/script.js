const app = new Vue ({
	el: '#root',
	mounted ()  {//appena l'interfaccia è costruita
		this.autoPlay();//fai partire questa funzione
	},
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
	isAutoplayActive : true, //serve a decidere se l'autoplay è attivo
}, 
methods: {
	changeSlide(direction) {
		if (direction > 0) {
			//active index non si trova nella funzione, quindi la richiami col this
			this.activeIndex++; //andare avanti
			if (this.activeIndex === this.arrImages.length) {
				this.activeIndex = 0;
			}
		} else {
			if (this.activeIndex === 0) {
				this.activeIndex = this.arrImages.length;
			} this.activeIndex--; //andare indietro
		}
	}, setActiveIndex(index) {
		this.activeIndex = index;
	}, autoPlay() {
		if(this.autoPlay) {
			this.stopAutoplay();
		} else {
			startAutoplay();
		}
	}, stopAutoplay () {
		clearInterval(this.direction);
		this.isAutoplayActive = false;
	}, startAutoplay () {
		this.idInterval = setInterval(() => this.changeSlide(this.direction), this.timeSlider);
		this.isAutoplayActive = true;
	}, invertPlay () {
		this.direction *= -1;
	},
}, 
});



