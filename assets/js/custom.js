(function($) {
	var $window = $(window),
		$body = $('body'),
        colors = ["#c7ecee", "#778beb", "#f7d794", "#63cdda", "#cf6a87", "#e77f67", "#786fa6", "#FDA7DF"],
        pickColor = colors[Math.floor(Math.random() * colors.length)];

	$(document).ready(function() {

        // Color selection
        $('.nav-item a:hover::after').css('background-color', pickColor);

		// Back to top button
		$('#top-link').on('click', function(e) {
			$('html, body').animate({'scrollTop': 0});
			e.preventDefault();
		});
		$window.scroll(function () {
			if ( $(this).scrollTop() > 600 ) {
				$body.addClass('is--scrolled');
			} else {
				$body.removeClass('is--scrolled');
			}
		});



	});

})(jQuery);
