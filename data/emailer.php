<?php
if($_POST)
{

// Commented this out.  We do send in the email programatically, but figured it is easier to 
// change here if someone ever wants to change the address of the emailer.
//  $to = $_POST['to_email'];
  $to = "job_work_orders@environmentalpools.com";
		
  $from = $_POST['from_email']; 

  $subject =$_POST['subject']; 
  
  $headers = "From: $from \n";

  $headers .= "MIME-Version: 1.0\r\n";

  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = $_POST['message'];;   

  $ok = mail($to, $subject, $message, $headers); 

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