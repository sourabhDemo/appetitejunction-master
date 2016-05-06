'use strict';
(function () {
    appetiteApp.factory('Restaurant', Restaurant);

    Restaurant.$inject = ['$http'];

    function Restaurant($http) {
        var factory = {
            RestaurantList: getRestaurantList,
            Restaurant: getRestaurant
        };

        return factory;

        function getRestaurantList() {
            return $http.get('data/restaurants.json').then(function (response) {
                return response.data;
            });
        };

        function getRestaurant(id) {
            return $http.get('data/restaurants.json').then(function (response) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == id)
                        return data[i];
                }
            });
        };
    };
})();