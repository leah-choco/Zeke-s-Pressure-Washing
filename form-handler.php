<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$visitor_phone = $_POST['phone'];
$visitor_address = $_POST['address'];
$message = $_POST['message'];

$email_from = 'info@zekespressurewashing.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".  
                "User Phone: $visitor_phone.\n".
                "User Address: $visitor_address.\n".
                "User Message: $message.\n";

$to = 'mrsleahchoco@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");




?>