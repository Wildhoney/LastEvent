/**
 * @directive map
 * @restrict E
 * @return {Object}
 */
lastEvent.directive('map', ['$rootScope', function mapDirective($rootScope) {

    return { restrict: 'E', link: function linkFn($scope, $element) {

        var map = L.map($element[0]).setView([51.505, -0.09], 13);

        L.tileLayer('http://{s}.tile.cloudmade.com/' + $scope.apiKey + '/997/256/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
            maxZoom: 18
        }).addTo(map);

    }};

}]);