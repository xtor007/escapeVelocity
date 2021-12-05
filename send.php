<?php

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/scr/Exception.php';
  require 'phpmailer/scr/Exception.php';

  $mail = new PHPMailer(true);
  $mail -> CharSet = 'UTF-8';
  $mail -> IsHTML(true);

  $mail -> setForm('tolxpams@gmail.com','Anatoliy');
  $mail -> addAddress('tolxpams@gmail.com');
  $mail -> Subject = 'escape velocity';

  $body = '<p>Name:'.$_POST['name'].'</p>';
  $body .= '<p>E-mail:'.$_POST['email'].'</p>';

  $mail -> Body = $body;
?>
