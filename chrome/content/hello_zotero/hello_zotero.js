/**
Hello Zotero: Basic Zotero plug-in development example
Raimundo Saona
HelloZotero is a template for Zotero plugin development.
Webpage: https://github.com/saona-raimundo/HelloZotero
License
Distributed under the terms of both the MIT license and the
Apache License (Version 2.0).
Contributions preferably through pull requests are welcome!
*/



Zotero.HelloZotero = new function() {
	
	// Application fields
	this.counter = 0;

	// Local variables
	var _initialized = false;

	 /**
     * Initiate zoteropreview
	 * called from include.js
	 * adds a select listener to the main window
     * @return {void}
     */
	this.init = async function () {
		Zotero.debug("HelloZotero: init");
		await Zotero.Schema.schemaUpdatePromise;

        if (!_initialized) {
        	// Only do this for the first run
        }
		
		if(window.ZoteroPane) {
			var doc = window.ZoteroPane.document;
			// React to every select
			doc.addEventListener("select", function(){
				Zotero.HelloZotero.say_hello();
			});
		}
	};

	/**
	* Primary function.
	* Prints hello.
	*/
	this.say_hello = async function() {
		Zotero.debug('HelloZotero: say_hello');
		
		// Here we have to use the Zotero JavaScript API
		// Reference: https://www.zotero.org/support/dev/client_coding/javascript_api
		var items = Zotero.getActiveZoteroPane().getSelectedItems();
		Zotero.debug('HelloZotero: counting: ' + this.counter);
		this.counter += 1;

		Zotero.debug('HelloZotero: say_hello done');
	};	
};

// Initialize the utility
window.addEventListener('load', function(e) { Zotero.HelloZotero.init(); }, false);