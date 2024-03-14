<?php
// Establish database connection
$servername = "localhost";
$username = "username"; // Replace with your MySQL username
$password = "password"; // Replace with your MySQL password
$database = "your_database"; // Replace with your database name

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch events
$sql = "SELECT * FROM events";
$result = $conn->query($sql);

$events = array();

if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        $events[] = $row;
    }
} else {
    echo "0 results";
}

// Close connection
$conn->close();

// Output events data in JSON format
header('Content-Type: application/json');
echo json_encode($events);
?>
