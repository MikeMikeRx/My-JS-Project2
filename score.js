let bestPlayers = document.querySelector(".best-players")
let players = JSON.parse(localStorage.getItem("players")) || []
players.sort((a,b) => b.score - a.score)
    
players.forEach(player => {
    let p = document.createElement("p")
    p.textContent = `${player.name}: ${player.score} points`
    bestPlayers.appendChild(p)
});