document.addEventListener('DOMContentLoaded', function() {
	var extensionURL = chrome.extension.getURL("MainScript.js");
	var script = document.createElement("script");
	script.innerHTML = "try {$.when(window.SWFready).done(function() { try { if (JSsetProjectStats) { var bak = JSsetProjectStats; JSsetProjectStats = function(a,b,c,d) { var script = document.createElement(\"script\");script.src = \"" + extensionURL + "\"; document.body.appendChild(script); return bak(a,b,c,d); }}} catch (e) {}});} catch (e) {}";
	document.body.appendChild(script);
});
