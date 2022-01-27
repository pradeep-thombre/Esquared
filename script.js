$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		mouseDrag:false,
		loop:true,
		margin:2,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:3
			}
		}
	});
	
	$('.owl-prev').click(function() {
		$active = $('.owl-item .item.show');
		$('.owl-item .item.show').removeClass('show');
		$('.owl-item .item').removeClass('next');
		$('.owl-item .item').removeClass('prev');
		$active.addClass('next');
		if($active.is('.first')) {
			$('.owl-item .last').addClass('show');
			$('.first').addClass('next');
			$('.owl-item .last').parent().prev().children('.item').addClass('prev');
		}
		else {
			$active.parent().prev().children('.item').addClass('show');
			if($active.parent().prev().children('.item').is('.first')) {
				$('.owl-item .last').addClass('prev');
			}
			else {
				$('.owl-item .show').parent().prev().children('.item').addClass('prev');
			}
		}
	});
	
	$('.owl-next').click(function() {
		$active = $('.owl-item .item.show');
		$('.owl-item .item.show').removeClass('show');
		$('.owl-item .item').removeClass('next');
		$('.owl-item .item').removeClass('prev');
		$active.addClass('prev');
		if($active.is('.last')) {
			$('.owl-item .first').addClass('show');
			$('.owl-item .first').parent().next().children('.item').addClass('prev');
		}
		else {
			$active.parent().next().children('.item').addClass('show');
			if($active.parent().next().children('.item').is('.last')) {
				$('.owl-item .first').addClass('next');
			}
			else {
				$('.owl-item .show').parent().next().children('.item').addClass('next');
			}
		}
	});
	
	$('.items').slick({
		dots: true,
		infinite: true,
		speed: 800,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 10,
		slidesToScroll: 10,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}
		
		]
	});
});


	$('.two').hide();
	$('.twoimg').css("width", "0px");

	$('#eligibility').css("background-color", "rgb(255,178,76)");

	function eligiblityClicked(){
		$('.two').hide();
		$('.twoimg').css("width", "0px");
		$('.oneimg').css("width", "13px");
		$('.one').show();
		$('#eligibility').css("background-color", "rgb(255,178,76)");
		$('#admission').css("background-color", "#BDBDBD");
	}

	
	function admissionClicked(){
		$('.one').hide();
		$('.two').show();
		$('.twoimg').css("width", "13px");
		$('.oneimg').css("width", "0px");
		
		$('#eligibility').css("background-color", "#BDBDBD");
		$('#admission').css("background-color", "rgb(255,178,76)");
	}

	$("#show-container > div:gt(0)").hide();

	setInterval(function() {
	$('#show-container > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#show-container');
	}, 3000);
