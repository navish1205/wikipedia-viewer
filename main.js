
document.getElementById('searchBtn').addEventListener('click', wikipediaCall);

function wikipediaCall () {
	var xml = new XMLHttpRequest();
	xml.open('GET', 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json', true);
	console.log(xml.responseText);
}
