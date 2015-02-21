import register from './utils/register.js'
import CalendarController from './calendar/calendar.js'
import DateBlock from './dateblock/dateblock.js'

var app = angular.module('calApp',['ngAnimate','ui.router','hmTouchEvents', 'templates', 'gapi'])

/*@ngInject*/
function setup($stateProvider) {
  $stateProvider
    .state('base', {
      url: '',
      controller: CalendarController,
      templateUrl: '/app/calendar/calendar.html'
    });
  };

app.value('GoogleApp', {
  apiKey: 'AIzaSyDRL7fDkaZMx-xXphTBJEHP73FPxd-ntuk',
  clientId: '714641157063-2tfe17k3nmdrv1nl2v3rjpkkb0k04eko.apps.googleusercontent.com',
  scopes: ['https://www.googleapis.com/auth/']
});
app.config(setup)

register('calApp').directive('dateBlock', DateBlock)