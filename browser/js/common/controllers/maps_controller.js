app.controller('mapsCtrl', function($scope, maps){
	$scope.checker = false
	$scope.years = maps.getYears();

	$scope.seeMap = function(year){
		$scope.maps = maps.getMap(year);
		$scope.fall = $scope.maps.filter(function(curr){
			return curr.semester === "fall";
		})
		$scope.spring = $scope.maps.filter(function(curr){
			return curr.semester === "spring";
		})

		$scope.fall = $scope.fall["0"].classes
		$scope.spring = $scope.spring["0"].classes
		$scope.checker = true;
	}
})