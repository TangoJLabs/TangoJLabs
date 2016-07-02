$(document).ready(function() {
	if ($('body').width() < 600) {
		$('#body_container1').css({
			'height': 1450
		});
		$('.about_box').css({
			'width': '100%',
			'margin-top': 50
		});
		$('hr').css({
			'margin-left': 0,
			'margin-right': 0
		});
		$('#about_title').css({
			'margin-left': 0,
			'margin-right': 0
		});
		$('#body_container2').css({
			'height': 1500
		});
		$('#portfolio_box4_text').css({
			'font-size': 38,
			'margin-top': 95,
			'margin-left': 5
		});
		$('#body_container3').css({
			'height': 900
		});
		$('#GPLD').css({
			'max-width': 250
		});
		$('.footer_box').css({
			'left': ($('body').width() - 300) * 0.5
		});
		var portfolioBoxDim = $('body').width() - 120;
		if (portfolioBoxDim > 300) {
			portfolioBoxDim = 300;
		}
		$('.portfolio_box').css({
			'height': portfolioBoxDim,
			'width': portfolioBoxDim
		});
		$('.float_center').css({
			'left': 0
		});
		$('.child').css({
			'left': 0
		});
		$('#info_box_left').css('min-width', 250);
		$('.info_img').css({
			'width': '100%',
			'margin-left': 0
		});
	} else if ($('body').width() < 1050) {
		$('#body_container2').css({
			'height': 2000
		});
		$('.portfolio_box').css({
			'left': ($('body').width() - 575) * 0.5
		});
		$('#info_box_left').css('min-width', 250);
		$('.info_img').css({
			'width': '100%',
			'margin-left': 0
		});
	}
	$('#body_container1').css('margin-top', $(window).height());
	var logoDim = $(window).height();
	$('body').css('background-size', logoDim);
	$('#info_container').css('top', $(window).height() + $('#body_container1').height());

	$('#portfolio_box1').click(function() {
		// window.location.href = "https://crudecl.com";
		// window.location.replace("https://crudecl.com");
		$('#info_container').css('display', 'block');
		$('#info_screen').css('display', 'block');
		$('#info_box_screenshot2').css('display', 'block');
		$('#info_box_title').text('Crude CL');
		$('#info_img_logo').attr('src', 'CrudeCL.png');
		$('#info_box_logo').attr('href', 'http://crudecl.com');
		$('#info_box_screenshot').css('display', 'none');
		$('#info_box_screenshot2').css('display', 'none');
		$('#info_box_right_text').html(
			'</br>Crude CL is a platform to'
			+ ' engage a custom algorithm for the'
			+ ' prediction of the future price of'
			+ ' crude oil, specifically the NYMEX'
			+ ' CL Futures Contract.'
			+ '</br>'
			+ '</br>'
			+ ' Crude CL is constantly undergoing'
			+ ' upgrades so continue to watch'
			+ ' the project!'
			+ '</br>'
			+ '</br>'
			+ '</br>'
			+ 'Click on the logo to check it out!'
			+ '</br>');
	});
	$('#portfolio_box2').click(function() {
		$('#info_container').css('display', 'block');
		$('#info_screen').css('display', 'block');
		$('#info_box_screenshot2').css('display', 'block');
		$('#info_box_title').text('dronemash');
		$('#info_img_logo').attr('src', 'dronemash.png');
		$('#info_box_logo').attr('href', '');
		$('#info_box_screenshot').css('display', 'none');
		$('#info_box_screenshot2').css('display', 'none');
		$('#info_box_right_text').html(
			'</br>Thanks for visiting!'
			+ '</br>'
			+ '</br>'
			+ ' Unfortunately, updates to the'
			+ ' Google Maps libary have rendered'
			+ ' dronemash unusable at this time.'
			+ '</br>'
			+ '</br>'
			+ ' Thanks for your interest, please'
			+ ' check out our other projects!'
			+ '</br>'
			+ '</br>'
			+ '</br>');
	});
	$('#portfolio_box3').click(function() {
		$('#info_container').css('display', 'block');
		$('#info_screen').css('display', 'block');
		$('#info_box_screenshot2').css('display', 'none');
		$('#info_box_title').text('Location Data App');
		$('#info_box_logo').attr('href', 'https://play.google.com/store/apps/details?id=com.tangojlabs.locationdata');
		$('#info_box_screenshot').attr('href', 'https://play.google.com/store/apps/details?id=com.tangojlabs.locationdata');
		$('#info_img_logo').attr('src', 'Compass.png');
		$('#info_img_screenshot').attr('src', 'screenshot_location_data.png');
		$('#info_box_right_text').html(
			'</br>The Location Data App for'
			+ ' Android is a simple app'
			+ ' that pings a user\'s'
			+ ' location at regular intervals'
			+ ' and displays the user\'s'
			+ ' GPS coordinates along with'
			+ ' the device\'s compass'
			+ ' direction in a streaming'
			+ ' data list.'
			+ '</br>'
			+ '</br>Users can select a variety'
			+ ' of time intervals to space'
			+ ' out the data pings as needed.'
			+ '</br>'
			+ '</br>The Location Data App was'
			+ ' developed to test location'
			+ ' and azimuth data collection'
			+ ' on mobile devices for future'
			+ ' app projects in our lineup.'
			+ '</br>'
			+ '</br><a href="https://play.google.com/store/apps/details?id=com.tangojlabs.locationdata"><img id="GPLD" alt="Get Location Data on Google Play" src="https://play.google.com/intl/en_us/badges/images/apps/en-play-badge.png" /></a>'
			+ '</br>'
			+ '</br><a id="GP_att">Android, Google Play and the Google Play logo are trademarks of Google Inc.</a>');
	});
	$('#info_screen').click(function() {
		$('#info_container').css('display', 'none');
		$('#info_screen').css('display', 'none');
	});
});
