(function() {
    'use strict';

    angular.module('app.highchart')
    .service('HighchartServ', HighchartServ);

    /* @ngInject */
    function HighchartServ() {
        /* jshint validthis: true */
        var self = this;

        /**
         * reuturn line config for highcharts
         * @param {Object} data the data obj, {series: {}, categories: []}
         * @param {Object} high the highchart config
         * @return {Object} an obj, for highcharts(data) use
         *
         */
        /* validthis: true */
        self.getLineConfig = function(data, option) {
            return {
                title: {
                    text: option.title || '',
                    x: -20 //center
                },
                subtitle: {
                    text:option.subtitle || '',
                    x: -20
                },
                xAxis: {
                    categories: data.categories
                },
                yAxis: {
                    title: {
                        text: option.yAxisTitle || ''
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    valueSuffix: option.valueSuffix || ''
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: data.series
            };
        };


        /**
         * reuturn bar config for highcharts
         * @param {Object} data the data obj, {series: {}, categories: []}
         * @param {Object} high the highchart config
         * @return {Object} an obj, for highcharts(data) use
         *
         */
        self.getBarConfig = function(data, option) {
            return {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: option.title || ''
                },
                subtitle: {
                    text: option.title || ''
                },
                xAxis: {
                    categories: data.categories,
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: option.yAxisTitle || '',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' millions'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 100,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: '#FFFFFF',
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: data.series
            };
        };

        /**
         * reuturn column config for highcharts
         * @param {Object} data the data obj, {series: {}, categories: []}
         * @param {Object} high the highchart config
         * @return {Object} an obj, for highcharts(data) use
         *
         */
        self.getColumnConfig = function(data, option) {
            return {
                chart: {
                    type: 'column'
                },
                title: {
                    text: option.title || ''
                },
                subtitle: {
                    text: option.subtitle || ''
                },
                xAxis: {
                    categories: data.categories
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: option.yAxisTitle
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span>',
                    pointFormat: '' +
                        '',
                    footerFormat: '<table><tbody><tr><td style="color:{series.color};padding:0">' +
                        '{series.name}: </td><td style="padding:0"><b>{point.y:.1f} mm</b></td></tr></tbody></table>',
                    shared: true,
                    useHTML: true
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: data.series
            };
        };

        /**
         * reuturn pie config for highcharts
         * @param {Object} data the data obj, {series: {}, categories: []}
         * @param {Object} high the highchart config
         * @return {Object} an obj, for highcharts(data) use
         *
         */
        self.getPieConfig = function(data, option) {
            return {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: option.title
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                credits: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            color: '#000000',
                            connectorColor: '#000000',
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                        }
                    }
                },
                series: data.series
            };
        };
    }
})();
