'use strict';

module.exports = function ($window) {
  var createElement = function (element) {
    return $window.document.createElement(element);
  };

  return createElement;
};
