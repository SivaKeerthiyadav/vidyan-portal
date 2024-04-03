<?php
// Start the session
session_start();

// Destroy all session data
session_destroy();

// Redirect to the login page or any other page as needed
header("Location: login.php"); // Replace "login.php" with the appropriate page
exit(); // Ensure that no other code is executed after the redirect
?>
