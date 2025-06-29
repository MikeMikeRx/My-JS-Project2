//Index page
let players = JSON.parse(localStorage.getItem("players")) || []

const quiz = document.querySelector("#form").addEventListener("submit", (e)=>{
    e.preventDefault()

    let playerName = e.target.elements.input.value.trim()
    
    if(!playerName){
        showMessage("message-box-index", "Please Type Your Name !!!", 1000)
    return}


    let existingPlayer = players.find(p => p.name.toLowerCase() === playerName.toLowerCase())

    if(!existingPlayer){
    const newPlayer = {name: playerName, score: 0}
    players.push(newPlayer)
    existingPlayer = newPlayer
    }

    saveToLS()

    localStorage.setItem("currentPlayer", JSON.stringify(existingPlayer))

    e.target.elements.input.value = ""

    start()
})


