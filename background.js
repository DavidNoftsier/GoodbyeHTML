let exampleElementSelectors = '.flash.flash-full.js-notice.flash-error';

// chrome.runtime.onInstalled(function() {
// 	chrome.storage.sync.set({elementsToDestroy: [exampleElementSelectors]}, function (){});
// });

// TODO add logic to only perform this check on update or first time install
chrome.storage.sync.get(['elementsToDestroy'], function (result) {
	if(!result.elementsToDestroy.length)
		chrome.storage.sync.set({elementsToDestroy: [exampleElementSelectors]}, function (){});
	
});