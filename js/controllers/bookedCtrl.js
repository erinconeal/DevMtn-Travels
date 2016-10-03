angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, $state, mainSrv) {
  var bookedId = $state.params.id

  for (var i = 0; i < mainSrv.travelInfo.length; i++) {
    if (bookedId == mainSrv.travelInfo[i].id) {
      $scope.bookedData = mainSrv.travelInfo[i]
    }
  }

})
