angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, $state, mainSrv) {
  var bookedId = $state.params.id;
  var info = mainSrv.travelInfo;

  for (var i = 0; i < info.length; i++) {
    if (bookedId == info[i].id) {
      $scope.bookedData = info[i];
    }
  }

})
