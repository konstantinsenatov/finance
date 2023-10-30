<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('From');
	//Кому отправить
	$mail->addAddress('Address');
	//Тема письма
	$mail->Subject = 'Получить карту"';

	//Тело письма
	$body = '<h1>Получить карту!</h1>';
	
	if(trim(!empty($_POST['hero-email']))){
		$body.='<p><strong>Email:</strong> '.$_POST['hero-email'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>