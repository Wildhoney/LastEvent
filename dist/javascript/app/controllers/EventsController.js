(function($w) {

    "use strict";

    $w.lastEvent.controller('EventsController', ['$scope', function MapController($scope) {

        /**
         * @property events
         * @type {Array}
         * @default []
         */
        $scope.events = [{}, {}, {}];

    }]);

})(window);