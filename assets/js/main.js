  angular.module('personalWebsite',[])
  .controller('pwController', ['$scope', '$http', PwController])
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



function PwController ($scope, $http){
  $scope.test = "Designer";
  $scope.showNav = false;

  $http.get('personal_website.json').then(function(workData){
    $scope.workItems = workData.data;
    $scope.workTotal = $scope.workItems.length;
  });

}

$(document).ready(function(){

  $(window).scroll(function(){

    if ($(window).scrollTop() <= 100) {
      $('.main-nav').css({
        'background':'rgba(255,255,255,' + Math.floor($(this).scrollTop()) / 100 + ')'});
    }

  });

});
