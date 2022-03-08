let wicketCounts = 0;
let scoreCounts = 0;
function getRandomArbitraryScore(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function renderNiceScore(country, scoreCounts, wicketCounts) {
    let scoreboardTemplate = `Current score: ${country} ${scoreCounts} runs per ${wicketCounts} wickets.`
    document.getElementById("sr-only-score-board").innerHTML = scoreboardTemplate
}

window.addEventListener("load", () => {
    const courseCounter = setInterval(courseHandler, 10000)
    function courseHandler() {
        if (wicketCounts === 10) {
            clearInterval(courseCounter)
            alert("Team is all out.")
        } else {
            let score = getRandomArbitraryScore(0, 8)
            if (score === 7) {
                wicketCounts++
                document.getElementById("wickets").innerHTML = wicketCounts
                renderNiceScore("India", scoreCounts, wicketCounts)
            } else {
                scoreCounts += score
                document.getElementById("runs").innerHTML = scoreCounts
                renderNiceScore("India", scoreCounts, wicketCounts)
            }
        }
    }
})