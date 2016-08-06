  angular.module('personalWebsite',['ngRoute'])
  .controller('pwController', ['$scope', '$http', '$location', '$routeParams',  PwController])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.
      when("/", {templateUrl:"/partials/home.html"})
      .when("/case-study/:caseStudyId", {templateUrl:"/partials/amorae-case-study.html"});

      $locationProvider.html5Mode(true);

  }]);

function PwController ($scope, $http, $location, $routeParams){
  $scope.params=$routeParams;
  $scope.test = "Designer";
  $scope.showNav = false;

  $http.get('personal_website.json').then(function(workData){
    $scope.workItems = workData.data;
    $scope.workTotal = $scope.workItems.length;
  });

  $http.get('social_info.json').then(function(socialInfo){
    $scope.social = socialInfo.data;
  });

  $http.get('case_study.json').then(function(caseStudyInfo){
    $scope.cs = caseStudyInfo.data;
  });

  $scope.go = function(path) {
      $location.path(path);
    };

  $scope.triggerCubanModal = function() {
    $('.modal-container.cuban, .modal, .close-modal img').toggleClass('is-showing');
  };

  $scope.triggerCopanModal = function() {
    $('.modal-container.copan, .modal, .close-modal img').toggleClass('is-showing');
  };

} //PwController Close

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

});
