  angular.module('personalWebsite',[])
  .controller('pwController', ['$scope', '$http', PwController]);
  
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
