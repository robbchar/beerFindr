'use strict';

angular.module('DataServiceModule', [])
.factory('DataService', function($rootScope) {
	var GMapData  = {
		options: {
	        zoom: 14,
	        mapTypeControl: false
	    },
		map: undefined,
		element: undefined,
		infoWindow: new google.maps.InfoWindow(),
		placesService: undefined,
		markers: []
	}

	function updateVenues(newVenues) {
		console.log('updateVenues');
		deleteMarkers();
		if(newVenues.length ) {
			var currentCenter = GMapData.map.getCenter(),
				request = {
					location: currentCenter,
					radius: 5000,
					types: newVenues.map(function(venue) {
						return venue.Name;
					})
				};

			GMapData.placesService.nearbySearch(request, callback);
		}
	}

	function callback(results, status) {
	  if (status == google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      createMarker(results[i]);
	    }
	  }
	}

	function createMarker(place) {
		var marker = new google.maps.Marker({
								map: GMapData.map,
								position: place.geometry.location
							});
		GMapData.markers.push(marker);

		google.maps.event.addListener(marker, 'click', function() {
			GMapData.infoWindow.setContent(place.name);
			GMapData.infoWindow.open(GMapData.map, this);
		});
	}

	// Sets the map on all markers in the array.
	function setAllMap(map) {
		for (var i = 0, length = GMapData.markers.length; i < length; i++) {
			GMapData.markers[i].setMap(map);
		}
	}

	// Removes the markers from the map, but keeps them in the array.
	function clearMarkers() {
		setAllMap(null);
	}

	// Deletes all markers in the array by removing references to them.
	function deleteMarkers() {
		clearMarkers();
		GMapData.markers = [];
	}


	function initMap(element, options) {
		GMapData.element = element;
		GMapData.options = angular.extend(GMapData.options, options);
		GMapData.map = new google.maps.Map(GMapData.element, GMapData.options);
		GMapData.placesService = new google.maps.places.PlacesService(GMapData.map);
		$rootScope.$broadcast('Gmap::Init');
	}

	return {
		InitMap: initMap,
		UpdateVenues: updateVenues
	}
});