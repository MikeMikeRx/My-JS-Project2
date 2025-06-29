const questions = [
    {
        text: "Who is the last human alive ?",
        options: ["Rimmer", "Cat", "Lister", "Kryten"],
        correct: 2
    },
    {
        text: "What is Arnold Rimmer's middle name?",
        options: ["Jonathan", "Judas", "James", "Joseph"],
        correct: 1
    },
    {
        text: "What is the name of the Inquisitor's time-manipulating gauntlet?",
        options: ["The Time Glove", "The Chronos Gauntlet", "The Hand of Judgment", "The Epoch Glove"],
        correct: 0
    },  
    {
        text: "In the episode `Marooned`, what does Rimmer burn to keep himself and Lister from freezing to death?",
        options: ["The ship's supply of rubber pants", "Lister's guitar", "A copy of the Space Corps Directives", "His collection of 20th-century war figures"],
        correct: 3
    },
    {
        text: "What is Ace Rimmer's famous, dashing catchphrase?",
        options: ["Better smeg than dead.", "Smoke me a kipper, I'll be back for breakfast.", "Time for action.","Let's do it!" ],
        correct: 1
    },
    {
        text: "Which character is a hologram of a deceased crew member?",
        options: ["Arnold Rimmer", "Dave Lister", "Cat", "Kryten"],
        correct: 0
    },
    {
        text: "What is Lister's ambition for when he returns to Earth?",
        options: ["To become rich and famous", "To open a theme park called 'Listerworld'", " To start a fast-food chain called 'Curryworld'", " To get a girlfriend and settle down"],
        correct: 3
    },    
    {
        text: "What is the name of Dave Lister's favourite curry?",
        options: ["Chicken Vindaloo", "Chicken Korma", "Lamb Rogan Josh", "Beef Madras"],
        correct: 0
    },    
    {
        text: "Which space corps directive prevents fraternization with non-humanoids?",
        options: ["Space Corps Directive 1742", "Space Corps Directive 34124", "Space Corps Directive 196156", "Space Corps Directive 749"],
        correct: 2
    },    
    {
        text: "What is the name of the ship whose computer, Gordon, engages Holly in a game of postal chess?",
        options: ["The S.S. Nostromo", "The S.S. F. Scott Fitzgerald", "The S.S. Heart of Gold", "The S.S. Starship Enterprise"],
        correct: 1
    },    
    {
        text: "What was Arnold Rimmer’s job on Red Dwarf before he died?",
        options: ["Captain", "Navigator", "Second Technician", "Sanitation Officer"],
        correct: 2
    },    
    {
        text: "What is Kryten's designation number?",
        options: ["Kryten 2Q4B-2000", "Kryten 2C4B-2000", "Kryten 2R4B-749P", "Kryten 2X4B-523P"],
        correct: 1
    }   
]

let shuffledQuestions = questions.sort(() => Math.random() - 0.5)

timer()

let currentIndex = 0
let score = 0
let currentPlayer = JSON.parse(localStorage.getItem("currentPlayer"))

if(!currentPlayer){
    alert("No player data found")
    window.location.href = "index.html"
}

function loadQuestion(){
    const q = questions[currentIndex]
    document.getElementById("question-title").textContent = `Question ${currentIndex + 1}`
    document.getElementById("question-text").textContent = q.text

    const buttons = document.querySelectorAll(".answer-btn")

    buttons.forEach((btn, i) =>{
        btn.classList.remove("btn-correct", "btn-wrong")
        btn.textContent = q.options[i]
        btn.onclick = () => handleAnswer(i)

        btn.style.backgroundColor = ""
        btn.style.color = ""
        btn.style.borderColor = ""
        btn.blur()
    })
}

function handleAnswer(selectedIndex) {
    //Turns correct answer green
    const correctIndex = questions [currentIndex].correct
    const buttons = document.querySelectorAll(".answer-btn")

    buttons.forEach(btn => {
        btn.classList.remove("btn-correct", "btn-wrong")
        btn.blur() 
    })

    if(selectedIndex === correctIndex){
        buttons[selectedIndex].classList.add ("btn-correct")        
        score += 100
        document.getElementById("score").textContent = score
    } else {
        buttons[selectedIndex].classList.add("btn-wrong")
        buttons[correctIndex].classList.add("btn-correct")
    }

    // Short delay before moving to next question
    setTimeout (()=> {
    currentIndex++
    if (currentIndex < questions.length){
        loadQuestion()
    } else {
        finishQuiz()
    }
    }, 1000)
}


loadQuestion()