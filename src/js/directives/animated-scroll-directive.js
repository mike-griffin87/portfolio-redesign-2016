angular.module('personalWebsite').directive('animateScroll', function(){
  return {
    restrict: 'A',
    scope: {
      scrollTo: '@'
    },
    link: function(scope, $elm, attr){
      $elm.on('click', function(){
        console.log('click');
        $('html,body').animate({scrollTop: $('#' + scope.scrollTo).offset().top}, 450);
      });
    }
  };
});
