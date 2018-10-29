initialize = () => {
  // Perhaps this should be a persistable preference in the future
  document.getElementById('action-description').innerText = 'Destroy this element only during this site visit';
}

initialize();

const sendMessage = (action, data) => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: action, data: data}, function(response) {});
  });
}

// chrome.storage.sync.get(['elementsToDestroy'], function (result) {
//   var elements = document.querySelectorAll(result.elementsToDestroy[0]);
  
//   for(var i = 0; i < elements.length; i++)
//     elements[i].parentNode.removeChild(elements[0]);
// });

const addElement = (elementSelector) => {
  chrome.storage.sync.get(['elementsToDestroy'], function (result) {
    // TODO Check that there are no duplicates
    result.elementsToDestroy.push(elementSelector);
    let updatedElementsToDestroy = result.elementsToDestroy;
    // TODO Try and find a better way than replacing the entire object each time
    chrome.storage.sync.set({elementsToDestroy: updatedElementsToDestroy}, function (){});
  });
}

document.getElementById('block-element').addEventListener('click', 
  () => {
    document.getElementById('block-element')
    let elementSelector = document.getElementById('block-element-selector').value;
    sendMessage('destroyElements', elementSelector);
    // addElement(element);
  });

document.getElementById('action-select').addEventListener('change', 
  () => {
    debugger;
    let action = document.getElementById('action-select').value;
    switch(action){
      case 'destroy':
        document.getElementById('action-description').innerText = 'Destroy this element only during this site visit';
        break;
      case 'block':
        document.getElementById('action-description').innerText = 'Block this element every time you visit this site';
        break;
      case 'block-everywhere':
        document.getElementById('action-description').innerText = 'Block this element everyt time you visit any site';
        break;
    }
  });