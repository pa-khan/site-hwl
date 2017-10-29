
<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['comment'])) {$comment = $_POST['comment'];}

$message;

if ($name== true) {
	$message .= "\nПредставились: $name";
}

if ($phone== true) {
	$message .= "\nНомер телефона: $phone";
}

if ($comment == true) {
	$message .= "\Заданный вопрос: $comment";
}


$to = "e5ash.bro@gmail.com";
$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новый заказ с сайта";
$send = mail($to, $subject, $message, $headers);
?>