// when the extension is first installed
chrome.runtime.onInstalled.addListener(function(details) {
    localStorage["nope_installed"] = true;
});


// Listen for any changes to the URL of any tab.
// see: http://developer.chrome.com/extensions/tabs.html#event-onUpdated
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    if (tab.status !== "complete"){
        console.log("not yet");
        return;
    }
    if (tab.url.toLowerCase().indexOf("facebook.com") === -1){
        console.log("not here");
        return;
    }
    if (localStorage["nope_installed"] == "true"){
        console.log("HI executing them script.");
        chrome.tabs.executeScript(null, {"file": "nope.js"});
    }

});

// show the popup when the user clicks on the page action.
chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.pageAction.show(tab.id);
});
