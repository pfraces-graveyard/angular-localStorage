'use strict';

module.exports = function ($window) {
  var fileReader = function () {
    return new $window.FileReader();
  };

  return fileReader;
};
