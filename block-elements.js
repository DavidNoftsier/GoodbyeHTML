
// Gets array of elements that are blocked on every site from storage and destroys them  
chrome.storage.sync.get(['elementsToBlockEverywhere'], function (result) {
	for(let i = 0; i< result.elementsToBlockEverywhere.length; i++){
		let elements = document.querySelectorAll(result.elementsToBlockEverywhere[i]);
		for(let i = 0; i < elements.length; i++)
			elements[i].parentNode.removeChild(elements[i]);
	}
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		switch(request.action){
    		case 'destroyElements': 
    			destroyElements(request.data);
    			break;
	}
});

const destroyElements = (elementSelector) => {
  let elements = document.querySelectorAll(elementSelector);
  for(let i = 0; i < elements.length; i++)
    elements[i].parentNode.removeChild(elements[0]);
}

handleMouseover = (event) => {
    let element = event.target;

    element.className += ' highlight-element';

    let tooltip = createTooltip(element);
    element.prepend(tooltip);
}
document.addEventListener('mouseover', handleMouseover);

handleMouseout = (event) => {
    element = event.target;

    element.className = element.className.replace(' highlight-element', '');

    element.removeChild(element.children[0]);
}
document.addEventListener('mouseout', handleMouseout);

getElementFromXPath = (xpath) => {
	return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

createTooltip = (element) => {
    let tooltipWrapper = document.createElement('span');
    tooltipWrapper.style.position = 'relative';

    let tooltip = document.createElement('span');
    tooltip.id = 'highlighted-element-tooltip';

    let clientRect = element.getBoundingClientRect();
    let text = `element: ${element.localName} position (x: ${clientRect.x} y: ${clientRect.y}) height: ${clientRect.height} width: ${clientRect.width}`;
    let textNode = document.createTextNode(text);
    tooltip.appendChild(textNode);

    tooltipWrapper.append(tooltip);

    return tooltipWrapper;
}

// getPathTo
// https://stackoverflow.com/questions/2631820/how-do-i-ensure-saved-click-coordinates-can-be-reloaed-to-the-same-place-even-i/2631931#2631931
// Author: https://stackoverflow.com/users/18936/bobince

// export function prepGetPath = (event) => {
//     if (event===undefined) event= window.event;                     // IE hack
//     var target= 'target' in event? event.target : event.srcElement; // another IE hack

//     // var root= document.compatMode==='CSS1Compat'? document.documentElement : document.body;
//     // var mxy= [event.clientX+root.scrollLeft, event.clientY+root.scrollTop];

//     var path= getPathTo(target);
//     // var txy= getPageXY(target);
//     // alert('Clicked element '+path+' offset '+(mxy[0]-txy[0])+', '+(mxy[1]-txy[1]));
//     return path;
// }

getElementXPath = (element) => {
    if (element.id!=='')
        return 'id("'+element.id+'")';
    if (element===document.body)
        return element.tagName;

    var ix= 0;
    var siblings= element.parentNode.childNodes;
    for (var i= 0; i<siblings.length; i++) {
        var sibling= siblings[i];
        if (sibling===element)
            return getElementXPath(element.parentNode)+'/'+element.tagName+'['+(ix+1)+']';
        if (sibling.nodeType===1 && sibling.tagName===element.tagName)
            ix++;
    }
}

//export default getElementXPath;

// getPageXY = (element) => {
//     var x= 0, y= 0;
//     while (element) {
//         x+= element.offsetLeft;
//         y+= element.offsetTop;
//         element= element.offsetParent;
//     }
//     return [x, y];
// }