'use strict';

module.exports = function () {
  var link = function (scope) {
    scope.name = 'localstorage';
  };

  return {
    templateUrl: 'main/main.html',
    link: link
  };
};
