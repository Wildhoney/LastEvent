/**
 * @factory $lastEvent
 * @return {Object}
 */
lastEvent.factory('$lastEvent', function() {

    var factory = {};

    /**
     * @method noop
     * Do nothing!
     */
    factory.noop = function noop() {

    };

    return factory;

});