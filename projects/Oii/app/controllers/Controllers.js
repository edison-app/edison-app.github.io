app.controller('validationCtrl', ['$scope', '$attrs', '$window', '$location', function ($scope, $attrs, $window, $location) {
    $scope.prAwdInput="test";
    $scope.submitForm = function () {
        if ($scope.awdForm.$valid) {
            var butId = document.querySelector('#pr-input');
            var newHref =angular.element(butId).attr('pr-href');
            var landingUrl = "pr_results.html?prAwardNum=" + newHref;
            $window.location.href = landingUrl;
        } else { 
            var messContainer = document.querySelector('#messages');
            var newHref =angular.element(messContainer).html('<h2 ng-show="awdForm.prAwdInput.$error.pattern">PR# was not valid. Please try again.</h2>')
        
        }
    }
}]);

app.controller('dragDropCtrl', ['$scope', '$window', '$localStorage', function ($scope, $localStorage) {

    $scope.defVal = "SEARCH";

    $scope.models = [
        { listName: "A", items: [], dragging: false },
        { listName: "B", items: [], dragging: false }
    ];

    /**
     * dnd-dragging determines what data gets serialized and send to the receiver
     * of the drop. While we usually just send a single object, we send the array
     * of all selected items here.
     */
    $scope.getSelectedItemsIncluding = function (list, item) {
        item.selected = true;
        return list.items.filter(function (item) { return item.selected; });
    };

    /**
     * We set the list into dragging state, meaning the items that are being
     * dragged are hidden. We also use the HTML5 API directly to set a custom
     * image, since otherwise only the one item that the user actually dragged
     * would be shown as drag image.
     */
    $scope.onDragstart = function (list, event) {
        list.dragging = true;
        if (event.dataTransfer.setDragImage) {
            var img = new Image();
            img.src = 'framework/vendor/ic_content_copy_black_24dp_2x.png';
            event.dataTransfer.setDragImage(img, 0, 0);
        }
    };

    /**
     * In the dnd-drop callback, we now have to handle the data array that we
     * sent above. We handle the insertion into the list ourselves. By returning
     * true, the dnd-list directive won't do the insertion itself.
     */
    $scope.onDrop = function (list, items, index) {
        angular.forEach(items, function (item) { item.selected = false; });
        list.items = list.items.slice(0, index)
            .concat(items)
            .concat(list.items.slice(index));
        return true;
    }

    /**
     * Last but not least, we have to remove the previously dragged items in the
     * dnd-moved callback.
     */
    $scope.onMoved = function (list) {
        list.items = list.items.filter(function (item) { return !item.selected; });
    };

    // Generate the initial model
    /*angular.forEach($scope.models, function (list) {
        for (var i = 1; i <= 10; ++i) {
            list.items.push({ label: "Item " + list.listName + i });

        }
    });*/

    for (var i = 1; i <= 10; ++i) {
        $scope.models[0].items.push({ label: "Item Code: " + i });

    }


    // Model to JSON for demo purpose
    $scope.$watch('models', function (model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

    $scope.saveLocStor = function () {
        $localStorage.savedLocStorage = $scope.models[1].items;
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

        var absUrl = $location.absUrl();
        var landingUrl = absUrl + '&' + 'prAwardYr=' + addYearVar;
        $window.location.href = landingUrl;
    };

}]);

app.controller('yrLabelUpdate', ['$scope', '$window', function ($scope, $window) {
    $window.onload = function () {
        var urlParams = new URLSearchParams($window.location.search);
        var yrUrlVar = urlParams.get('prAwardYr');
        if (yrUrlVar) {
            var yrBtn = document.querySelector('#yrBtn');
            angular.element(yrBtn).text(yrUrlVar);
        }

    }
}])