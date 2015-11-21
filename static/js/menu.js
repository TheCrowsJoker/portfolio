var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$(document).ready(function() {
	if(isMobile) {
		console.log("mobile");
		$(".menu").hide() //Hide the menu by default
		$(".menu-button").click(function(){
	        $(".menu").slideToggle("fast");
		});
	};
});