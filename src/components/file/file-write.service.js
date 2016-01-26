'use strict';

module.exports = function (createElement) {
  var link = createElement('a');

  var fileWrite = function (filename, content) {
    link.download = filename;
    link.href = content;
    link.click();
  };

  return fileWrite;
};
