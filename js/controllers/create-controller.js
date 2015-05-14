angular.module('mdmUI.controllers')
.controller('create',
    function($scope, $http) {

    	$scope.columns=[]
    	$scope.relationships=[]
    	$scope.indexes=[]
    	$scope.tableNames=["A","B","C"]
});
