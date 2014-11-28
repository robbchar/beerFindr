'use strict';

angular.module('beerFindr')
.controller('MenuBarCtrl', function ($scope, DataService) {
	$scope.showOptions = false;
	$scope.venues = [new Venue('bar'), new Venue('restaurant'), new Venue('brewery')];

	function getCheckedVenues() {
		var returnVenues = [];

		for(var i = 0, length = $scope.venues.length; i < length; i++){
			if($scope.venues[i].Checked === true) {
				returnVenues.push($scope.venues[i]);
			}
		}

		return returnVenues;
	}

	$scope.toggleOptionsMenu = function() {
		$scope.showOptions = !$scope.showOptions;
	};

	// toggle selection for a given vaenue by name
	$scope.toggleOption = function (selectedVenue) {
		for(var i = 0, length = $scope.venues.length; i < length; i++){
			var venue = $scope.venues[i];
			if(selectedVenue.Name === venue.Name) {
				venue.Checked = !venue.Checked;
			}
		}

		DataService.UpdateVenues(getCheckedVenues());
	};

	$scope.$on('Gmap::Init', function() {
		DataService.UpdateVenues(getCheckedVenues());
	});
});
