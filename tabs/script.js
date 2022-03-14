let getAllPanels = document.querySelectorAll("#tabs-panel-wrapper div")
let getAllTabs = document.querySelectorAll("#tabs-list li")
document.getElementById("tabs-list").addEventListener("click", e => {
    let isTab = e.target.getAttribute("data-target")
    if (isTab) {
        getAllPanels.forEach((panel) => {
            let isPanel = panel.getAttribute("id")
            if (isTab === isPanel) {
                panel.classList.remove("hidden")
                e.target.classList.add("active")
            } else {
                panel.classList.add("hidden")
            }
        })
    }
})