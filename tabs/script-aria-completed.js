let allTabs = document.querySelectorAll("#tabs-list li")
let allTabPanels = document.querySelectorAll("#tabs-panel-wrapper div")

function tabClickHandler(e) {
    let targetTabPanel = e.target.getAttribute("data-target")
    openTabPanelHandler(targetTabPanel)
    allTabs.forEach(tab => {
        if (tab === e.target) {
            tab.classList.add("active")
            tab.setAttribute("aria-selected", "true")
            tab.setAttribute("tabindex", "0")
        } else {
            tab.classList.remove("active")
            tab.removeAttribute("aria-selected")
            tab.setAttribute("tabindex", "-1")
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

function keyboardEventHandler(e) {
    if (e.keyCode === 37 || e.keyCode === 38) {
        if (e.target.previousElementSibling) {
            e.target.previousElementSibling.click()
            e.target.previousElementSibling.focus()
        } else {
            allTabs[allTabs.length - 1].click()
            allTabs[allTabs.length - 1].focus()
        }
        return
    }
    if (e.keyCode === 39 || e.keyCode === 40) {
        if (e.target.nextElementSibling) {
            e.target.nextElementSibling.click()
            e.target.nextElementSibling.focus()
        } else {
            allTabs[0].click()
            allTabs[0].focus()
        }
        return
    }
}

allTabs.forEach(tab => {
    tab.addEventListener("click", tabClickHandler)
    tab.addEventListener("keydown", keyboardEventHandler)
})