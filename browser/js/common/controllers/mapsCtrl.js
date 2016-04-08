app.controller('mapsCtrl', function($scope, maps){
	$scope.years = maps.getYears();
	$scope.seeMap = function(year){
		$scope.maps = maps.getMap(year);
		$scope.fall = $scope.maps.filter(function(curr){
			return curr.semester == "fall";
		})
		$scope.spring = $scope.maps.filter(function(curr){
			return curr.semester == "spring";
		})
	}
})