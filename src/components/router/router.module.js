'use strict';

var ng = require('angular');

var router = ng.module('router', [
  require('angular-ui-router'),
  require('../import/import.module'),
  require('../export/export.module')
]);

module.exports = router
  .directive('appRouter', require('./router.directive'))
  .constant('ROUTES', require('./router.config'))
  .config(require('./router'))
  .name;
