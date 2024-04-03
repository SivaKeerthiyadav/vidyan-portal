<!DOCTYPE html>
<html>
<head>
<title>Vidyan Video learning</title>
<meta charset="utf-8">

<style>
  #overallProgress {
    text-align: center;
    font-size: 18px;
    color: red;
    margin-top: 20px;
  }
  #progressChartContainer {
    float: right; /* Move the chart to the right */
    margin-top: 30px;
    margin-right: 20px; /* Add some margin for spacing */
  }
  #progressChart {
    width: 400px; /* Increase the chart size */
    height: 400px;
  }
</style>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
<div id="progressChartContainer">
  <canvas id="progressChart"></canvas>
</div>
<script>
  var overallProgress = 0;
  var progressData = [0, 100]; // Initial data for the pie chart (0% completed)

  // JavaScript code for updating overall progress
  function updateOverallProgress(progressToAdd) {
    overallProgress += progressToAdd;
    var overallProgressElement = document.getElementById("overallProgress");
    overallProgressElement.textContent = "Overall Progress: " + overallProgress + "%";

    // Update the pie chart data
    progressData[0] = overallProgress;
    progressData[1] = 100 - overallProgress;
    progressChart.update();
  }

  // Create the pie chart
  var ctx = document.getElementById("progressChart").getContext("2d");
  var progressChart = new Chart(ctx, {
    type: "doughnut", // Use doughnut chart for a smaller size
    data: {
      labels: ["Completed", "Remaining"],
      datasets: [{
        data: progressData,
        backgroundColor: ["#36A2EB", "#FFCE56"],
      }],
    },
    options: {
      responsive: false, // Disable responsiveness for a fixed size
    },
  });
</script>
</body>
</html>