<?php
session_start();
require_once('db_connect.php');

function verifyUser($conn, $email, $password) {
    // Query the database to get the hashed password for the given email
    $stmt = $conn->prepare("SELECT password FROM registration WHERE email = ?");
    
    if ($stmt) {
        try {
            $stmt->execute([$email]);
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($row) {
                $hashedPassword = $row['password'];
                
                // Verify the provided password against the stored hash
                if (password_verify($password, $hashedPassword)) {
                    return true; // Passwords match
                } else {
                    return "Incorrect password.";
                }
            } else {
                return "Email not found.";
            }
        } catch (PDOException $e) {
            return "Database error: " . $e->getMessage();  
        }
    } else {
        return "Error in preparing the SQL statement.";
    }
}

if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validation (add more as needed)
    if (empty($email) || empty($password)) {
        $error = "Email and password are required fields.";
    } else {
        $verificationResult = verifyUser($conn, $email, $password);
        if (is_bool($verificationResult) && $verificationResult === true) {
            // Successful login - set a session variable to remember the user
            $_SESSION['logged_in'] = true;
            
            // You can also store user information in session for future use
            $_SESSION['user_email'] = $email;

            // Redirect to dashboard.php upon successful verification
            header("Location: dashboard.php");
            exit(); // Ensure that no other output is sent before the redirect
        } else {
            $error = $verificationResult;
        }
    }
}
?>



<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vidyan_portal</title>
    <!-- Add the correct path to your CSS file -->
    <link href="style.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:500" rel="stylesheet" type="text/css">
</head>
<body>
    <form action="login.php" method="POST">
        <div class="login">
            <div class="login-header">
                <h1>VIDYAAN</h1>
            </div>

            <div class="login-form">
                <h3>Useremail:</h3>
                <input type="text" placeholder="Useremail" name="email" id="email"><br>
                <h3>Password:</h3>
                <input type="password" placeholder="Password" name="password" id="password">  
                <br>
                <input type="submit" value="Login" class="login-button" name="submit" id="submit">
                <br>
                <a href="register.php" class="sign-up">Sign Up!</a>
                <br>
                <h6 class="no-access">Can't access your account?</h6>
            </div>
        </div>
    </form>
    <?php
    if (isset($error)) {
        echo '<div class="error">' . $error . '</div>';
    }
    ?>
</body>
</html>
