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

TODO
----

  * List native APIs used and the supported browsers
  * Max storage size (`localStorage`)

Known Issues
------------

  * Content is not ciphered
  * The file input component is still buggy and is lacking some features
      * select the same file multiple times is not possible
      * multiselection is not possible
      * error on console when cancelling the select dialog
