features.directive('watcher',function(){
  return {
    restrict: 'A',
    scope: {
      watcher: '='
    },
    link: function(scope,elem,attr) {
     scope.$watch('watcher',function(v) {
        if(v)
          $(elem).hide();
        else
          $(elem).show();
     });
    }
  };
});