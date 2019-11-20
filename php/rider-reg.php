<?php

if(!$_POST) exit;

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$fullname     = $_POST['fullname'];
$phone    = $_POST['phone'];
$email = $_POST['email'];
$address     = $_POST['address'];
$city    = $_POST['city'];
$state = $_POST['state'];

if(trim($fullname) == '') {
	echo '<div class="error_message">You must enter your name.</div>';
	exit();
} else if(trim($phone) == '') {
	echo '<div class="error_message">Please enter a valid phone.</div>';
	exit();
}

// if(trim($comments) == '') {
// 	echo '<div class="error_message">Please enter your message.</div>';
// 	exit();
// }

// if(get_magic_quotes_gpc()) {
// 	$comments = stripslashes($comments);
// }


// Configuration option.
// Enter the email address that you want to emails to be sent to.
// Example $address = "joe.doe@yourdomain.com";

//$address = "example@example.net";
$toaddress = "tapwaylogistics@gmail.com,brainiacten@gmail.com";


// Configuration option.
// i.e. The standard subject will appear as, "You've been contacted by John Doe."

// Example, $e_subject = '$name . ' has contacted you via Your Website.';

$e_subject = 'Rider Registration: ' . $fullname . '.';


// Configuration option.
// You can change this if you feel that you need to.
// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.


$e_body = ":::Rider Registration:::

Full Name: $fullname

Phone: $phone

Email: $email

Address: $address

City: $city

State: $state
";

// $msg = wordwrap( $e_body . $e_content . $e_reply, 70 );

$headers = "From: $email" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

if(mail($toaddress, $e_subject, $e_body, $headers)) {

	// Email has sent successfully, echo a success page.

	echo "<fieldset>";
	echo "<div id='success_page'>";
	echo "<h5 class='text-success'>Email Sent Successfully.</h5>";
	echo "<p>Thank you <strong>$fullname</strong>, your message has been submitted to us.</p>";
	echo "</div>";
	echo "</fieldset>";

} else {

	echo 'ERROR!';

}