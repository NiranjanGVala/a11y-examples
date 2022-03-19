let allTabs = document.querySelectorAll("#tabs-list li")
let allTabPanels = document.querySelectorAll("#tabs-panel-wrapper div")

function tabClickHandler(e) {
    let targetTabPanel = e.target.getAttribute("data-target")
    openTabPanelHandler(targetTabPanel)
    allTabs.forEach(tab => {
        if (tab === e.target) {
            tab.classList.add("active")
        } else {
            tab.classList.remove("active")
        }
    })
}

function openTabPanelHandler(targetTabPanel) {
    allTabPanels.forEach(tabPanel => {
        if (targetTabPanel === tabPanel.id) {
            tabPanel.classList.remove("hidden")
        } else {
            tabPanel.classList.add("hidden")
        }
    })
}

allTabs.forEach(tab => {
    tab.addEventListener("click", tabClickHandler)
})