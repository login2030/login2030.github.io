export default function ({url, width, height}) {
	let top = (window.innerHeight / 2) - (parseInt(height) / 2);
	let left = (window.innerWidth / 2) - (parseInt(width) / 2);
	return `javascript:window.open('${url}', '', 'top=${top}, left=${left}, width=${width}, height=${height}')`;
}