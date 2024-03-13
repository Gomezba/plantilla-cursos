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

// addEventListener('DOMContentLoaded', () => {
// 	const linkActive = document.querySelector('.active')
// 	if (linkActive) {
// 		linkActive.scrollIntoView({ behavior: 'smooth', block: 'start' })
// 	}
// })

document.addEventListener('DOMContentLoaded', function () {
	// Obtener el enlace activo
	const linkActive = document.querySelector('.active')
	const mainMenu = document.querySelector('.sidebar')
	const links = mainMenu.querySelectorAll('li a')
	const linksFalse = []

	for (let i = 0; i <= 17; i++) {
		linksFalse.push(links[i].textContent)
	}

	if (linkActive) {
		if (linksFalse.includes(linkActive.textContent)) return
		// Hacer scroll suave hasta el enlace activo dentro del contenedor del menú
		mainMenu.scrollTop = linkActive.offsetTop - mainMenu.offsetTop
	}
})
