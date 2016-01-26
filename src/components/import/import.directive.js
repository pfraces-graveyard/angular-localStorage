'use strict';

module.exports = function ($localStorage) {
  var controller = function ($scope) {
    $scope.$storage = $localStorage;

    $scope.import = function (filename, content) {
      $localStorage.filename = filename;
      $localStorage.content = content;
    };

    $scope.remove = function () {
      delete $localStorage.filename;
      delete $localStorage.content;
    };
  };

  return {
    scope: {},
    templateUrl: 'import/import.html',
    controller: controller
  };
};

