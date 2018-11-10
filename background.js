let exampleElementSelectors = '.flash.flash-full.js-notice.flash-error';

chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.get(['elementsToBlockEverywhere'], function (result) {
	if(!result.elementsToBlockEverywhere.length)
		chrome.storage.sync.set({elementsToBlockEverywhere: [exampleElementSelectors]}, function (){});
	
	});
});

// TODO add logic to only perform this check on update or first time install
// chrome.storage.sync.get(['elementsToBlockEverywhere'], function (result) {
// 	if(!result.elementsToBlockEverywhere.length)
// 		chrome.storage.sync.set({elementsToBlockEverywhere: [exampleElementSelectors]}, function (){});
	
// });
// chrome.storage.sync.get(['elementsToBlockEverywhere'], function (result) {
// 	if(!result.elementsToBlockEverywhere.length)
// 		chrome.storage.sync.set({elementsToBlockEverywhere: [exampleElementSelectors]}, function (){});
	
// });