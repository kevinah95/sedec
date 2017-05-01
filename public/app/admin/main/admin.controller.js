(function() {
    'use strict';
    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    function AdminController($scope, $location, $auth) {
        var vm = this;
        vm.users = users;

        function users() {
            $location.path('/admin/signup');
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        };

    }
})();