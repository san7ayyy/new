const posters = document.querySelectorAll(".poster");
const modal = document.getElementById("modal");

posters.forEach(poster => {
    poster.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

function closeModal() {
    modal.style.display = "none";
}


