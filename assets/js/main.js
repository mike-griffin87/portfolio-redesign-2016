  angular.module('personalWebsite',[])
  .controller('pwController', ['$scope', PwController])
  .directive('animateScroll', function(){
    return {
      restrict: 'A',
      scope: {
        scrollTo: '@'
      },
      link: function(scope, $elm, attr){
        $elm.on('click', function(){
          console.log('click');
          $('html,body').animate({scrollTop: $('#' + scope.scrollTo).offset().top - 40 +'px'}, 450);
        });
      }
    };
  });



function PwController ($scope){
  $scope.test = "Designer";
  $scope.showNav = false;
  $scope.workItem = [{
    name: 'Work One',
    type: 'Design',
    class: 'work-item-1'
  },
  {
    name: 'Work One',
    type: 'Design',
    class: 'work-item-2'
  },
  {
    name: 'Work three',
    type: 'Design',
    class: 'work-item-3'
  },
  {
    name: 'Work One',
    type: 'Design',
    class: 'work-item-1'
  },
  {
    name: 'Work One',
    type: 'Design',
    class: 'work-item-1'
  },
  {
    name: 'Work two',
    type: 'Design',
    class: 'work-item-2'
  }];

}

$(document).ready(function(){

  $(window).scroll(function(){

    if ($(window).scrollTop() <= 100) {
      $('.main-nav').css({
        'background':'rgba(255,255,255,' + Math.floor($(this).scrollTop()) / 100 + ')'});
    }

  });

});
