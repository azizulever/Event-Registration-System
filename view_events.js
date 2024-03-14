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
});
