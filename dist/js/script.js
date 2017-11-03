$(document).ready(function() {


	// zoom_photo

	$(".header_left a").append("<span></span>");
	$(".header_left a").hover(function() {
		
		$(this).children("span").fadeIn(600);
		}, function() {
		$(this).children("span").fadeOut(200);

		
	});
	
});