<?php
require './lib/class.PHPMailer.php';

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->Port = '465';
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = $_POST['email_username'];                 // SMTP username
$mail->Password = $_POST['email_password'];                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable encryption, 'ssl' also accepted

$mail->From = $_POST['from_email'];
$mail->FromName = 'Mailer';
$mail->addAddress($_POST['to_email'], 'Andrew');     // Add a recipient
$mail->addReplyTo($_POST['from_email'], 'Information');

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $_POST['subject'];
$mail->Body    = $_POST['message'];
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}
?>