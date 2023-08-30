let toggleTime = document.querySelector("#toggle-time");

toggleTime.addEventListener("click", function() {
    toggle();
})

function toggle() {
    let x = document.getElementById("side-bar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}