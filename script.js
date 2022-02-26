const ariaButton = document.getElementById("aria-button")
ariaButton.addEventListener("click", () => alert("Hi! Greetings from the accessible aria button!"))
ariaButton.addEventListener("keydown", e => {
    if (e.keyCode === 13) {
        alert("Hi! Greetings from the accessible aria button!")
    }
})