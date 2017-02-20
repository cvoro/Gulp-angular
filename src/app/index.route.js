(function() {
  'use strict';

  angular
    .module('angularGulp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
      $stateProvider
      .state('about',{
          url: '/about.html',
          templateUrl: 'app/about/about.html',
          controller: 'AboutController',
          controllerAs: 'about'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
