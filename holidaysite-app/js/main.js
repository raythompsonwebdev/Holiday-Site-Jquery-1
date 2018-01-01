
$(document).ready(function() {

	var $mainmenu = $('button#toggle-menu');

	$mainmenu.on('click', function(event){

		event.preventDefault();

		$('nav ul').slideToggle(250).css('display', 'block');

	});


	$('button#side-bar-btn').on('click', function(event){
    
		event.preventDefault();
	
		// create menu variables
		var slideoutMenu = $('#wrapper #leftside2');
		var slideoutMenuWidth = $('#wrapper #leftside2 ').width();
	
		// toggle open class
		slideoutMenu.toggleClass("open");
	
		// slide menu
		if (slideoutMenu.hasClass("open")) {
			slideoutMenu.animate({
				left: "0px"
			});	
		} else {
			slideoutMenu.animate({
				left: -slideoutMenuWidth
			}, 500);	
		}

	});

	$('button#contact-bar-btn').on('click', function(event){
    
		event.preventDefault();
	
		// create menu variables
		var slideoutMenu = $('#wrapper #leftside3');
		var slideoutMenuWidth = $('#wrapper #leftside3 ').width();
	
		// toggle open class
		slideoutMenu.toggleClass("open");
	
		// slide menu
		if (slideoutMenu.hasClass("open")) {
			slideoutMenu.animate({
				left: "0px"
			});	
		} else {
			slideoutMenu.animate({
				left: -slideoutMenuWidth
			}, 500);	
		}

	});




});

