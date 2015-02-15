import calendarController from './calendar/calendar.js'

var moduleName = 'calApp'

function config($stateProvider) {
  $stateProvider
    .state('base', {
      url: '',
      controller: calendarController
    });
  };

config.$inject = ['$stateProvider']

var app = angular.module(moduleName,['ngAnimate','ui.router','hmTouchEvents'])
  .config(config)
  .controller('calendarController', calendarController);