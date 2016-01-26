'use strict';

module.exports = function ($localStorage, fileWrite) {
  var link = function (scope) {
    scope.$storage = $localStorage;

    scope.export = function () {
      fileWrite($localStorage.filename, $localStorage.content);
    };

    scope.remove = function () {
      delete $localStorage.filename;
      delete $localStorage.content;
    };
  };

  return {
    templateUrl: 'export/export.html',
    link: link
  };
};

