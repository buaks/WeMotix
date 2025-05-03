document.addEventListener("DOMContentLoaded", function () {
    // Update the date automatically
    const dateElements = document.querySelectorAll(".movie-date");
    const today = new Date();
    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    const formattedDate = today.toLocaleDateString("en-US", options);

    dateElements.forEach((el) => (el.textContent = formattedDate));

    // Add event listeners to posters for trailer popup
    document.querySelectorAll(".movie-poster").forEach((poster) => {
        poster.addEventListener("click", function () {
            const trailerUrl = this.closest(".movie-card").getAttribute("data-trailer");
            document.getElementById("trailerFrame").src = trailerUrl;
            document.getElementById("trailerPopup").style.display = "flex";
        });
    });
});

function captainamerica(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `CAPTAIN AMERICA TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function superman(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `SUPERMAN TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function jurassic(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `JURASSIC WORLD TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function dragon(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `Dragon TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function F4(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `Dragon TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function Untold(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `Untold TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function Balota(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `Balota TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function Care(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `Caretakers TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function Hello(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `Hello TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}

function Love(time) {
    const movieCard = event.target.closest(".movie-card");
    const movieTitle = movieCard.querySelector(".movie-title").textContent;
    window.location.href = `Love TIX.html?title=${encodeURIComponent(movieTitle)}&time=${encodeURIComponent(time)}`;
}


function closeTrailer() {
    document.getElementById("trailerPopup").style.display = "none";
    document.getElementById("trailerFrame").src = "";
}

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitle = urlParams.get("title");
    const movieTime = urlParams.get("time");

    // Update the placeholders in the HTML
    if (movieTitle) {
        document.querySelector(".movie-title").textContent = movieTitle;
    }

    if (movieTime) {
        document.querySelector(".movie-time").textContent = `Selected Time: ${movieTime}`;
    }
});

 // Function to update the selected time dynamically
 function selectTime(time) {
    document.querySelector(".movie-time").textContent = `Selected Time: ${time}`;
}