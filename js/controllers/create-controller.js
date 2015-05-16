angular.module('mdmUI.controllers')
.controller('create',
    function($scope, $http) {

    	$scope.fkId=1;
    	$scope.indexId=1;
    	$scope.columnId=1;
    	
    	$scope.tableNames=["A","B"]
    	$scope.colNames={"A":["a","b"],"B":["c","d"]}
    	
    	
    	
});
