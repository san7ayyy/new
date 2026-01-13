function toggleTheme() {
    document.body.classList.toggle("dark");
}

function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function toggleAcc(el) {
    let p = el.querySelector("p");
    p.style.display = p.style.display === "block" ? "none" : "block";
}

function validateForm(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
    } else {
        showToast();
    }
}

function loadProgress() {
    document.getElementById("bar").style.width = "100%";
}

function showToast() {
    let toast = document.getElementById("toast");
    toast.style.display = "block";
    setTimeout(() => toast.style.display = "none", 3000);
}

