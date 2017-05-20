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
.controller('ctrl',function($scope,$http,$timeout,$ionicActionSheet,$ionicLoading,$ionicPopup){
	$scope.arr=['列表一','列表二','列表三'],
	$scope.str='未选中';
//	下拉刷新
	$scope.doRefresh=function(){		
		$timeout(function(){
			$scope.arr=['改变啦','改变啦啦','改变啦啦啦','改变44啦啦'] 
			$scope.$broadcast('scroll.refreshComplete')	
		},1000)
	}
// 通过http请求的数据
   $scope.doRefresh = function() {
    $http.get('a.json')
     .success(function(newItems) {
     		console.log(newItems)
//     $scope.arr = newItems.1;
     })
//			$http({
//				method:'get',
//				url:'a.json'
//			}).success(function(data){
//				console.log(data)
//			})
     .finally(function() {
       // 停止-广播ion-refresher
       $scope.$broadcast('scroll.refreshComplete');
     });
};
	
	//上拉加载
	$scope.loadMore=function(){	
		$timeout(function(){	
			$scope.arr.push('列表一')
			$scope.$broadcast('scroll.infiniteScrollComplete')
		},2000)
	}
	//点击
 $scope.show=function(){
   var aa= $ionicActionSheet.show({   //要通过.Show的方法来对其进行设置
      buttons:[            //底部弹出的框框的按钮：因为可以为多个，所以用数组
      {'text':'弹出框'},   //规定按钮上的显示文字
      {'text':'弹出框2'}
      ],
      titleText:'标题',       //以text按钮结尾的都是按钮上显示的文字
      destructiveText:'删除',    //配删除的按钮
      cancelText:'取消',           //配置取消的按钮
//    取消事件
      cancel:function(){
      console.log('取消了')
      },
//    删除事件
      destructive:function(){
        console.log(1)
      },
//    按钮事件,可通过index下表写不同事件
     buttonClicked: function(index) {    //inde为当前点击的下标
              console.log(index)
            }
    })
// 自动关闭弹窗
   $timeout(function(){
   		aa()
   },5000)
  }
	//选择事件
	$scope.checking=function(check){
	if(check){
		$scope.str='选中';
	}else{
		$scope.str='未选中';
	}
}
	//长按 双选
		$scope.longan=function(){
			alert('长按')
		}
		$scope.doubt=function(){
			alert('双击')
		}
		//加载
		$scope.loads=function(){
		$ionicLoading.show()
		    	$timeout(function(){
		//  	关闭加载动画
		      		$ionicLoading.hide()
		    },1000)
		}
		//  警告
			$scope.Alert=function(){
	  $ionicPopup.show({
	    template:'<input type="text" ng-model="anhao" />',
	    title:'请输入暗号',
	    subTitle:'一定要输入暗号',
	    buttons:[
	      {text:'取消'},
	      {text:'确定',type:'button-positive',onTap:function(){
	        
	      }},
	    ]
	  })
	}
	$scope.Comit=function(){
	  $ionicPopup.confirm({
	    title:'请确认以下信息',
	    template:'你确定要给我一百万人民币？'
	  }).then(function(res){
	    if (res) {
	      alert('谢谢您')
	    }else{
	      alert('您反悔了')
	    };
	  })
	}
	$scope.Jinggao=function(){
	  $ionicPopup.alert({
	    title:"警告",
	    template:"此物有毒，不可碰"
	  }).then(function(res){
	    alert('知道了')
	  })
	}
		
})
.constant('$ionicLoadingConfig', {
//可以是文字，也可是icon图标
  template:'<ion-spinner icon="lines" class="spinner-calm"></ion-spinner>'
})
