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

const blockElementEverywhere = (elementSelector) => {
  chrome.storage.sync.get(['elementsToBlockEverywhere'], function (result) {
    // Return if new element is a duplicate
    for(let i = 0; i < result.elementsToBlockEverywhere.length; i++)
      if(result.elementsToBlockEverywhere[i] === elementSelector)
        return;
    result.elementsToBlockEverywhere.push(elementSelector);
    let updatedElementsToBlockEverywhere = result.elementsToBlockEverywhere;
    chrome.storage.sync.set({elementsToBlockEverywhere: updatedElementsToBlockEverywhere}, function (){});
  });
}

document.getElementById('element-action').addEventListener('click', 
  () => {
    let elementSelector = document.getElementById('block-element-selector').value;
    let action = document.getElementById('action-select').value;
    switch(action){
      case 'destroy':
        break;
      case 'block':
        break;
      case 'block-everywhere':
        blockElementEverywhere(elementSelector); 
        break;
    }
    
    sendMessage('destroyElements', elementSelector);
  });

// Description of each action driven by the action selection dropdown 
document.getElementById('action-select').addEventListener('change', 
  () => {
    let action = document.getElementById('action-select').value;
    switch(action){
      case 'destroy':
        document.getElementById('action-description').innerText = 'Destroy element during this site visit only.';
        break;
      case 'block':
        document.getElementById('action-description').innerText = 'Block element every time you visit this site.';
        break;
      case 'block-everywhere':
        document.getElementById('action-description').innerText = 'Block element every time you visit any site.';
        break;
    }
  });