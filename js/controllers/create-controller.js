angular.module('mdmUI.controllers')
.controller('create',
    function($scope, $http) {

    	$scope.colNames=[]
    	$scope.relationships=[]
    	$scope.indexes=[]
    	$scope.tableNames=["A","B"]
    	$scope.fkId=1;
    	$scope.indexId=1;
    	$scope.columnId=1;
});
