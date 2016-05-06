'use strict';
(function () {
    appetiteApp.controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', '$location'];

    function NavbarController($scope, $location) {

        $scope.routeIs = function (routeName) {
            return $location.path() === routeName;
        };

    };
})();