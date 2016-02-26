simulation.directive('graphGenerator', [
    'StatService',
    function(StatService) {
        'use strict';

        console.log("### Graph Generator Directive");

        return {
            restrict: 'E',
            scope: {},
            template: "<div id='graph'></div>",
            link: function(scope, element, attrs) {
            	// Graph Data
                var graphData = {
                        "type": "line",
                        "plot": {
                            "aspect": "spline"
                        },
                        "series": [
                            { "values": StatService.rpArray },
                            { "values": StatService.avgArray }
                        ]
                    }
                // Render Graph
                zingchart.render({
                    id: 'graph',
                    data: graphData,
                    height: 500,
                    width: 1000
                });
                // Update Graph
                function drawGraph() {
                    zingchart.exec('graph', 'modify', {
                        graphid: 0,
                        object: 'title',
                        data: {
                            "series": [
                                { "values": StatService.rpArray },
                                { "values": StatService.avgArray }
                            ]
                        }
                    });
                }

                $('.chest-button').on('click', drawGraph);

            }
        }
    }
])
