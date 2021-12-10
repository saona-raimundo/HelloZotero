// Only create main object once
if (!Zotero.HelloZotero) {
	let loader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
					.getService(Components.interfaces.mozIJSSubScriptLoader);
	loader.loadSubScript("chrome://hello_zotero/content/hello_zotero.js");
}