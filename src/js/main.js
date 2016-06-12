  angular.module('personalWebsite',[])
  .controller('pwController', ['$scope', '$http', PwController]);

function PwController ($scope, $http){
  $scope.test = "Designer";
  $scope.showNav = false;

  $http.get('personal_website.json').then(function(workData){
    $scope.workItems = workData.data;
    $scope.workTotal = $scope.workItems.length;
  });

  $http.get('social_info.json').then(function(socialInfo){
    $scope.social = socialInfo.data;
  });

  var BgColors = [
    'black',
    'gold',
    'green',
    'hotpink',
    'honeydew'
  ];

  $scope.workItemHover = function randomBgColor (i) {
    var randomCounter = Math.floor(Math.random() * BgColors.length);
    var newColor = BgColors[randomCounter];
    $('.overlay-hover' + i).css({
      'background-color':newColor,
      'opacity':'.6'
    });
  };

  $scope.removeWorkItemHover = function(i) {
    $('.overlay-hover' + i).css({'background-color':'rgba(0,0,0, .0)'});
  };
}

$(document).ready(function(){

  $(window).scroll(function(){
    if ($(window).scrollTop() <= 100) {
      $('.main-nav').css({
        'background':'rgba(255,255,255,' + Math.floor($(this).scrollTop()) / 100 + ')'});
    } else {
      $('.main-nav').css({
        'background':'rgba(255,255,255, 1)'});
    }
  });
  //ANIMATE FOOTER BTN WHEN BROWSER TOP IS AT CERTAIN POINT
  $(window).scroll(function(){
    var windowScroll = $(this).scrollTop();
    if(windowScroll > $('.footer').offset().top - ($(window).height() * 0.6)){
      $('.email-btn').addClass('is-showing');
    } else {
      $('.email-btn').removeClass('is-showing');
    }
  });

  //GENERATE RANDOM-ISH BG FOR WORK ITEM

});
