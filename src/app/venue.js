'use strict';

var Venue = function(initialName){
	var name = initialName,
		checked = true;

	return {
		Name: name,
		Checked: checked
	}
}