var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

$(document).ready(function() {
	if(isMobile) {
		$('<link href="../static/styles/mobile.css" rel="stylesheet">').appendTo("head");
		$(".menu").hide() //Hide the menu by default
		$(".menu-button").click(function(){
	        $(".menu").slideToggle("fast");
		});
	} else {
		$('<link href="../static/styles/styles.css" rel="stylesheet">').appendTo("head");
	};
});