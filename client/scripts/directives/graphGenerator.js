simulation.directive('graphGenerator', [
    'StatService',
    function(StatService) {
        'use strict';

        console.log("### Graph Generator Directive");

        return {
            restrict: 'E',
            scope: {},
            template: "<div id='graph' style='width:100%; height:400px;''></div>",
            link: function(scope, element, attrs) {
                var avgArray = [];
                drawGraph();

                function drawGraph() {
                	var statArray = StatService.rpArray.slice();
                	var sum = 0;
                	for (var i = 0; i < statArray.length; i++) {
                		sum += statArray[i];
                	}
                	var avg = sum / statArray.length;
                	avgArray.push(avg);
                	console.log('AVG', avgArray)
                    $('#graph').highcharts({
                        chart: {
                            type: 'line'
                        },
                        title: {
                            text: 'Mystery Gift'
                        },
                        plotOptions: {
                                    series: {
                                        animation: false
                                    }
                                },
                        yAxis: {
                            title: {
                                text: 'RP Value'
                            }
                        },
                        series: [{
                            name: 'Average',
                            data: StatService.avgArray
                        }, {
                            name: 'Gift',
                            data: StatService.rpArray
                        }]
                    });
                }

                $('.chest-button').on('click', drawGraph);

            }
        }
    }
])
