<?php
    if (!isset($_POST['submit'])) {
        echo "Error: You need to submit the form!\n\n";
    }
    $name = $_POST['name'];
    $visitor_email = $_POST['mail'];
    $visitor_number = $_POST['number'];
    $message = $_POST['message'];
    if (empty($name)||empty($visitor_email)) {
        echo "Name and email are mandatory!";
        exit;
    }
    $email_from = 'joshuashterenberg@gmail.com';
    $email_subject = "New Form Submission";
    $email_body = "New message from website form from the following user: \n\n $name.\n$visitor_email\n$visitor_number\n\nMessage: $message";
    $to = "joshuashterenberg@gmail.com";
    $headers = "From $email_from \r\n";
    mail($to,$email_subject,$email_body,$headers);
?>