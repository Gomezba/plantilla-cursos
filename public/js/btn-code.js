const btnCode = document.getElementById('btn-code')

let pdf
async function loadPdf() {
	pdf = await fetch('../../public/assets/texts/ls-advanced.pdf').then((res) => res.blob())
}
loadPdf()

btnCode.addEventListener('click', () => {
	btnCode.setAttribute('href', URL.createObjectURL(pdf))
})
