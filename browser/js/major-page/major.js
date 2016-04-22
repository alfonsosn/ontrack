app.config(function ($stateProvider) {
    $stateProvider.state('mapsDetail', {
        url: '/maps/:majorId/',
        controller: 'mapsCtrl',
        templateUrl: 'js/major-page/major.html',
        resolve: {
            major: function($stateParams){
                return $stateParams.majorId
            }
        }
    })
});