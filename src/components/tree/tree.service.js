(function() {
    'use strict';

    angular.module('app.tree')
    .service('TreeServ', TreeServ);

    /* @ngInject */
    function TreeServ($http) {
        /* jshint validthis: true */
        var self = this;
        var url = 'https://gist.githubusercontent.com/lyuehh/a5b20cf6e0cb7dba813b/raw/'+
        '591edd7ba039ba4bf3a91606400fc1f75ee55c8f/tree.json';

        self.get = function() {
            return $http.get(url);
        };
    }
})();

