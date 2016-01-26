'use strict';

var ng = require('angular');

var _import = ng.module('import', [
  require('ngstorage').name,
  require('../file/file.module')
]);

module.exports = _import
  .directive('appImport', require('./import.directive'))
  .name;
