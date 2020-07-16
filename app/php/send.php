<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];
$messsage = $_POST['message'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.livemail.co.uk';  								// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'lee@knellerdesign.com';            // Login from the mail from which letters will be sent
$mail->Password = 'Farside11';                        // Password from the mail from which letters will be sent
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('lee@knellerdesign.com');              // From whom
$mail->addAddress('lee@knellerdesign.com');            // To whom
//$mail->addAddress('ellen@example.com');
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');
$mail->isHTML(true);                                    // Set email format to HTML

$mail->Subject = 'New message from KnellerDesign.com';
$mail->Body    = '' .$name . ' left a request. <br> Email: ' .$email. '<br>Message: '   .$messsage;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'An error has occurred. Please contact directly to lee@knellerdesign.com';
} else {
    echo 'Thank you! Mail was sent successfully';
}
?>
