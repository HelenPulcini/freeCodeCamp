document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll(".grid div")
    const result = document.querySelectorAll("#result")
    const displayCurrentPlayer = document.querySelectorAll("#current-player")
    let currentPlayer = 1

    for (let i = 0; i < squares.length; i++)
        (function (index) {
            squares[i].onclick = function () {
                if (squares[index + 7].classList.contains("taken")) {
                    if (currentPlayer === 1) {
                        squares[index].classList.add("taken")
                        squares[index].classList.add("player-one")
                        currentPlayer = 2
                        displayCurrentPlayer.innerHTML = currentPlayer
                    }
                    else if (currentPlayer === 2) {
                        squares[index].classList.add("taken")
                        squares[index].classList.add("player-two")
                        currentPlayer = 1
                        displayCurrentPlayer.innerHTML = currentPlayer
                    }
                    else alert("can't go here")

                }
            }
        }
    
    )})(i)