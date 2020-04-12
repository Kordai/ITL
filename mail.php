<?php

$recepient = "alexandr@greno-service.kz";
$sitename = "Greno Service";

$mail = trim($_GET["mail"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $mail ";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");