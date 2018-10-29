chrome.storage.sync.get(['elementsToDestroy'], function (result) {
	var elements = document.querySelectorAll(result.elementsToDestroy[0]);
	
	for(var i = 0; i < elements.length; i++)
		elements[i].parentNode.removeChild(elements[0]);
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
	debugger;
	switch(request.action){
		case 'destroyElements': 
			destroyElements(request.data);
			break;
	}
});

const destroyElements = (elementSelector) => {
  debugger;
  var elements = document.querySelectorAll(elementSelector);
  for(var i = 0; i < elements.length; i++)
    elements[i].parentNode.removeChild(elements[0]);
}


