'use strict';

/**
 * @ngdoc function
 * @name angularOracleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularOracleApp
 */
angular.module('angularOracleApp')
  .controller('MainCtrl', function ($scope,$http) {
  	$scope.submitShow=false;
    $scope.search=function(){
    	$scope.submitShow=false;
    	$scope.result={};
    	console.log('the searchText is ',$scope.searchText);
    	console.log('the serach by ',$scope.searchBy);
    	if(!$scope.searchText){
    		$scope.searchText="";
    	}
    	$http.get('http://10.154.89.51:8080/CAAS/service/user/'+$scope.searchText).then(function(success){
    		console.log('the success',success);
    		if(success.data.length>0){
    			$scope.result=success.data[0];
    			//$scope.result.agent=[];
    			$scope.result.agent = $scope.result.commAgent.replace(/~/g,"  \n\n");
    		}else{
    			$scope.result=success.data;
    			//$scope.result.agent=[];
    			$scope.result.agent = $scope.result.commAgent.replace(/~/g,"\n");
    		//$scope.result.agent=$scope.result.agent.split("\n");
    		}
    		
    	
    		console.log('the res value',$scope.result.agent);
    		console.log('the result ',$scope.result);
    	},function(error){
    		console.log('th eerror',error);
    	});
    }
    $scope.submit=function(){
    	$scope.submitShow=true;

    }
  });
