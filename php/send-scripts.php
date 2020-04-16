<?php
$mailToSend = 'kontakt@zmyslowski-reinigungen.ch';
$reCaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
$secret = '6Leut-cUAAAAAHPKR80s5fnEQkW_2WXlLAckKcQz';
$processed = false;
$ERROR_MESSAGE = '';
if ( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
	$name       = $_POST['name'];
	$email      = $_POST['email'];
	$message    = $_POST['message'];
	$regulation = $_POST['regulation'];
	$token = $_POST['token'];
	$errors     = Array();
	$return     = Array();
	if ( empty( $name ) ) {
		array_push( $errors, 'name' );
	}
	if ( ! filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
		array_push( $errors, 'email' );
	}
	if ( empty( $message ) ) {
		array_push( $errors, 'message' );
	}
	if ( empty( $regulation ) ) {
		array_push( $errors, 'regulation' );
    }
    if ( empty( $token ) ) {
		array_push( $errors, 'token' );
    }

	if ( count( $errors ) > 0 ) {
		$return['errors'] = $errors;
	} else {
        $data = array('secret' => $secret, 'response' => $token);
        $json = CallAPI('POST', $reCaptchaUrl, $data);

        $obj = json_decode($json);

        if ($obj->{'code'} == '1') {
            $processed = true;
        } else {
            $ERROR_MESSAGE = $obj->{'data'};
        }

        if (!$processed && $ERROR_MESSAGE != '') {
            // echo $ERROR_MESSAGE;
            $return['status'] = 'error';
        } else {
            $headers = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
            $headers .= 'From: ' . $email . "\r\n";
            $headers .= 'Reply-to: ' . $email;
            $message = "
                <html>
                <head>
                <meta charset=\"utf-8\">
                </head>
                <style type='text/css'>
                    body {font-family:sans-serif; color:#222; padding:20px;}
                    div {margin-bottom:10px;}
                    .msg-title {margin-top:30px;}
                </style>
                <body>
                <div>Name: <strong>$name</strong></div>
                <div>Email: <a href=\"mailto:$email\">$email</a></div>
                <div class=\"msg-title\"> <strong>Nachricht:</strong></div>
                <div>$message</div>
                </body>
                </html>";

            if ( mail( $mailToSend, 'Neue Nachricht von der Site - ' . date( "d-m-Y" ), $message, $headers ) ) {
                $return['status'] = 'ok';
            } else {
                $return['status'] = 'error';
            }
        }
	}

	header( 'Content-Type: application/json' );
	echo json_encode( $return );
}

// Method: POST, PUT, GET etc
// Data: array("param" => "value") ==> index.php?param=value

function CallAPI($method, $url, $data = false)
{
    $curl = curl_init();

    switch ($method)
    {
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);

            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            break;
        case "PUT":
            curl_setopt($curl, CURLOPT_PUT, 1);
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }

    // Optional Authentication:
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, "username:password");

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);

    curl_close($curl);

    return $result;
} 