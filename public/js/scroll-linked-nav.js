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

document.addEventListener('DOMContentLoaded', function () {
	// Obtener el enlace activo
	const linkActive = document.querySelector('.active')
	if (linkActive) {
		// Hacer scroll suave hasta el enlace activo dentro del contenedor del menú
		const mainMenu = document.querySelector('.sidebar')
		if (mainMenu) {
			mainMenu.scrollTop = linkActive.offsetTop - mainMenu.offsetTop
		}
	}
})
