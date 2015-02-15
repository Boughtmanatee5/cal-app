import calendarController from './calendar/calendar.js'

function setup($stateProvider) {
  $stateProvider
    .state('base', {
      url: '',
      controller: calendarController
    });
  };

config.$inject = ['$stateProvider']

var app = angular.module('calApp',['ngAnimate','ui.router','hmTouchEvents'])
  .config(setup)
  .controller('calendarController', calendarController);