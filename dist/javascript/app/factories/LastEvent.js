(function($w) {

    "use strict";

    /**
     * @factory $lastEvent
     * @return {Object}
     */
    $w.lastEvent.factory('$lastEvent', function() {

        var factory = {};

        /**
         * @method noop
         * Do nothing!
         */
        factory.noop = function noop() {

        };

        return factory;

    });

})(window);