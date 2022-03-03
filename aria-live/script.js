let wicketCounts = 0;
let scoreCounts = 0;
function getRandomArbitraryScore(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
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
            } else {
                scoreCounts += score
                document.getElementById("runs").innerHTML = scoreCounts
            }
        }
    }
})