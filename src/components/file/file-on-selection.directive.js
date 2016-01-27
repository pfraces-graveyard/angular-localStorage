'use strict';

module.exports = function ($parse) {
  var link = function (scope, element, attrs) {
    var callback = $parse(attrs.fileOnSelection)(scope);

    element.on('change', function (event) {
      scope.$apply(function () {
        callback(event.target.files);
      });
    });
  };

  return {
    link: link
  };
};

