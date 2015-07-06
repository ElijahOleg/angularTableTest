var App = angular.module('table', []);

App.factory("tableService", function($http){
	return{
		getContents: function(){
			return $http.get('./contents.json')
		},
		postContents: function(newPost){
			return $http.post('./contents.json', newPost)
		}
	};
});
App.controller('tableCtrl', function($scope, tableService) {
	tableService.getContents().success(function(data){
		console.log(data);
		$scope.table = data;
	}).catch(function(error){
		console.error(error);
	});
	console.log($scope.table);
});

App.controller('addRow', function(scope, tableService){
	$scope.postContents = function(){
		tableService.postContents($scope.newRow)
	}.success(function(data){
		console.log(data);
		$scope.table = data;
	}).catch(function(error){
		console.error(error);
	});
});
