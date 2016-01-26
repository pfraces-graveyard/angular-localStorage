'use strict';

module.exports = function ($q, fileReader) {
  var fileRead = function (file) {
    var deferred = $q.defer();
    var reader = fileReader();

    reader.onload = function (event) {
      deferred.resolve(event.target.result);
    };

    reader.readAsDataURL(file);
    return deferred.promise;
  };

  return fileRead;
};
