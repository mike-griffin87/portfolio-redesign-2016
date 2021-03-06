angular.module('personalWebsite').directive('animateScroll', function(){
  return {
    restrict: 'A',
    scope: {
      scrollTo: '@'
    },
    link: function(scope, $elm, attr){
      $elm.on('click', function(){
        $('html,body').animate({scrollTop: $('#' + scope.scrollTo).offset().top}, 450);
      });
    }
  };
});
