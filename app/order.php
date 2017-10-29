
<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['q'])) {$q = $_POST['q'];}

$message;

if ($name== true) {
	$message .= "Представились: $name";
}

if ($phone== true) {
	$message .= "\nНомер телефона: $phone";
}

if ($q== true) {
	$message .= "\nЗаданный вопрос: $q";
}



$to = "e5ash.bro@gmail.com";
$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новый заказ с сайта";
$send = mail($to, $subject, $message, $headers);
?>