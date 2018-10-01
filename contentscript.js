		// for(var i = 0; i < alwaysDestroy.length; i++){
		// 	var elements = document.getElementsByClass(alwaysDestroy[i]);
		// 	// This is a good opportunity to use the 'for ... in' syntax as we don't want to be looking
		// 	// up undefined values, and this syntax will only iterate over defined values and we have no concern
		// 	// for the order in which they're iterated
		// 	for(var element in elements)
		// 		element.parentNode.removeChild(element);
		// }	

// var elements = document.getElementsByClass('')
// for(var element in elements)
// 	element.parentNode.removeChild(element);

var elements = document.querySelectorAll('.flash.flash-full.js-notice.flash-error');

// for(var element in elements)
// 	element.parentNode.removeChild(element);

for(var i = 0; i < elements.length; i++)
	elements[i].parentNode.removeChild(elements[0]);