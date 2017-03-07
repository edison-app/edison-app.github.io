features.directive('viewChange', function () {  
        return {
            restrict: 'A',
            scope: { viewChange: '&' },
            link: function (scope, element, attrs) {
                toggleLeftBar(attrs)
            }
        }
 
    function toggleLeftBar(el) {
        el.on('click', function () {
            $('left-sidebar-sec').hide();
        })
    }
});