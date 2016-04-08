app.config(function ($stateProvider) {
    $stateProvider.state('major', {
        url: '/major',
        controller: 'mapsCtrl',
        templateUrl: 'js/major-page/major.html'
    });
});