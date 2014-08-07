<?php
if($_POST)
{
  $to = $_POST['to_email'];
		
  $from = $_POST['from_email']; 

  $subject = $_POST['subject']; 
  
  $headers = "From: $from \n";

  $headers .= "MIME-Version: 1.0\r\n";

  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = $_POST['message'];

  $ok = mail($to, $subject, $message, $headers); 

  mail($to1, $subject, $message, $headers); 

if ($ok) 
{
    echo 'Message has been sent';
} 
else
{
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} 

}

?>