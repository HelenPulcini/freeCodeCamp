document.addEventListener("DOMContentLoaded", function () {

    const cardArray = [  //all card objects are in here in pairs
        {
            card: "footblue",
            img: "/Cards match/Images/Colour/footblue.png"
        },
        {
            card: "footblue",
            img: "/Cards match/Images/Colour/footblue.png"
        },

        {
            card: "footpink",
            img: "/Cards match/Images/Colour/footpink.png"
        },
        {
            card: "footpink",
            img: "/Cards match/Images/Colour/footpink.png"
        },

        {
            card: "hand",
            img: "/Cards match/Images/Colour/hand.png"
        },
        {
            card: "hand",
            img: "/Cards match/Images/Colour/hand.png"
        },

        {
            card: "heart",
            img: "/Cards match/Images/Colour/heart.png"
        },
        {
            card: "heart",
            img: "/Cards match/Images/Colour/heart.png"
        },

        {
            card: "moon",
            img: "/Cards match/Images/Colour/moon.png"
        },
        {
            card: "moon",
            img: "/Cards match/Images/Colour/moon.png"
        },

        {
            card: "pawblue",
            img: "/Cards match/Images/Colour/pawblue.png"
        },
        {
            card: "pawblue",
            img: "/Cards match/Images/Colour/pawblue.png"
        },

        {
            card: "pawpink",
            img: "/Cards match/Images/Colour/pawpink.png"
        },
        {
            card: "pawpink",
            img: "/Cards match/Images/Colour/pawpink.png"
        },

        {
            card: "star",
            img: "/Cards match/Images/Colour/star.png"
        },
        {
            card: "star",
            img: "/Cards match/Images/Colour/star.png"
        },

        {
            card: "worldblue",
            img: "/Cards match/Images/Colour/worldblue.png"
        },
        {
            card: "worldblue",
            img: "/Cards match/Images/Colour/worldblue.png"
        },

        {
            card: "worldgreen",
            img: "/Cards match/Images/Colour/worldgreen.png"
        },
        {
            card: "worldgreen",
            img: "/Cards match/Images/Colour/worldgreen.png"
        }
    ]

    cardArray.sort(function () {
        return Math.random() - 0.5
    })

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    let carteChosen = []
    let carteChosenId = []
    let carteWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let carta = document.createElement("img")
            carta.setAttribute("src", "/Cards match/Images/blank.png")
            carta.setAttribute("data-id", i)
            carta.addEventListener("click", flipCard)
            grid.appendChild(carta)
        }
    }

    function checkForMatch() {
        let carte = document.querySelectorAll("img")
        const optionOneId = carteChosenId[0]
        const optionTwoId = carteChosenId[1]
        if (carteChosenId[0] === carteChosenId[1]) {
            alert("You found a match!")
            carte[optionOneId].setAttribute("src", "/Cards match/Images/white.png")
            carte[optionTwoId].setAttribute("src", "/Cards match/Images/white.png")
            carteWon.push(carteChosen)
        }
        else {
            carte[optionOneId].setAttribute("src", "/Cards match/Images/blank.png")
            carte[optionTwoId].setAttribute("src", "/Cards match/Images/blank.png")
            alert("Sorry, Try again!")
        }

        carteChosen = []
        carteChosenId = []
        resultDisplay.innerHTML = carteWon.length
        if (carteWon.length === cardArray.length / 2) {
            resultDisplay.innerHTML = "Congratulations!!!"
        }
    }

    function flipCard() {
        let cardId = this.getAttribute("data-id")
        carteChosen.push(cardArray[cardId].name)
        carteChosenId.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if (carteChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})