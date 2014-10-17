(function() {
    'use strict';

    angular.module('app.tab', [])
    .directive('beetTab', beetTab)
    .directive('beetPane', beetPane);

    function beetTab() {
        var controller = function($scope) {
            var panes = $scope.panes = [];
            $scope.select = function(pane) {
                angular.forEach(panes, function(p) {
                    p.selected = false;
                });
                pane.selected = true;
            };
            this.addPane = function(pane) {
                if (panes.length === 0) {
                    $scope.select(pane);
                }
                panes.push(pane);
            };

            // 切换 tab
            $scope.$on('tabChange', function(e, val) {
                angular.forEach(panes, function(p) {
                    p.selected = false;
                });
                panes[val] && (panes[val].selected = true);
            });
        };

        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: controller,
            templateUrl: 'components/tab/tab.html'
        };
    }

    function beetPane() {
        var link = function(scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        };
        return {
            require: '^beetTab',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            link: link,
            templateUrl: 'components/tab/pane.html'
        };
    }
})();

