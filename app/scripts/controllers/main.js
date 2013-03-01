'use strict';

app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Testacular'
    ];
  });

app.controller('ThanksCtrl', function ($scope, $routeParams) {
  $scope.name = $routeParams.name || 'guest';
});

app.controller('UsersCtrl', function ($scope, $http) {
  $http.get('services/getUser.php').success(function(data){
    $scope.users = data;
  });
});

app.controller('StaticUserCtrl', function ($scope, $http, $routeParams) {
  $http.get('services/getUser.php?id=' + $routeParams.id).success(function(data){
    $scope.user = data[0];
  });
});


app.controller('UserCtrl', ['$scope', 'util', '$timeout', '$http', function ($scope, util, $timeout, $http) {

  	$scope.hint = false;

  	$scope.showHint = function(){
      util.safeApply($scope, function(){
  		  $scope.hint = true;
      });
  		
  		if(this.t)
  			$timeout.cancel(this.t);

  		this.t = $timeout(function(){
  			$scope.hint = false;
  		}, 4200, true);
  	};

    var helloWorldCode = [
      '// declare a variable that holds the greeting message',
      'var helloWorld = "hello world!";',
      '',
      '// output that message',
      'alert(helloWorld);'
    ];
    var user = {
      helloWorld : helloWorldCode.join("\n")
    };

  	$scope.submit = function(){
  		window.$.post("services/addUser.php",{user:$scope.user}).success(function(data, status, headers, config) {
        console.log('success', arguments);
        window.location.hash = '/thanks/' + encodeURIComponent($scope.user.name);
      }).error(function(data, status, headers, config) {
        console.log('fail', arguments);
    //      $scope.status = status;
      });
  	};

    $scope.showHint();
    $scope.user = user;
}]);
