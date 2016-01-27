ngLocalStorage
==============

Import/Export files using `LocalStorage`

Install
-------

    git clone <registry>/nglocalstorage
    cd nglocalstorage
    npm install
    npm run build

Usage
-----

Launch the server

    npm run serve

You might want to open 2 browser windows to ensure data is not stored in memory

  * Import files to LocalStorage: <http://localhost:3000/import>
  * Export files from LocalStorage: <http://localhost:3000/export>

Known Issues
------------

### `localStorage`

  * Browser support: IE >= 8
  * Max size (<http://stackoverflow.com/a/2989317/1815446>)
      * FF, Chrome: 10MB per origin
      * IE: 10 MB per storage area
  * Can be disabled by the user
  * Cannot be shared accross domains without trickery
    (<https://www.nczonline.net/blog/2010/09/07/learning-from-xauth-cross-domain-localstorage/>)

### Proof of concept

The following issues are only related to this proof of concept (nothing to do
with `localStorage` itself) and can be implemented/fixed if needed

  * Only 1 file can be stored at the same time
  * Content is not ciphered

The file input component is still buggy and is lacking some features

  * select the same file multiple times is not supported
  * multiselection is not supported
  * `ReferenceError` when cancelling the select dialog

Browser support

  * `localStorage`: IE >= 8 (<http://caniuse.com/#search=localstorage>)
  * `FileReader`: IE >= 10 (<http://caniuse.com/#search=filereader>)
  * `a.download`: Edge >= 13 (<http://caniuse.com/#search=a.download>)
  * `angular@1.4.9`: IE >= 9 (<http://angularjs.blogspot.com.es/2013/12/angularjs-13-new-release-approaches.html>)
      * `angular-ui-router@0.2.15`: IE >= 9
      * `ngStorage@0.3.10`: IE >= 9
  * `lodash@4.0.0`: IE >= 9 (<https://lodash.com/#support>)
