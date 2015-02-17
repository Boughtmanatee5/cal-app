import calendarController from './calendar/calendar.js'

function setup($stateProvider) {
  $stateProvider
    .state('base', {
      url: '',
      controller: calendarController,
      templateUrl: '/app/calendar/calendar.html'
    });
  };

setup.$inject = ['$stateProvider']

var app = angular.module('calApp',['ngAnimate','ui.router','hmTouchEvents', 'templates'])
  .config(setup)
  .controller('calendarController', calendarController);