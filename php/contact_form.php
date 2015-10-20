<?php
	// Fetching Values from URL.
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
	// After sanitization Validation is performed
	if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
		$subject = $name;
		// To send HTML mail, the Content-type header must be set.
		$headers = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= 'From:' . $email. "\r\n"; // Sender's Email
		$headers .= 'Cc:' . $email. "\r\n";
		$template = '<div style="padding: 15px 25px; color:white;">'
		. 'Name: ' . $name . '<br/><br/>'
		. 'Email: ' . $email . '<br/><br/>'
		. 'Message: ' . $message . '<br/><br/>';
		$sendmessage = "<div style=\"background-color:#7E7E7E; color:#fff;\">" . $template . "</div>";
		$sendmessage = wordwrap($sendmessage, 70);
		// Send mail by PHP Mail Function.
		mail("karismavsoni93@gmail.com", $subject, $sendmessage, $headers);
		echo "Thank You for contacting me. I will get back to you soon.";
	} else {
		echo "<span>* Enter valid email *</span>";
	}
?>