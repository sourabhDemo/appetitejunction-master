'use strict';
(function () {
    appetiteApp.controller('ThankYouController',ThankYouController);
    
    ThankYouController.$inject=['$scope', '$routeParams'];

    function ThankYouController($scope, $routeParams) {
        $scope.orderId = $routeParams.orderId;
    };

})();