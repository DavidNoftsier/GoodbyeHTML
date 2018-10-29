
document.addEventListener('DOMContentLoaded', function() {
  document
    .getElementById('block-element')
    .addEventListener('click', function(){
      debugger;

      let elementSelector = document.getElementById('block-element-selector').value;
      destroyElement(elementSelector);
      // addElement(element);
    });
});

// chrome.storage.sync.get(['elementsToDestroy'], function (result) {
//   var elements = document.querySelectorAll(result.elementsToDestroy[0]);
  
//   for(var i = 0; i < elements.length; i++)
//     elements[i].parentNode.removeChild(elements[0]);
// });

const destroyElement = (elementSelector) => {
  debugger;
  var elements = document.querySelectorAll(elementSelector);
  for(var i = 0; i < elements.length; i++)
    elements[i].parentNode.removeChild(elements[0]);
}

const addElement = (elementSelector) => {
    chrome.storage.sync.get(['elementsToDestroy'], function (result) {
      // TODO Check that there are no duplicates
      result.elementsToDestroy.push(elementSelector);
      let updatedElementsToDestroy = result.elementsToDestroy;
      // TODO Try and find a better way than replacing the entire object each time
      chrome.storage.sync.set({elementsToDestroy: updatedElementsToDestroy}, function (){});
    });
}


