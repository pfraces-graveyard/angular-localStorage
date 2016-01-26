'use strict';

var ng = require('angular');

module.exports = ng.module('export', [])
  .directive('appExport', require('./export.directive'))
  .name;

