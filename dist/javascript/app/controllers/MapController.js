(function($w) {

    "use strict";

    $w.lastEvent.controller('MapController', ['$scope', '$lastEvent', function MapController($scope, $lastEvent) {

        /**
         * @property apiKey
         * @type {String}
         */
        $scope.apiKey = 'd4fc77ea4a63471cab2423e66626cbb6';

        $lastEvent.noop();

    }]);

})(window);