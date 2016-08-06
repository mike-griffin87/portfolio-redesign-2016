angular.module('personalWebsite')
.component('modal', {
 templateUrl: 'modal.template.html',
 controller: ['$scope', modalController],
 bindings: {
   modalImg: '@'
 }
});

function modalController ($scope){
  this.closeModal = function(){
    $scope.$emit('closeModal');
  };
}
