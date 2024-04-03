<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vidyaan-Rural Education Improvement</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-image: url('');
            background-size: cover;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            border: 2px solid deepskyblue;
        }

        h1 {
            text-align: center;
            color: #007BFF;
        }

        label {
            display: block;
            margin-bottom: 10px;
            color: #333;
        }

        input[type="text"],
        input[type="email"],
        input[type="mobile"],
        input[type="number"],
        textarea,
        select {
            width: 95%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        textarea {
            resize: vertical;
            height: 150px;
        }

        select {
            background-color: #f2f2f2;
        }

        button {
            background-color: #007BFF;
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;

        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Feedback Form</h1>
        <p>Complete the below form to send us your complaint and suggestion. Your complaint and suggestions will be very much appreciated. If you provide us with your contact information, we will be able to answer your questions.</p>
        <form action="https://sheetdb.io/api/v1/6iy6trcq39pal" method="post" id="sheetdb-form">
            <label for="name">Name*</label>
            <input type="text" id="name" name="data[name]" required>

            <label for="email">Email*</label>
            <input type="email" id="email" name="data[email]" required>

             <label for="mobile">Mobile*</label>
            <input type="mobile" id="mobile" name="data[mobile]" required>

            <label for="rating">Rating (1-5)*</label>
            <input type="number" id="rating" name="data[rating]" min="1" max="5" required>

            <label for="category">Feedback Category*</label>
            <select id="category" name="data[category]" placeholder="Select Category" required>
                <option value="General">General Information</option>
                <option value="Curriculum">Financial Information</option>
                <option value="Infrastructure">Contents and Resources</option>
                <option value="Other">Other</option>
            </select>

            <label for="message">Feedback:</label>
            <textarea id="message" name="data[message]" required></textarea>

            <button type="submit">Submit Feedback</button>
        </form>
    </div>
    <script>
      var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("sheetdb-form")),
            }).then(
                response => response.json()
            ).then((html) => {
                alert("Message sent successfully");
            });
        });
    </script>                 
</body>
</html>
