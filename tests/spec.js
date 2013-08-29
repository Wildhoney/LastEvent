describe('LastEvent', function() {

    beforeEach(module('lastEventApp'));

    var getController, scope, rootScope;

    beforeEach(inject(function($controller, $rootScope) {

        rootScope       = $rootScope;
        getController   = function getController(name) {
            scope = $rootScope.$new();
            $controller(name + 'Controller', { $scope: scope });
            return scope;
        };

    }));

    it('Can create an Angular module;', function() {
        expect(angular.module('lastEventApp')).toBeDefined();
    });

    describe('EventsController', function() {

        it('Can define an empty `events` array for the events enumerable;', function() {
            var scope = getController('Events');
            expect(scope.events).toBeDefined();
            expect(Array.isArray(scope.events)).toEqual(true);
        });

    });

    describe('MapController', function() {

        it('Can define the API key in `apiKey`;', function() {
            var scope = getController('Map');
            expect(scope.apiKey).toBeDefined();
        });

    });

    describe('SearchController', function() {

        it('Can initialise the `place` as an empty string;', function() {
            var scope = getController('Search');
            expect(scope.place).toBeDefined();
            expect(typeof scope.place).toEqual('string');
        });

        it('Can define the `find` method to invoke the $http service;', function() {
            var scope = getController('Search');
            expect(scope.find).toBeDefined();
            expect(typeof scope.find).toEqual('function');
        });

    });

});