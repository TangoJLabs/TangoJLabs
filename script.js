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
		$('#info_container').css('display', 'block');
		$('#info_screen').css('display', 'block');
		$('#info_box_screenshot2').css('display', 'block');
		$('#info_box_title').text('dronemash');
		$('#info_box_logo').attr('href', 'https://www.dronemash.com');
		$('#info_box_screenshot').attr('href', 'https://www.dronemash.com');
		$('#info_box_screenshot2').attr('href', 'https://www.dronemash.com');
		$('#info_img_logo').attr('src', 'dronemash.png');
		$('#info_img_screenshot').attr('src', 'dronemashHome.png');
		$('#info_img_screenshot2').attr('src', 'dronemashHome2.png');
		$('#info_box_right_text').html(
			'</br>dronemash is an experimental'
			+ ' platform for displaying drone'
			+ ' media content based on location.'
			+ '</br>'
			+ '</br>We run dronemash on Google App Engine'
			+ ' with Python for the backend'
			+ ' scripts and utilize Google\'s'
			+ ' Python NDB Database for data'
			+ ' storage.  The NDB database'
			+ ' is a schemaless object datastore,'
			+ ' and we utilize this storage'
			+ ' technology due to its auto'
			+ ' caching and fast read time.'
			+ '</br>'
			+ '</br>dronemash was built to demonstrate'
			+ ' the basic capabilities of a location-'
			+ ' based media platform.  TangoJLabs'
			+ ' is currently developing other'
			+ ' platforms for location-based media'
			+ ' sharing.'
			+ '</br>'
			+ '</br>We do not actively maintain'
			+ ' dronemash, so feel free to send'
			+ ' us an email or use the comment'
			+ ' form at dronemash.com if you'
			+ ' notice any bugs.'
			+ '</br>'
			+ '</br>Please keep in mind that not all'
			+ ' features on dronemash are mobile'
			+ ' friendly.'
			+ '</br>'
			+ '</br>Click the logo to check it out!');
	});
	$('#portfolio_box2').click(function() {
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
	$('#portfolio_box3').click(function() {
		$('#info_container').css('display', 'block');
		$('#info_screen').css('display', 'block');
		$('#info_box_screenshot2').css('display', 'none');
		$('#info_box_title').text('Matchonym');
		$('#info_box_logo').attr('href', 'https://play.google.com/store/apps/details?id=matchonym.tangojlabs.com.matchonym');
		$('#info_box_screenshot').attr('href', 'https://play.google.com/store/apps/details?id=matchonym.tangojlabs.com.matchonym');
		$('#info_img_logo').attr('src', 'matchonym512.png');
		$('#info_img_screenshot').attr('src', 'screenshot_matchonym.png');
		$('#info_box_right_text').html(
			'</br>Matchonym is a simple Android'
			+ ' game app and was the first'
			+ ' app developed by TangoJLabs.'
			+ '</br>'
			+ '</br>Players are presented with a'
			+ ' a random word and are required'
			+ ' to select the closest synonym'
			+ ' from a list of four other random'
			+ ' words.'
			+ '</br>'
			+ '</br>Players can log in to save their'
			+ ' score history, and they have the'
			+ ' option to place a time limit on'
			+ ' their game which allows the'
			+ ' opportunity for bonus points'
			+ ' to be earned if a minimum amount'
			+ ' of points are earned within the'
			+ ' time limit.'
			+ '</br>'
			+ '</br>Matchonym is powered by the Public'
			+ ' Domain "Enable" word list hosted'
			+ ' by The National Puzzler\'s League.'
			+ ' It also uses the online Thesaurus'
			+ ' API hosted by Big Huge Labs.'
			+ '</br>'
			+ '</br><a href="https://play.google.com/store/apps/details?id=com.tangojlabs.matchonym"><img id="GPLD" alt="Get Matchonym on Google Play" src="https://play.google.com/intl/en_us/badges/images/apps/en-play-badge.png" /></a>'
			+ '</br>'
			+ '</br><a id="GP_att">Android, Google Play and the Google Play logo are trademarks of Google Inc.</a>');
	});
	$('#info_screen').click(function() {
		$('#info_container').css('display', 'none');
		$('#info_screen').css('display', 'none');
	});
});