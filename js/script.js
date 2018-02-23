var list = document.getElementById('list'),
	add = document.getElementById('addElem');

add.addEventListener('click', function(element) {
	var element = document.createElement('li');
	var values = document.getElementsByTagName('li');
	var value = values.length;
	console.log(values.length);
	list.appendChild(element);
	element.innerHTML = 'item ' + value;
	if (value === 5) {
		alert('!!Caution-Be aware of creating too many buttons.');
	}
});
