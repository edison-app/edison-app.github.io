
app.directive('prHref', ['$location', '$window', function ($location, $window) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.attr('style', 'cursor:pointer');
            element.on('click', function () {
                // var prInput = angular.element(document.getElementById('pr-input')).value;
                var host = $location.host();
                var landingUrl = "pr_results.html?prAwardNum=" + attr.prHref;
                $window.location.href = landingUrl;
                // $window.location.search = attr.programHref;
            });
        }
    }
}]);

/*app.directive('yrDropHref', ['$location', '$window', function ($location, $window) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.attr('style', 'cursor:pointer');
            element.on('click', function () {
                        var host = $location.host();
                        var url = $location.url();
                       // var landingUrl = host + url + attr.yrDropHref;
                       var landingUrl = "pr_results.html?prAwardNum=";
                        $window.location.href = landingUrl;
            });
        }
    }
}]);*/
