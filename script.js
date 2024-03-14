document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch events from the server and display them
    function fetchEvents() {
        fetch("get_events.php")
            .then(response => response.json())
            .then(data => {
                const eventsList = document.getElementById("eventsList");
                eventsList.innerHTML = "";
                data.forEach(event => {
                    const eventDiv = document.createElement("div");
                    eventDiv.classList.add("event");
                    eventDiv.textContent = `${event.event_name} - ${event.event_datetime}`;
                    eventsList.appendChild(eventDiv);
                });
            })
            .catch(error => console.error("Error fetching events:", error));
    }

    // Fetch events when the page loads
    fetchEvents();

    // Event listener for form submission
    document.getElementById("eventForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch("add_event.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log("Event added successfully:", data);
            fetchEvents();
        })
        .catch(error => console.error("Error adding event:", error));
    });
});
