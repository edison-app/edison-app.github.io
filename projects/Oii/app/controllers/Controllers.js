app.controller('prHttpCtrl', ['$scope', function ($scope) {
    $scope.prAwardNum = "PR Award Number";
}]);

app.controller('dragDropCtrl', ['$scope', '$window', '$localStorage', function ($scope, $localStorage) {

    $scope.models = {
        selected: null,
        lists: {
            "Select": [],
            "Drop": []
        }
    };

    // Generate initial model
    for (var i = 1; i <= 10; ++i) {

        $scope.models.lists.Select.push({
            label: "Code A: " + i
        });
        // $scope.models.lists.Drop.push({ label: "Code B" + i });
        $scope.models.lists.Drop.push();
    }

    // Model to JSON for demo purpose
    $scope.$watch('models.lists.Drop', function (model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

    $scope.saveLocStor = function () {
        $localStorage.savedLocStorage = $scope.models.lists.Drop;
        console.log($localStorage.savedLocStorage)
    };
    $scope.loadLocStor = function () {
        $scope.locStorage = $localStorage.savedLocStorage;
    }

    $scope.deleteLocStor = function () {
        $scope.delLocStorage = delete $localStorage.savedLocStorage;
    }


}]);

app.controller('yrDropCtrl', ['$scope', '$window', '$location', function ($scope, $window, $location) {
    $scope.years = [2016, 2015, 2014, 2013, 2012, 2011, 2010];
    $scope.addYrUrl = function (event, addYearVar) {
        event.preventDefault();

        var result = document.getElementsByClassName("addyear");
        var newHref = angular.element(result).html();
        var absUrl = $location.absUrl();
        var landingUrl = absUrl + '&' + 'prAwardYr=' + addYearVar;
        $window.location.href = landingUrl;

    };
}]);