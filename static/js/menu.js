$(document).ready(function() {
	var width = $(window).width();
	var pathname = window.location.pathname;

	if (width < 500 && pathname !== '/') {
		$(".nav-item").hide() //Hide the menu by default
	};
	
	$(".mobile-menu-button").click(function(){
        $(".nav-item").slideToggle("fast");
	});
});
