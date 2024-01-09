<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // You can add additional validation and processing here.

  // Example: Sending email
  $to = "your@email.com";
  $subject = "New Contact Form Submission";
  $headers = "From: $email";
  $mailBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  mail($to, $subject, $mailBody, $headers);

  // Return a response (JSON format)
  echo json_encode(["success" => true, "message" => "Form submitted successfully"]);
} else {
  // Return a response in case of incorrect request method
  echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
