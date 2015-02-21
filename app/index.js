import register from './utils/register.js'
import CalendarController from './calendar/calendar.js'
import dateBlock from './dateblock/dateblock.js'

function setup($stateProvider) {
  $stateProvider
    .state('base', {
      url: '',
      controller: CalendarController,
      templateUrl: '/app/calendar/calendar.html'
    });
  };

setup.$inject = ['$stateProvider']

// console.log('DateBlock', new DateBlock())

var app = angular.module('calApp',['ngAnimate','ui.router','hmTouchEvents', 'templates'])
  .config(setup)
  // .controller('calendarController', calendarController)
  // .directive('dateBlock', DateBlock);

register('calApp').directive('dateBlock', dateBlock)