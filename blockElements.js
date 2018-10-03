      
      document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('block-element').addEventListener('click', function(){

          var element = document.getElementById('element').value;
          addElement(element);
        });
      });

      var addElement = function (element){
          chrome.storage.sync.get(['elementsToDestroy'], function (result) {
            // TODO Check that there are no duplicates
            result.elementsToDestroy.push(element);
            var updatedElementsToDestroy = result.elementsToDestroy;
            // TODO Try and find a better way than replacing the entire object each time
            chrome.storage.sync.set({elementsToDestroy: updatedElementsToDestroy}, function (){});
          });
      }