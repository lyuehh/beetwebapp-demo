(function() {
    'use strict';

    angular.module('app.treedemo', ['app.tree'])
    .controller('TreeDemoCtrl', TreeDemoCtrl);

    /* @ngInject */
    function TreeDemoCtrl($scope) {
        var vm = this;

        // currentNode变化了
        $scope.$on('nodeChanged', function(e, val) {
            vm.treeData = val;
        });

    }


})();
