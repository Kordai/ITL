$(document).ready(function() {
	
	$(window).resize(function() {
		scrinWith()
	});

	function scrinWith() {
		var $w = $(window).width();
		console.log($w);
		
		if ($w < 1825 & $w > 1200) {
			$(".tel").css("font-size", "16px");
			$(".logo").css("margin-top", "6px");
			$(".vhod").css("font-size", "16px");
			$(".telemetriya").css("margin-top", "6px");
			$(".top_contacts").css("margin-top", "5px");
			$(".slider_container h1").css("font-size", "30px"); 
			$(".slider_container p").css("font-size", "14px"); 
			$("h1").css({"margin-top":"50px","font-size":"28px"}); 
			$(".sec_2 p, .sec_3 p, .sec_4 p").css("font-size", "13px");
			$(".sec_3 p").css("width", "800px");
			$(".input1").css({"width":"125%", "margin-left":"-28px"});
			$(".input_icon_mail i").css("left", "-30px");
			$(".slider_container h1").css("margin-top", "160px");

		} else {
			$(".tel").css("font-size", "");
			$(".logo").css("margin-top", "");
			$(".vhod").css("font-size", "");
			$(".telemetriya").css("margin-top", "");
			$(".top_contacts").css("margin-top", "");
			$(".slider_container h1").css("font-size", "");
			$(".slider_container p").css("font-size", ""); 
			$("h1").css({"margin-top":"","font-size":""}); 
			$(".sec_2 p, .sec_3 p, .sec_4 p").css("font-size", "");
			$(".sec_3 p").css("width", "");
			$(".input1").css({"width":"", "margin-left":""});
			$(".input_icon_mail i").css("left", "");
			$(".slider_container h1").css("margin-top", "");
		}
	}
	
	scrinWith();

	$(".main_mnu_button").click(function() {
		$(".main_mnu ul").slideToggle();
	});
	
	$(".contact_button").click(function() {
		$(".tel").slideToggle();
	});
	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		// Most important owl features
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		singleItem : false,
		itemsScaleUp : false,
		slideBy: 1,

//Basic Speeds
slideSpeed : 200,
paginationSpeed : 800,
rewindSpeed : 1000, 


//Autoplay
autoPlay : true,
stopOnHover : false,

// Navigation
navigation : false,
rewindNav : true,
scrollPerPage : false,

//Pagination
pagination : true,
// Responsive 
responsive: true,
responsiveRefreshRate : 200,
responsiveBaseWidth: window,

});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".input_icon_mail").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $(".input1").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			// setTimeout(function() {
			// 	$.fancybox.close();
			// }, 1000);
	});
		return false;
	});

});