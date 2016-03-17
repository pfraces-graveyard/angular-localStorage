'use strict';

var ng = require('angular');

module.exports = ng.module('export', [
  require('ngstorage').name,
  require('../file/file.module')
])
  .directive('appExport', require('./export.directive'))
  .name;

