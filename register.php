<?php
session_start(); 

$conn = new mysqli('localhost', 'root', '', 'sih');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['submit'])) {
    $aictecode = $_POST['aictecode'];
    $clgname = $_POST['clgname'];
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $state = $_POST['state']; // Make sure you collect this from your form
    $district = $_POST['district']; // Make sure you collect this from your form
    $mobileno = $_POST['mobileno'];
    $password = $_POST['password'];

    // Validate inputs (add more validation as needed)
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address";
        exit();
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Prepare and execute an SQL statement to insert the data
    $aictecode = 12345;  // Replace with the actual value
    $sql = "INSERT INTO registration (aictecode, clgname, firstname, lastname, email, state, district, mobileno, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("issssssss", $aictecode, $clgname, $firstname, $lastname, $email, $state, $district, $mobileno, $password);
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("issssssss", $aictecode, $clgname, $firstname, $lastname, $email, $state, $district, $mobileno, $hashedPassword);

        if ($stmt->execute()) {
            // Data was successfully inserted
            $_SESSION['upload_success'] = "Data uploaded successfully.";
            header("Location: dashboard.php");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Error in preparing the SQL statement: " . $conn->error;
    }

    $conn->close(); // Close the database connection
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title Here</title>
    <link href="style.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:500" rel="stylesheet" type="text/css">


</head>

<body>


    <form action="register.php" method="POST" onsubmit="return validateForm()">
        <div class="login">
            <div class="login-header">
                <h1>AICTE PORTAL</h1>
            </div>
            <div class="login-form">
                <h3>AICTE code</h3>
                <input type="number" placeholder="aicte code" name="aictecode" id="name" required><br>
                <h3>College Name</h3>
                <input type="text" placeholder="college name" name="clgname" id="clgname" required><br>
                <h3>First Name</h3>
                <input type="text" placeholder="first name" name="firstname" id="firstname" required><br>
                <h3>Last Name</h3>
                <input type="text" placeholder="last name" name="lastname" id="lastname" required><br>
                <h3>Email</h3>
                <input type="email" placeholder="email" name="email" id="email" required><br>
                <h3>State</h3>
                <select name="state" id="state" required onchange="loadDistricts()">
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh"> Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat"> Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh"> Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttarakhand<">Uttarakhand</option>
                    <option value="West Bengal">West Bengal </option>

                </select><br>

                <h3>District</h3>
                <select name="district" id="district" required>
                    <option value="">Select District</option>
                </select><br>
                <script src="district.js">
                </script>


                <h3>Mobile No</h3>
                <input type="number" placeholder="mobile no" name="mobileno" id="mobileno" required><br>
                <h3>Password</h3>
                <input type="password" placeholder="password" name="password" id="password" required><br>

                <!-- Add State Dropdown -->


                <input type="submit" value="Register" class="login-button" name="submit" id="submit"><br>
                <a href="login.php" class="sign-up">Login!</a><br>

            </div>
        </div>
    </form>

</body>

</html>