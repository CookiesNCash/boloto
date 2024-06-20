const debug = document.querySelector('.debug');
const Posts = document.querySelectorAll('.Post');

const displayed = {};


	function scrollTracking(entries) {
	for (const entry of entries) {
		displayed[entry.target.id] = entry.intersectionRatio >= 0.2;
	}
	
	debug.textContent = Object
		.entries(displayed)
		.filter(([id, inViewport]) => inViewport)
		.map(([id, inViewport]) => id)
		.join('\n');
}

const observer = new IntersectionObserver(scrollTracking, {
	threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
});
console.log('hi')
Posts.forEach(element => observer.observe(element));



