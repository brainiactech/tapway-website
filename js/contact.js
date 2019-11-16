/* Template Name: Devazo - Landing
   Author: Themesdesign
   Version: 1.0.0
   Created: Sep 2019
   File Description: Contact Form
*/

$('#contact-form').submit(function () {
	var action = $(this).attr('action');
	$("#message").slideUp(750, function () {
		$('#message').hide();

		$('#submit')
			.before('')
			.attr('disabled', 'disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			comments: $('#comments').val(),
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


$('#rider-reg').submit(function () {
	var action = $(this).attr('action');
	$("#message").slideUp(750, function () {
		$('#message').hide();

		$('#submit')
			.before('')
			.attr('disabled', 'disabled');

		$.post(action, {
			fullname: $('#fullname').val(),
			email: $('#email').val(),
			address: $('#address').val(),
			phone: $('#phone').val(),
			city: $('#city').val(),
			state: $('#state').val(),
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


