(function() {
    'use strict';

    angular.module('app.highchart', [])
    .directive('beetHighcharts', beetHighcharts);

    function beetHighcharts() {
        var link = function($scope, $element, $attrs) {
            $element.highcharts($scope.config);
        };
        return {
            link: link,
            restrict: 'A',
            scope: {
                config: '='
            }
        };
    }
})();

