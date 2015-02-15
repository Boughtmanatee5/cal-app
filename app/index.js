import calendarController from './calendar/calendar.js'

var moduleName = 'calApp'

function setup($stateProvider) {
  $stateProvider
    .state('base', {
      url: '',
      controller: calendarController
    });
  };

config.$inject = ['$stateProvider']

var app = angular.module(moduleName,['ngAnimate','ui.router','hmTouchEvents'])
  .config(setup)
  .controller('calendarController', calendarController);