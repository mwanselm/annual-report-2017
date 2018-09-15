

//
//jQuery.noConflict();
jQuery(document).ready(function ($) {
	var waypoint = new Waypoint({
	  element: document.getElementById('pull-quote-1'),
	  handler: function(direction) {
		  $('#pull-quote-1').addClass('fade-in');
		  $("#pull-quote-1 span").each(function(i,el) {
				var $this = $(this);
				setTimeout(function() {
						$this.addClass('active');
					}, i*400); // milliseconds
			});
	  },
		offset: '80%'
	})
});
//
