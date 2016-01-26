'use strict';

module.exports = function ($localStorage) {
  var controller = function ($scope) {
    $scope.import = function (filename, content) {
      $localStorage.filename = filename;
      $localStorage.content = content;
    };
  };

  return {
    scope: {},
    templateUrl: 'import/import.html',
    controller: controller
  };
};

