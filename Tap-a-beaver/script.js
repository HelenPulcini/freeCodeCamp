const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeleft = document.querySelector("#timeleft")
const startBtn = document.querySelector(".start");

let score = document.querySelector("#score")
let result = 0
let currentTime = timeleft.innerHTML
let timerId = null

function startGame() {
    result = 0
    score.innerHTML = result
    moveMole()
    function countDown() {
        currentTime--
        timeleft.innerHTML = currentTime
    
        if (currentTime === 0) {
            clearInterval(countDownTimerId)
            clearInterval(timerId)
            alert("WELL DONE! Your final score is " + result)
            currentTime = 15
        }
    }
    let countDownTimerId = setInterval(countDown, 1000)
}

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole")
    })
    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add("mole")

    hitPosition = randomPosition.id
}

squares.forEach(id => {
    id.addEventListener("click", () => {
        if (id.id === hitPosition) {
            result++
            score.innerHTML = result
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 1000)
}

//moveMole();  //if you call the function here and don't have a start btn it will start on load

startBtn.addEventListener("click", startGame)


