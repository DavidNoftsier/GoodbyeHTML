// chrome.runtime.onInstalled.addListener(function() {
//     // chrome.storage.sync.set({color: '#3aa757'}, function() {
//     //   console.log("The color is green.");
//     // });
// 	chrome.storage.sync.set({alwaysDestroy: ['flash flash-full js-notice flash-error']}, function (){
// 	});
// 	chrome.storage.sync.get(['alwaysDestroy'], function(result){
// 		return result;	
// 	});
// });

// chrome.storage.onChanged.addListener(function(changes, namespace){
// 	for(key in changes){
// 		var storageChange = changes[key];
// 	}
// })

// chrome.runtime.onMessage.addListener(
// 	function(message, callback) {
// 		if(message == 'destroyElements'){
// 			chrome.tabs.executeScript({
// 				file:'contentScript.js'
// 			})
// 		}
// 	});


		// for(var i = 0; i < alwaysDestroy.length; i++){
		// 	var elements = document.getElementsByClass(alwaysDestroy[i]);
		// 	// This is a good opportunity to use the 'for ... in' syntax as we don't want to be looking
		// 	// up undefined values, and this syntax will only iterate over defined values and we have no concern
		// 	// for the order in which they're iterated
		// 	for(var element in elements)
		// 		element.parentNode.removeChild(element);
		// }	

