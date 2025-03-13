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

function goToSelectTickets() {
    window.location.href = "select-tickets.html";
}

function closeTrailer() {
    document.getElementById("trailerPopup").style.display = "none";
    document.getElementById("trailerFrame").src = "";
}
