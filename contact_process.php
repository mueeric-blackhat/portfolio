<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validation (Optional, but good practice)
    if (!empty($name) && !empty($email) && !empty($message)) {
        
        // Set up the recipient email address
        $to = "your_email@example.com";  // Replace with your email address

        // Set the email subject
        $subject = "New Contact Message from $name";

        // Set the email headers
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
        $headers .= "From: $email" . "\r\n";

        // Create the email body content
        $body = "<html><body>";
        $body .= "<h2>Message from $name</h2>";
        $body .= "<p><strong>Name:</strong> $name</p>";
        $body .= "<p><strong>Email:</strong> $email</p>";
        $body .= "<p><strong>Message:</strong><br>" . nl2br($message) . "</p>";
        $body .= "</body></html>";

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Error: Unable to send message.";
        }
    } else {
        echo "Please fill in all fields.";
    }
}
?>
