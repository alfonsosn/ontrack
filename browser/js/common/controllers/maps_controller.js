app.controller('mapsCtrl', function($scope, maps_factory, majors_factory, major) {
	$scope.major = majors_factory.findMajor(major)
	$scope.map = maps_factory.getMap(major);
	$scope.years = maps_factory.getYears();

	$scope.seeMap = function(year){
		$scope.maps = $scope.map.filter(function(entry){
			return entry.year == year || entry.year == year.toLowerCase()
		})
		$scope.fall = $scope.maps.filter(function(curr){
			return curr.semester == "Fall" || curr.semester == "fall";
		})[0].classes
		$scope.spring = $scope.maps.filter(function(curr){
			return curr.semester == "Spring" || curr.semester == "spring";
		})[0].classes
	}
})