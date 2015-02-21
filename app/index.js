import register from './utils/register.js'
import CalendarController from './calendar/calendar.js'
import DateBlock from './dateblock/dateblock.js'

var app = angular.module('calApp',['ngAnimate','ui.router','hmTouchEvents', 'templates'])

/*@ngInject*/
function setup($stateProvider) {
  $stateProvider
    .state('base', {
      url: '',
      controller: CalendarController,
      templateUrl: '/app/calendar/calendar.html'
    });
  };

app.config(setup)

register('calApp').directive('dateBlock', DateBlock)