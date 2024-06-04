minutes = document.getElementById("minutes")
button = document.getElementById("button")
result = document.getElementById("result")

function convertMinutesToSeconds(minutes) {
    result.html = minutes * 60; 
}

button.addEventListener("click", convertMinutesToSeconds(minutes.value))