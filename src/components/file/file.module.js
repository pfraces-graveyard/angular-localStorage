'use strict';

var ng = require('angular');

module.exports = ng.module('file', [])
  .factory('createElement', require('./create-element.service'))
  .factory('fileReader', require('./file-reader.service'))
  .factory('fileRead', require('./file-read.service'))
  .factory('fileWrite', require('./file-write.service'))
  .directive('fileOnChange', require('./file-on-change.directive'))
  .directive('fileRead', require('./file-read.directive'))
  .name;
