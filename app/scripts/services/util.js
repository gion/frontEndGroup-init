"use strict";

app.factory('util', function() {
    var util = {};

    util.safeApply = function() {
        var $scope, fn, force = false;
        if(arguments.length == 1) {
            var arg = arguments[0];
            if(typeof arg == 'function') {
                fn = arg;
            }
            else {
                $scope = arg;
            }
        }
        else {
            $scope = arguments[0];
            fn = arguments[1];
            if(arguments.length == 3) {
                force = !!arguments[2];
            }
        }
        $scope = $scope || this;
        fn = fn || function() { };
        if(force || !$scope.$$phase) {
            $scope.$apply ? $scope.$apply(fn) : $scope.apply(fn);
        }
        else {
            fn();
        }
    };

    return util;
});