features.directive('hcLineChart', ['$location', function ($location) {
    //camel cased directive name
    //in your HTML, this will be named as bars-chart

    //explicitly creating a directive definition variable
    //this may look verbose but is good for clarification purposes
    //in real life you'd want to simply return the object {...}
    var lineGroupObj = {
        restrict: 'E',
        replace: false,
        scope: { data: '=chartData' },
        link: function (scope, element, attrs) {
            /*   var params = {};
               if ($location.search) {
                   var parts = $location.search.substring(1).split("&");
   
                   for (var i = 0; i < parts.length; i++) {
                       var nv = parts[i].split('=');
                       if (!nv[0]) continue;
                       params[nv[0]] = nv[1] || true;
                   }
               } */

            function buildChart() {

                // Use commas as the thousands separator in numbers...
                Highcharts.setOptions({
                    lang: {
                        thousandsSep: ','
                    }
                });
                var graph = new Highcharts.Chart(element[0], {
                    chart: {
                        zoomType: 'x',
                        width: 720,
                        height: 445,
                    },
                    title: {
                        text: 'Grant Funds Execution'
                    },
                    subtitle: {
                        text: document.ontouchstart === undefined ?
                            'Click and drag in the plot area to zoom' : 'Pinch the chart to zoom in'
                    },
                    credits: {
                        enabled: false
                    },
                    xAxis: {
                        type: 'datetime',
                        dateTimeLabelFormats: {
                            day: '%b \'%y'
                        }

                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Total Funds Available'
                        }

                    },
                    legend: {
                        enabled: true
                    },
                    tooltip: {
                        //pointFormat: '<b>{series.name}</b><br/>{point.x:%d%b%Y}: 	$ {point.y: 1f}   '
                        pointFormat: '<b>{' + scope.name + '}</b><br/>$ {point.y:,.0f}   '
                    },
                    series: scope.data
                });
                graph.redraw();
                $('#nav-btn').click(function () {
                    graph.setSize(900, 445);
                });
            }
            buildChart();
        }
    };
    return lineGroupObj;
}]);

features.directive('hcBarChart', function () {

    var barGroupObj = {
        restrict: 'E',
        replace: false,
        scope: { data: '=barData' },
        link: function (scope, element, attrs) {
            function buildBarChart() {
                var chart = new Highcharts.Chart(element[0], {
                    chart: {
                        type: 'column',
                        width: 340,
                        height: 477
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: 'Grant Length Histogram'
                    },

                    xAxis: {
                        type: 'category',
                        labels: {
                            rotation: -45,
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Number of Grants'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: 'Grants: <b>{point.y} </b>'
                    },
                    series: [{
                        name: 'Population',
                        data: scope.data
                    }]
                });
                $('#nav-btn').click(function () {
                    chart.setSize(420, 477);
                });
            }
            buildBarChart();
        }
    };
    return barGroupObj;
});
