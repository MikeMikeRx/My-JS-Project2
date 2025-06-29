//Index 
// Lauch game        
    let start = ()=>{
            window.location.href = "quiz.html"        
    }
//Local storage functions
    let saveToLS = ()=>{
        localStorage.setItem("players", JSON.stringify(players))
    }
    //Local storage helper
    let loadFromLS = ()=>{
        return JSON.parse(localStorage.getItem("players")) || []
    }

//Message Alert
    function showMessage(location, message, duration = 2000){
        const box = document.getElementById(location)
        box.textContent = message
        box.style.display ="block"

        setTimeout(() => {
            box.style.display = "none"
            box.textContent = ""
        },duration)
    }


//Countdown
const timer = ()=>{

let timeLeft = 90

const countdownEL = document.getElementById("countdown")
const countdownTimer = setInterval(()=>{
    timeLeft--
    countdownEL.textContent = timeLeft
    const time = document.querySelector(".time p")
    
    if(timeLeft <= 10){
        time.style.color = "red"
    }

    if(timeLeft <= 0){
        clearInterval(countdownTimer)
        time.textContent = "Time:"
        
        showMessage("message-box-quiz", "!!!! Time's up !!!!", 5000)
        setTimeout(() => {
            window.location.href = "index.html"
        },5000)                
    }
},1000)
}

//Finish quiz
function finishQuiz(){
    currentPlayer.score = score

    let players = JSON.parse(localStorage.getItem("players")) || []
    players = players.map(player =>
        player.name === currentPlayer.name ? currentPlayer : player
    )

    localStorage.setItem("players", JSON.stringify(players))
    localStorage.setItem("currentPlayer", JSON.stringify(currentPlayer))

    showMessage("message-box-score", `Quiz complete! Final score: ${score}`, 5000)
    
    setTimeout(() => {
        window.location.href = "score.html"
    },5000) 

}

//For random questions - needs update the code first
function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
}
