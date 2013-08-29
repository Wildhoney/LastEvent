(function($w) {

    "use strict";

    $w.lastEvent.controller('SearchController', ['$scope', '$http', function MapController($scope, $http) {

        /**
         * @property place
         * @type {Array}
         * @default ''
         */
        $scope.place = '';

        /**
         * @method find
         * @return {void}
         */
        $scope.find = function find(place) {
            $http('api/backend', place);
            return $scope.place;
        }

    }]);

})(window);