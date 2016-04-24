function open_tab() {
	chrome.tabs.create({'url': chrome.extension.getURL('index.html')}, function(tab) {
	  // Tab opened.
	  console.log('ttab open');
	});
}
chrome.browserAction.onClicked.addListener(open_tab)