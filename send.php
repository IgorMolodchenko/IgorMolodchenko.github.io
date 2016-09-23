<?php
$to = 'my_email@example.com';
$subject = 'Гости на свадьбу';
$message = '';
if (isset($_POST['name'])) $message .= 'От: ' . $_POST['name'] . '<br />' . PHP_EOL;
if (isset($_POST['number_of_guests'])) $message .= 'Количество гостей: ' . $_POST['number_of_guests'] . '<br />' . PHP_EOL;
if (isset($_POST['dishes'])) $message .= 'Предпочитаемые блюда: ' . $_POST['dishes'] . '<br />' . PHP_EOL;
if (isset($_POST['drinks'])) $message .= 'Предпочитаемые напитки: ' . $_POST['drinks'] . '<br />' . PHP_EOL;
if (isset($_POST['comment'])) $message .= 'Комментарий: ' . $_POST['comment'] . '<br />' . PHP_EOL;
$send = mail($to, $subject, $message);
if ($send) {
  echo "Спасибо за заявку";
} else {
  die("Ошибка при отправки заявки");
}