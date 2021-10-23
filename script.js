const [inputFile, inputURL] = document.querySelectorAll('input')
const div = document.querySelector('div')

const handle = (filename, imgSrc, pass) =>
{
	const img = document.createElement('img')
	img.src = imgSrc
	img.crossOrigin = ''

	img.addEventListener('load', () => {
		const color = 'rgba(' + img.getRgba().join(', ') + ')'
		const p = document.createElement('p')
		p.style.color = color
		p.textContent = filename + ' => ' + color

		pass(p)
	})
}

inputFile.addEventListener('change', () => {
	for (const file of inputFile.files)
	{
		const reader = new FileReader

		reader.addEventListener('load', () => {
			handle(file.name, reader.result, img => div.prepend(img))
		})

		reader.readAsDataURL(file)
	}
})

inputURL.addEventListener('input', () => {
	try
	{
		const { href, pathname, protocol } = new URL(inputURL.value)
		let filename

		switch (protocol)
		{
			case 'data:':
				filename = 'data url'
			break
		
			case 'http:':
				filename = pathname.split('/').pop()
			break

			case 'https:':
				filename = pathname.split('/').pop()
			break

			default:
				alert(protocol + ' is an unsupported protocol')
		}

		if (filename) handle(filename, href, img => div.prepend(img))
	}
	catch ({ message }) { alert(message) }
})
