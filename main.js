function init() {
    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.dataset.active === "true") {
                button.dataset.active = "false"
                return
            }
            buttons.forEach(btn => btn.dataset.active = "false")
            button.dataset.active = "true"
        })
    })
}

window.addEventListener("DOMContentLoaded", init)