function config($stateProvider) {
  $stateProvider
    .state('base',{
      url: '/',
      controller: function () {
        console.log('base state');
      }
    });
  };

config.$inject = ['$stateProvider']

var moduleName = 'calApp'

var app = angular.module(moduleName,
  [
  'ngAnimate',
  'ui.router',
  'hmTouchEvents'
  ]
  ).config(config);

export default moduleName