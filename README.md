Basic Zotero plug-in development example.

## Goal

Help those developing Zotero plug-ins for the first time.

## Design

This is a "hello-world" example: a simple template with no real functionality.

See [ZoteroPlugins](https://github.com/saona-raimundo/ZoteroPlugins), for a detailed guide of Zotero plugins.

### Directory

This is the directory structure.

- install.rdf

- hello_zotero-update.rdf

- chrome.manifest

- defaults
  
  - preferences
    
    - defaults.js

- chrome
  
  - skin
    
    - default
      - hello_zotero
  
  - locale
    
    - en-US
      
      - hello_zotero.dtd
  
  - content
    
    - hello_zotero
      
      - include.js

# Acknowledgements

I thank everyone involved in the projects [ZotFile](https://github.com/jlegewie/zotfile) and [Zotero-plugins](https://github.com/dcartertod/zotero-plugins). Their plugins were very useful guidance.

# License

Distributed under the terms of both the MIT license and the
Apache License (Version 2.0).

See [LICENSE-APACHE](https://github.com/rust-random/rand/blob/master/LICENSE-APACHE) and [LICENSE-MIT](https://github.com/rust-random/rand/blob/master/LICENSE-MIT) for details.
