		$.noConflict();
		document.addEventListener("DOMContentLoaded", function () {

		$(".tabs_area").tabs({
            loaded: false,
	        fx: {
	            duration: 'slow',
	            opacity: 'toggle'
	        },
	        show: function (e, ui) {
                if ( $(this).tabs("option", "loaded") === false ) {
                    $(this).tabs("option", "loaded", true);
                    e.preventDefault();
                    return;
                }
	            var $anchor = $( ui.tab );
                
	            $('html, body').stop().animate({
	                scrollTop: $($anchor.attr('href')).offset().top + 100
	            }, 1500, 'easeInOutExpo');

	            e.preventDefault();
	        }
	    });

	    $('.tabs_area li a').bind('click',function(event){
			var $anchor = $(this);
		
		  	$('html, body').stop().animate({
			  scrollTop: $($anchor.attr('href')).offset().top + 100
		  	}, 1500,'easeInOutExpo');
		
			event.preventDefault();
		});

	});