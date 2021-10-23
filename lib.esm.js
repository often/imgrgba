export const getRgba = img =>
{
	const ctx = document.createElement('canvas').getContext('2d')
	ctx.drawImage(img, 0, 0, 1, 1)
	
	return Array.from(ctx.getImageData(0, 0, 1, 1).data)
}
