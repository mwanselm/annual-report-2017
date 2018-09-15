

//
//jQuery.noConflict();
jQuery(document).ready(function ($) {
	var waypoint = new Waypoint({
	  element: document.getElementById('fi-1'),
	  handler: function(direction) {
		  $('.accordions').fadeIn();
	  },
		offset: '80%'
	})
});
//
