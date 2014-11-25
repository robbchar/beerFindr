'use strict';

angular.module('beerFindr')
.controller('MenuBarCtrl', function ($scope, GMapService) {
	$scope.showOptions = false;
	$scope.venues = [new Venue('bars'), new Venue('restaurants'), new Venue('breweries')];

	$scope.toggleOptionsMenu = function() {
		$scope.showOptions = !$scope.showOptions;
	};

	// toggle selection for a given vaenue by name
	$scope.toggleOption = function (selectedVenue) {
		for(var i = 0, length = $scope.venues.length; i <= length; i++){
			var venue = $scope.venues[i];
			if(selectedVenue.name === venue.Name) {
				venue.Checked = !venue.Checked;
			}

			return;
		}
	};
});
