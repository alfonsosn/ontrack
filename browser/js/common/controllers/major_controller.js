app.controller('MajorCtrl', function($scope, majors, $state){
	$scope.majors = majors.getMajors();
	$scope.seeMap = function() {
		$state.go('major')
	}
})