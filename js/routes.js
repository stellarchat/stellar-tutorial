'use strict';

angular.module('MyApp', ['ui.bootstrap', 'ui.router', 'ngCookies']);

angular.module('MyApp').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
		$stateProvider
			.state('index', {
				url : '/',
				templateUrl : 'templates/home.html'
			}).state('create', {
				url : '/create',
				templateUrl : 'templates/create.html'
			}).state('trust', {
				url : '/trust',
				templateUrl : 'templates/trust.html'
			}).state('taobao', {
				url : '/taobao',
				templateUrl : 'templates/taobao.html'
			}).state('withdraw', {
				url : '/withdraw',
				templateUrl : 'templates/withdraw.html'
			}).state('trade', {
				url : '/trade',
				templateUrl : 'templates/trade.html'
			});
    }
]);

angular.module('MyApp').run(function($rootScope) {
	$rootScope.$on('$stateChangeSuccess', function() {
		console.log('$stateChangeSuccess');
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
});