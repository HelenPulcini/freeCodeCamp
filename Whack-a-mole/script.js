const square = document.querySelectorAll(".square")
const mole = document.querySelectorAll(".mole")
const timeleft = document.querySelectorAll("#timeleft")
let score = document.querySelectorAll("#score")
let result = 0
let currentTime = timeleft.innerHTML


function randomSquare() {
    square.forEach(className =>{
        className.classList.remove("mole")
    })
    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add("mole")

    hitPosition = randomPosition.id
}

square.forEach(id=>{
    id.addEventListener("click",()=>{
        if (id.id === hitPosition) {
            result = result +1
            score.innerHTML = result
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveMole();

function countDown() {
    currentTime--
    timeleft.innerHTML = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert("GAME OVER! Your final score is" + result)
    }
}

let timerId = setInterval(countDown, 1000)
