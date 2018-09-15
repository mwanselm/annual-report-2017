jQuery.noConflict();
jQuery(document).ready(function ($) {
	var findInsiders = function (elem) {

		var tabbable = elem.find('select, input, textarea, button, a').filter(':visible');

		var firstTabbable = tabbable.first();
		var lastTabbable = tabbable.last();
		/*set focus on first input*/
		firstTabbable.focus();

		/*redirect last tab to first input*/
		lastTabbable.on('keydown', function (e) {
			if ((e.which === 9 && !e.shiftKey)) {
				e.preventDefault();
				firstTabbable.focus();
			}
		});

		/*redirect first shift+tab to last input*/
		firstTabbable.on('keydown', function (e) {
			if ((e.which === 9 && e.shiftKey)) {
				e.preventDefault();
				lastTabbable.focus();
			}
		});

		/* allow escape key to close insiders div */
		elem.on('keyup', function (e) {
			if (e.keyCode === 27) {
				elem.hide();
			};
		});
	};


	$('button#toggle').click(function (e) {
		e.preventDefault();

		//    $('.insiders').show();
		findInsiders($('#menu'));
	});

	$('button#toggle.open').click(function (e) {
		e.preventDefault();

		//    $('.insiders').hide();
	});




});
