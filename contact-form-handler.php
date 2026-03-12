<?php
if (isset($_POST['submit'])) {
    // Collect data from the "name" attributes in your HTML
    $name    = strip_tags(trim($_POST['name']));
    $email   = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST['subject']));
    $message = strip_tags(trim($_POST['message']));

    // Your Email Address
    $recipient = "career.narayana474@gmail.com"; 

    // Create Email Headers
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Format the email content
    $email_content = "New Message from Website Contact Form\n";
    $email_content .= "----------------------------------\n";
    $email_content .= "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Subject: $subject\n\n";
    $email_content .= "Message:\n$message\n";

    // Send the email
    if (mail($recipient, $subject, $email_content, $headers)) {
        // Redirect back to your page with a success flag
        header("Location: index.html?status=success#contactForm");
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Redirect if someone tries to access the PHP file directly
    header("Location: index.html");
    exit;
}
?>