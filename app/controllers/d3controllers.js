features.controller('bubbleCtrl', ['$scope', function($scope) {
  //Data for circles
   $scope.bubbleData = [
   { "x_axis": 300, "y_axis": 100, "radius": 60, "color" : "red","image": "bubble","url":"http://adminambitgroup.github.io/projects/bubble_chart/"},
   { "x_axis": 120, "y_axis": 180, "radius": 60, "color" : "#fff","image": "pie","url":"https://https://edison-app.github.io/projects/dashboard/"},
   { "x_axis": 480, "y_axis": 180, "radius": 60, "color" : "blue","image": "map","url":"https://eddev.service-now.com/spa/maps.do" },
   { "x_axis": 300, "y_axis": 500, "radius": 60, "color" : "#fff","image": "tree","url":"https://edison-app.github.io/projects/dashboard/" },
   { "x_axis": 120, "y_axis": 380, "radius": 60, "color" : "#fff","image": "globe","url":"https://edison-app.github.io/projects/dashboard/" },
   { "x_axis": 480, "y_axis": 380, "radius": 60, "color" : "#fff","image":"scatter","url":"https://edison-app.github.io/projects/dashboard/" }]
}]);
