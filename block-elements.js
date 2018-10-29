chrome.storage.sync.get(['elementsToBlockEverywhere'], function (result) {
	for(let i = 0; i< result.elementsToBlockEverywhere.length; i++){
		let elements = document.querySelectorAll(result.elementsToBlockEverywhere[i]);
		debugger;
		for(let i = 0; i < elements.length; i++)
			elements[i].parentNode.removeChild(elements[i]);
	}
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
  let elements = document.querySelectorAll(elementSelector);
  for(let i = 0; i < elements.length; i++)
    elements[i].parentNode.removeChild(elements[0]);
}


