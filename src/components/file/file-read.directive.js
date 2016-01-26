'use strict';

var partial = require('lodash/partial');

module.exports = function ($parse, fileRead) {
  var controller = function ($scope, $element, $attrs) {
    var callback = $parse($attrs.fileRead)($scope);

    var promise = null;
    $scope.file = null;

    $scope.fileRead = function (files) {
      $scope.file = files[0];
      promise = fileRead($scope.file);
    };

    $scope.fileUpload = function () {
      if (!promise) { return; }
      promise.then(partial(callback, $scope.file.name));
      promise = null;
      $scope.file = null;
    };
  };

  return {
    scope: true,
    templateUrl: 'file/file-read.html',
    controller: controller
  };
};
