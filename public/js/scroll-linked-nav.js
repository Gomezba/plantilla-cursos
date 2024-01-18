const submenu = document.querySelector('.submenu')

if (submenu) {
	const articles = document.querySelectorAll('article')
	const submenuLinks = Array.from(document.querySelectorAll('.submenu__link'))

	const articlesElements = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const linkId = entry.target.id
				activeSubmenu(linkId)
			}
		})
	}

	function activeSubmenu(id) {
		const linkActive = submenuLinks.find((link) => link.classList.contains('active'))
		const linked = document.querySelector(`a[href='#${id}']`)
		if (linkActive) {
			linkActive.classList.remove('active')
		}

		linked.classList.add('active')
	}

	const observer = new IntersectionObserver(articlesElements, {
		rootMargin: '-50%',
	})

	articles.forEach((article) => observer.observe(article))
}
