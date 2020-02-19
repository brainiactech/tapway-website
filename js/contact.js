/* Template Name: Devazo - Landing
   Author: Themesdesign
   Version: 1.0.0
   Created: Sep 2019
   File Description: Contact Form
*/

var url = "https://tapway-api.herokuapp.com/api/utils/sendMail"

$('#contact-form').submit(function () {
	var action = $(this).attr('action');
	$("#message").slideUp(750, function () {
		$('#message').hide();

		$('#submit')
			.before('')
			.attr('disabled', 'disabled');

		$.post(url, {
			fullName: $('#name').val(),
			from: $('#email').val(),
			message: $('#comments').val(),
			subject: $('#subject').val(),
			to: 'gabe@tapwaylogistics.com',
			type: 'contact'
		},
			function (data) {
				document.getElementById('message').innerHTML = data;


				$('#message').slideDown('slow');
				$('#cform img.contact-loader').fadeOut('slow', function () {
					$(this).remove()
				});
				$('#submit').removeAttr('disabled');
				if (data.match('success') != null) $('#cform').slideUp('slow');
			}
		);

	});

	return false;

});


$('#rider-reg').submit(function (evt) {
	evt.preventDefault();
	var phone = $('#riderphone').val()
	var email = $('#rider-email').val()
	var fullName = $('#riderfullname').val()
	var address = $('#rideraddress').val()
	var city = $('#ridercity').val()
	var state = $('#riderstate').val()
	if (Number.isNaN(Number.parseInt(phone))) {
		alert("please enter a valid phone number");
		return;
	}
	if (phone.length < 11) {
		alert("Phone Number must be at least 11 characters");
		return;
	}

	if (email == "" || fullName == "" || address == "" || city == "" || state == "") {
		alert("All fields are required");
		return;
	}

	var action = $(this).attr('action');
	$("#message").slideUp(750, function () {
		$('#message').hide();

		$('#submit')
			.before('')
			.attr('disabled', 'disabled');

		$.post(url, {
			fullName: $('#fullname').val(),
			from: $('#rider-email').val(),
			address: $('#rideraddress').val(),
			phone: $('#riderphone').val(),
			city: $('#ridercity').val(),
			state: $('#riderstate').val(),
			to: 'tapwaylogistics@gmail.com',
			subject: "Tapway Rider Registration",
			vehicle: $('#vehicle').val(),
			// gabe@tapwaylogistics.com
			type: 'rider'
		},
			function (data) {
				alert(data)
				$('#message').slideDown('slow');
				$('#cform img.contact-loader').fadeOut('slow', function () {
					$(this).remove()
				});
				$('#submit').removeAttr('disabled');
				if (data.match('success') != null) $('#cform').slideUp('slow');
			}
		);

	});

	return false;

});


$('#merchant-registration').submit(function (evt) {
	evt.preventDefault();
	var phone = $('#merchantphone').val()
	var email = $('#merchantemail').val()
	var fullName = $('#merchantfullname').val()
	var address = $('#merchantaddress').val()
	var city = $('#merchantcity').val()
	var state = $('#merchantstate').val()
	var business = $('#merchantbusiness').val()
	if (Number.isNaN(Number.parseInt(phone))) {
		alert("please enter a valid phone number");
		return;
	}
	if (phone.length < 11) {
		alert("Phone Number must be at least 11 characters");
		return;
	}

	if (email == "" || fullName == "" || address == "" || city == "" || state == "" || business == "") {
		alert("All fields are required");
		return;
	}

	var action = $(this).attr('action');
	$("#message").slideUp(750, function () {
		$('#message').hide();

		$('#submit')
			.before('')
			.attr('disabled', 'disabled');

		$.post(url, {
			fullName: $('#merchantfullname').val(),
			from: $('#merchantemail').val(),
			address: $('#merchantaddress').val(),
			phone: $('#merchantphone').val(),
			city: $('#merchantcity').val(),
			state: $('#merchantstate').val(),
			to: 'tapwaylogistics@gmail.com',
			business: $('#merchantbusiness').val(),
			subject: "Tapway Merchant Registration",
			// gabe@tapwaylogistics.com
			type: 'merchant'
		},
			function (data) {
				alert(data)
				$('#message').slideDown('slow');
				$('#cform img.contact-loader').fadeOut('slow', function () {
					$(this).remove()
				});
				$('#submit').removeAttr('disabled');
				if (data.match('success') != null) $('#cform').slideUp('slow');
			}
		);

	});

	return false;

});


