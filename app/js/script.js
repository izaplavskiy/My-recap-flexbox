$(document).ready(function() {


	// zoom_photo

	$(".header_left a").append("<span></span>");
	$(".header_left a").hover(function() {
		
		$(this).children("span").fadeIn(600);
		}, function() {
		$(this).children("span").fadeOut(200);

		
	});


	// // spincrement

	// $(".spincrement").spincrement({
	// 	duration: 2000
	// });


	// run spincrement after scroll

	var show = true;
    var countbox = "#counters";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                from: 0,
                duration: 3000
            });
 
            show = false;
        }
    });
	
});