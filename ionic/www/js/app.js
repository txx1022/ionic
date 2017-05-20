// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
	 $stateProvider
	 .state('tab',{
	 	  url:'/tab',
	 	  templateUrl:'component/tab.html'
	 })
			 .state('tab.home',{  //在当前状态下下加载home模块
			 	url:'/home',
			 	views:{
			 		'tab-home':{   //通过名字的匹配帮视图容器的内容加载过来
			 			  templateUrl:'component/home.html',
			 			  controller:'ctrl'
			 		}
			 	}
			 })
			 .state('tab.detail',{
			 	url:'/home/:id',
			 	views:{
			 		'tab-home':{
			 			templateUrl:'component/detail.html',
			 			controller:'ctr2'
			 		}
			 	}
			 })
			 .state('tab.first',{
			 	url:'/first',
			 	views:{
			 		'tab-home':{
			 			  templateUrl:'component/first.html'
			 		}
			 	}
			 })
			 .state('tab.two',{
			 	url:'/two',
			 	views:{
			 		'tab-home':{
			 			  templateUrl:'component/two.html'
			 		}
			 	}
			 })
			 .state('tab.find',{
			 	url:'/find',
			 	views:{
			 		 'tab-find':{
			 		    	templateUrl:'component/find.html'
			 		 }
			 	}
			 })
			 .state('tab.order',{
			 	url:'/order',
			 	views:{
			 		'tab-order':{
			 			templateUrl:'component/order.html'
			 		}
			 	}
			 })
			 .state('tab.my',{
			 	url:'/my',
			 	views:{
			 		'tab-my':{
			 			templateUrl:'component/my.html'
			 		}
			 	}
			 })
			 
			 $urlRouterProvider.otherwise('/tab/home')
})
.controller('ctrl',function($scope,$http){
	$http({
		methods:'get',
		url:'json/detail.json'
	}).success(function(data){
		$scope.arr=data
	})
})
.controller('ctr2',function($scope,$http,$stateParams){
	$http({
		methods:'get',
		url:'json/detail.json'
	}).success(function(data){
		$scope.str=data[$stateParams.id]
	})
})
