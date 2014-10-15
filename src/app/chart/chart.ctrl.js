(function() {
    'use strict';

    angular.module('app.chart', ['app.highchart'])
    .controller('ChartCtrl', ChartCtrl);

    /* @ngInject */
    function ChartCtrl(DataServ, HighchartServ) {
        var vm = this;

        vm.lineConfig = HighchartServ.getLineConfig(DataServ.lineData(), {
            title: '天气变化',
            yAxisTitle: '温度(°C)',
            valueSuffix: '°C'
        });

        vm.barConfig = HighchartServ.getBarConfig(DataServ.barData(), {
            title: '世界人口'
        });


        vm.columnConfig = HighchartServ.getColumnConfig(DataServ.columnData(), {
            title: '月平均降水量',
            yAxisTitle: '降水量(mm)'
        });

        vm.pieConfig = HighchartServ.getPieConfig(DataServ.pieData(), {
            title: '浏览器市场份额'
        });
    }

})();
