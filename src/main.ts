/* REVEAL EFFECT
 ********************************************************************************/
const revealEffect = () => {
	const elements = document.querySelectorAll('.reveal-group')
	const observer = new IntersectionObserver(entries => {
		entries.forEach(({ isIntersecting, target }) => target.classList.toggle('reveal-active', isIntersecting))
	})
	elements.forEach(element => observer.observe(element))
}

revealEffect()
