'use strict'

var app = angular.module('myApp',['ui.bootstrap']);

// Application Controller
app.controller('myCtrl', function($scope){

    $scope.tabs = [{ active: true,  disable: false }, 
                   { active: false, disable: true }, 
                   { active: false, disable: true}];

  	$scope.next = function(index){
      $scope.tabs[index].active = true;
      $scope.tabs[index].disable = false;
    }

    $scope.user = {};
    $scope.user.firstName = "Michael";
    $scope.user.lastName = "Jordan";
    $scope.user.email = "michaeljordan@gmail.com";
    $scope.user.phone = "9037756845";

	  var today = new Date();
	  $scope.minDateDepart = today;
    $scope.user.departdate = today;
    $scope.user.returndate = today;

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    $scope.format = 'longDate';

    $scope.statusDepart = {
      opened: false
    };

    $scope.statusReturn = {
      opened: false
    };

    $scope.openDepart = function($event) {
      $scope.statusDepart.opened = true;
    };

    $scope.openReturn = function($event) {
      $scope.statusReturn.opened = true;
    };

    $scope.clearReturn = function() {
      $scope.user.returndate = "";
    };
});