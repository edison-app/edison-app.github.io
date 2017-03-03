features.directive('onLastRepeat', function () {
    return function (scope, element, attrs) {
        if (scope.$last) setTimeout(function () {

            $j('#programs tfoot th').each(function () {
                var title = $j(this).text();
                $j(this).html('<input type="text" placeholder="Search ' + title + '" />');
            });


            var list = $j('#programs').DataTable({
                "processing": true,
                "responsive": true,

                buttons: [
                    'pdf'
                ],
                "order": [
                    [0, "asc"]
                ]
            });

            list.columns().every(function () {
                var that = this;

                $j('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== this.value) {
                        that
                            .search(this.value)
                            .draw();
                    }
                });
            });

            list.buttons().container()
                .appendTo($('.col-sm-6:eq(0)', list.table().container()));
        }, 1);

    };
});

features.directive('tableLoad', ['$location', '$window', function ($location, $window) {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'tbl.html'
    }
}]);

 