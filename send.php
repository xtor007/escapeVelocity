<?php

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/scr/Exception.php';
  require 'phpmailer/scr/Exception.php';

  $mail = new PHPMailer(true);
  $mail -> CharSet = 'UTF-8';
  $mail -> IsHTML(true);

  $mail -> setForm('tolxpams@gmail.com','Anatoliy');
  $mail -> addAddress($_POST['email']);
  $mail -> Subject = 'escape velocity';

  $body = '<p>'.$_POST['name'].'! Welcome to the site about escape velocity</p>';

  $mail -> Body = $body;
?>
