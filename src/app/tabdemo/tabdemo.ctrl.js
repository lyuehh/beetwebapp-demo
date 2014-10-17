(function() {
    'use strict';

    angular.module('app.tabdemo', ['app.tab'])
    .controller('TabDemoCtrl', TabDemoCtrl);

    /* @ngInject */
    function TabDemoCtrl($scope) {
        var vm = this;

        vm.select = function(index) {
            $scope.$broadcast('tabChange', index);
        };

    }


})();
