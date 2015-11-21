$(document).ready(function() {
	$(".menu").hide() //Hide the menu by default
	$(".menu-button").click(function(){
        $(".menu").slideToggle("fast");
	});
});