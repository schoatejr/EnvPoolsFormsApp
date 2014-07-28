<?php
       // from the form
       $name = trim(strip_tags($_POST['name']));
       $to_email = trim(strip_tags($_POST['to_email']));
       $from_email = trim(strip_tags($_POST['from_email']));
       $subject = trim(strip_tags($_POST['subject']));
       $message = htmlentities($_POST['message']);

       // set here
       //$subject = "Contact form submitted!";
       //$to = 'your@email.com';

       $body = <<<HTML
$message
HTML;

       $headers = "From: $from_email\r\n";
       $headers .= "Content-type: text/html\r\n";

       // send the email
       mail($to_email, $subject, $body, $headers);

       // redirect afterwords, if needed
       //header('Location: thanks.html');
?>