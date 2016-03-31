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
                        "background-color": "#ccc",
                        "series": [
                            { "values": StatService.rpArray },
                            { "values": StatService.avgArray }
                        ],
                        "scale-x": {
                            "label": {
                                "text": "Skin Opened"
                            },
                            "min-value": 1
                        },
                        "scale-y": {
                            "label": {
                                "text": "Skin Value"
                            },
                            "min-value": 1
                        }
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
                    console.log("YO")
                    zingchart.exec('graph', 'modify', {
                        graphid: 0,
                        object: 'title',
                        data: {
                            "series": [{
                                "values": StatService.rpArray,
                                "line-color": "blue",
                                "marker": { /* Marker object */
                                    "background-color": "blue",
                                    "border-color": "blue"
                                }
                            }, {
                                "values": StatService.avgArray,
                                "line-color": "red",
                                "marker": { /* Marker object */
                                    "background-color": "red",
                                    "border-color": "red"
                                }
                            }]
                        }
                    });
                }

                $('.chest-button').on('click', drawGraph);

            }
        }
    }
])
