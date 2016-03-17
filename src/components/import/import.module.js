'use strict';

var ng = require('angular');

module.exports = ng.module('import', [
  require('ngstorage').name,
  require('../file/file.module')
])
  .directive('appImport', require('./import.directive'))
  .name;
