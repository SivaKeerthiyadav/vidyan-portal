<?php 
session_start();

if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Panel</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
  <link rel="stylesheet" href="styles.css">
  <style>
  </style>
</head>
<body>
  <div class="main">
    <div class="navbar-side">
      <h6>
        <span class="icon"><i class="fas fa-code"></i></span>
        <span class="link-text">Admin</span>
      </h6>
      <ul>
        <li>
          <a href="#" class="link-active" title="Dashboard">
            <span class="icon"><i class="fas fa-chart-bar"></i></span>
            <span class="link-text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="textbook.php" title="Project Resource">
            <span class="icon"><i class="fas fa-comment"></i></span>
            <span class="link-text">Study Materials</span>
          </a>
        </li>
        <li>
          <a href="educationhub.php" title="Curriculum Planning">
            <span class="icon"><i class="fas fa-user-circle"></i></span>
            <span class="link-text">Educationhub</span>
          </a>
        </li>
        <li>
          <a href="achievements.php" title="Content Development">
            <span class="icon"><i class="fas fa-user-circle"></i></span>
            <span class="link-text">Communication</span>
          </a>
        </li>
        <li>
          <a href="quote.php" title="Assessment & Evaluation">
            <span class="icon"><i class="fas fa-quote-left"></i></span>
            <span class="link-text">Student Innovation</span>
          </a>
        </li>
        <li>
          <a href="quote.php" title="Assessment & Evaluation">
            <span class="icon"><i class="fas fa-quote-left"></i></span>
            <span class="link-text">Help and Support</span>
          </a>
        </li>
        <li>
          <a href="crud_flashnews.php" title="Collaboration">
            <span class="icon"><i class="fas fa-database"></i></span>
            <span class="link-text">Innovation</span>
          </a>
        </li>
        <li>
          <a href="feedback.php" title="Curriculum Templates">
            <span class="icon"><i class="fas fa-database"></i></span>
            <span class="link-text">Feedback</span>
          </a>
        </li>
        <li>
          <a href="crud_achievements.php" title="Profile">
            <span class="icon"><i class="fas fa-database"></i></span>
            <span class="link-text">Resource</span>
          </a>
        </li>
        <li>
          <a href="logout.php" title="Profile">
            <span class="icon"><i class="fas fa-database"></i></span>
            <span class="link-text">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="content">
    <nav class="navbar navbar-dark bg-dark py-1">
      <a href="dashboard.php" id="navBtn">
        <span id="changeIcon" class="fas fa-bars text-light"></span>
      </a>
      <div class="d-flex">
        <a class="nav-link text-light px-2" href="logout.php"><i class="fas fa-sign-out-alt"></i></a>
      </div>
    </nav>
    <div class="container-fluid">
      <!-- Your content goes here -->
      <div style="background-color:#FFD700"class="row">
        <div class="col-lg-12 p-2">
        <div class="jumbotron rounded-0" style="background-color: #FFD700; padding: 20px;">
    <h1 class="display-4" style="color:#8b008b"><b>Welcome to the Vidyaan</b></h1>
    <p class="lead" style="color: #343a40;"><b>Quality of Education in Rural Areas</b></p>
    <hr class="my-4" style="border-color: #343a40;">
    <p style="color: #343a40;">
        <b>Children in rural areas often speak a different language than the one used in schools, leading to communication barriers and poor learning outcomes. Providing education in the child's mother tongue can help to overcome these barriers and improve learning outcomes.</b>
    </p>
    <p style="color: #343a40;">  
        <b>Children in rural areas remain deprived of quality education owing to factors such as lack of competent and committed teachers, shortage of textbooks or teaching-learning material, among other things.</b>
    </p>  
</div>
        </div>  
      </div>
      <div style="background-color:#FFD700" class="row">
        <div class="col-lg-12 p-2">
          <div class="jumbotron rounded-0" style="background-color: #f8f9fa; padding: 20px;">
            <h2 class="display-4" style="color: 	#8b008b"><b>What We Offer</b></h2>
            <hr class="my-4" style="border-color: #343a40;">
            <p style="color: #343a40;">
  - <strong>Rural Education Enhancement:</strong> We are committed to enhancing the quality of education in rural areas,
  ensuring equitable access to high-quality educational resources.
</p>
<p style="color: #343a40;">
  - <strong>Scholarships and Educational Support:</strong> Explore our scholarship programs and educational support resources
  designed to empower students in rural communities.
</p>
<p style="color: #343a40;">
  - <strong>Customized Curriculum Development:</strong> Find guidance on tailoring curriculum development to meet the unique
  needs of rural students, fostering their growth and success.
</p>
<p style="color: #343a40;">
  - <strong>Research and Innovation in Rural Education:</strong> Stay informed about the latest research and innovative practices
  aimed at elevating rural education standards and outcomes.
</p>
<p style="color: #343a40;">
  - <strong>Community Collaborations:</strong> Discover collaboration opportunities with local communities, educational institutions,
  and government agencies to bring quality education to rural areas.
</p>

          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
  <script src="script.js"></script>
</body>

</html>
