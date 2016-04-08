app.controller('mapsCtrl', function($scope, maps){
	scope.semester = maps.getSemesters();
	$scope.map = maps.getMap();
})