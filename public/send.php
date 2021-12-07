<?php

if(isset($_POST['submit'])){
//$to = "info@epicblog.net"; // Здесь нужно написать e-mail, куда будут приходить письма
//$from = $_POST['email']; // this is the sender's Email address
$name = $_POST['name'];
$email = $_POST['email'];

if (mail("tolxpams@gmail.com",
        "from site",
        "Name: ".$name,
        "Email: ".$email) {
          echo "Mail is send";
        } else {
          echo "error";
        }


}

?>
