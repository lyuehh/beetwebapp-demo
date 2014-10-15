(function() {
    'use strict';

    angular.module('app.tree', ['angularTreeview'])
    .controller('TreeCtrl', TreeCtrl);

    /* @ngInject */
    function TreeCtrl(TreeServ, $scope) {
        var vm = this;
        TreeServ.get().success(function(data) {
            var treeData = data.jtree;
            var firstNode = treeData[0];
            firstNode.selected = 'selected';

            // debugger;
            vm.treeData = treeData;
            $scope.tree.currentNode = firstNode;

            $scope.$watch('tree.currentNode.text', function(val, old) {
                if (val) {
                    $scope.$emit('nodeChanged', $scope.tree.currentNode);
                }
            });

        });

    }


})();
