document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll(".grid div");
    const scoreDisplay = document.querySelector("span");
    const startBtn = document.querySelector(".start");

    const width = 20; //this corresponds to how many squares you have in each row
    let currentIndex = 0;
    let appleIndex = 0;
    let currentSnake = [2, 1, 0];
    let direction = 0;
    let score = 0;
    let speed = 0.9;
    let intervalTime = 0;
    let interval = 0;

    function startGame() {
        currentSnake.forEach(function (index) {
            squares[index].classList.remove("snake")
        });
        squares[appleIndex].classList.remove("apple");
        clearInterval(interval);
        score = 0;
        randomApple();
        direction = 1;
        scoreDisplay.innerText = score;
        intervalTime = 1000;
        currentSnake = [2, 1, 0];
        currentIndex = 0;
        currentSnake.forEach(function (index) {
            squares[index].classList.add("snake")
        });
        interval = setInterval(moveOutcomes, intervalTime);
    }

    // function moveOutcomes() {   use this shorter function if you don't want the alerts
    //     if (
    //         (currentSnake[0] + width >= (width * width) && direction === width) ||
    //         (currentSnake[0] % width === width - 1 && direction === 1) ||
    //         (currentSnake[0] % width === 0 && direction === -1) ||
    //         (currentSnake[0] - width < 0 && direction === -width) ||
    //         squares[currentSnake[0] + direction].classList.contains("snake")
    //     ) {
    //         return clearInterval(interval)
    //     };

    function moveOutcomes() {
        if ((currentSnake[0] + width >= (width * width) && direction === width)) {
            alert("Oh no! You've crashed to the bottom. Please restart.")
            return clearInterval(interval)
        }
        else if (currentSnake[0] % width === width - 1 && direction === 1) {
            alert("Oh no! You've crashed into the right wall. Please restart.")
            return clearInterval(interval)
        }
        else if (currentSnake[0] % width === 0 && direction === -1) {
            alert("Oh no! You've crashed into the left wall. Please restart.")
            return clearInterval(interval)
        }
        else if (currentSnake[0] - width < 0 && direction === -width) {
            alert("Oh no! You've crashed into the top wall. Please restart.")
            return clearInterval(interval)
        }
        else if (squares[currentSnake[0] + direction].classList.contains("snake")) {
            alert("Oh no! You've crashed into yourself. Please restart.")
            return clearInterval(interval)
        }
    


    const tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);

    if (squares[currentSnake[0]].classList.contains("apple")) {
        squares[currentSnake[0]].classList.remove("apple")
        squares[tail].classList.add("snake")
        currentSnake.push(tail)
        randomApple()
        score++
        scoreDisplay.textContent = score
        clearInterval(interval)
        intervalTime = intervalTime * speed
        interval = setInterval(moveOutcomes, intervalTime)
    };
    squares[currentSnake[0]].classList.add("snake")
}

    function randomApple() {
        do {
            appleIndex = Math.floor(Math.random() * squares.length)
        }
        while (squares[appleIndex].classList.contains("snake")) {
            squares[appleIndex].classList.add("apple")
        }
    }

    function control(e) {
        squares[currentIndex].classList.remove("snake")
        if (e.keyCode === 39) {
            direction = 1
        }
        else if (e.keyCode === 38) {
            direction = -width
        }
        else if (e.keyCode === 37) {
            direction = -1
        }
        else if (e.keyCode === 40) {
            direction = +width
        }
    }

    document.addEventListener("keyup", control)
    startBtn.addEventListener("click", startGame)

})