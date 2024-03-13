const btnCode = document.getElementById('btn-code')
let pdf

if (location.href.includes('modulos-nativos')) {
	async function loadPdf() {
		pdf = await fetch('../../public/assets/texts/ls-advanced.pdf').then((res) => res.blob())
	}
	loadPdf()
	btnCode.addEventListener('click', () => {
		btnCode.setAttribute('href', URL.createObjectURL(pdf))
	})
}

if (location.href.includes('/mvc')) {
	async function loadPdf() {
		pdf = await fetch('../../public/assets/texts/controller-obj.pdf').then((res) => res.blob())
	}
	loadPdf()
	btnCode.addEventListener('click', () => {
		btnCode.setAttribute('href', URL.createObjectURL(pdf))
	})
}
