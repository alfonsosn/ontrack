app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        controller: 'MajorCtrl',
        templateUrl: 'js/home/home.html'
    });
});