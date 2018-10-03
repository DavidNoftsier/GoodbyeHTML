      
      document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('block-element').addEventListener('click', function(){

          var element = document.getElementById('element').value;
          addElement(element);
        });
      });

      function addAlement (element){
          chrome.storage.sync.get(['elementsToDestroy'], function (result) {
            // TODO Check that there are no duplicates
            var updatedElementsToDestroy = result.elementsToDestroy.push(element);
            // TODO Try and find a better way than replacing the entire object each time
            chrome.storage.sync.set({elementsToDestroy: updatedElementsToDestroy}, function (){});
          });
      }