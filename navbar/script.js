let bruh = document.querySelector("#navbarButton")

bruh.addEventListener("click", function() {
    toggle();
})

function toggle() {
    let x = document.getElementById("links");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}