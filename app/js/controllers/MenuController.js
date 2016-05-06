'use strict';
(function () {
    appetiteApp.controller('MenuController', MenuController);

    MenuController.$inject = ['$scope', '$routeParams', 'Restaurant', 'cart'];

    function MenuController($scope, $routeParams, Restaurant, cart) {

        Restaurant.Restaurant($routeParams.restaurantId).then(function (restaurantData) {
            $scope.restaurant = restaurantData;
        });
        $scope.cart = cart;

    };
})();