app.controller('MajorCtrl', function($scope, majors_factory, $state){
	$scope.majors = majors_factory.getMajors();
})