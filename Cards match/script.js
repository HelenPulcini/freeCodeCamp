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
    let carteChosenIds = []
    const carteWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const carta = document.createElement("img")
            carta.setAttribute("src", "/Cards match/Images/blank.png")
            carta.setAttribute("data-id", i)
            carta.addEventListener("click", flipCard)
            grid.appendChild(carta)
        }
    }

    function flipCard() {
        const cardId = this.getAttribute("data-id") // this - refers to whatever you click
        carteChosen.push(cardArray[cardId].card) // this gets the name of the cards we've given in the cardArray (which we called card :"") and pushes it in the empty carteChosen array
        carteChosenIds.push(cardId) // this is another empty array in which we will store the ids (0,1,2...) which we will use to check for match
        this.setAttribute("src", cardArray[cardId].img)
        if (carteChosen.length === 2) {  //when 2 cards are in the array we want the checkForMatch function to kick in
            setTimeout(checkForMatch, 500)
        }
    }


    function checkForMatch() {
        let carte = document.querySelectorAll("img")
        const optionOneId = carteChosenIds[0]
        const optionTwoId = carteChosenIds[1]
        if (optionOneId === optionTwoId) {
            carte[optionOneId].setAttribute("src", "/Cards match/Images/blank.png")
            carte[optionTwoId].setAttribute("src", "/Cards match/Images/blank.png")
            alert("You have clicked the same card")
        }
        if (carteChosen[0] === carteChosen[1] && optionOneId != optionTwoId) {  //the && is to avoid that clicking the same card gives you a match
            alert("You found a match!")
            carte[optionOneId].setAttribute("src", "/Cards match/Images/white.png")
            carte[optionTwoId].setAttribute("src", "/Cards match/Images/white.png")
            carte[optionOneId].removeEventListener("click", flipCard)
            carte[optionTwoId].removeEventListener("click", flipCard)
            carteWon.push(carteChosen)
        }
        else {
            carte[optionOneId].setAttribute("src", "/Cards match/Images/blank.png")
            carte[optionTwoId].setAttribute("src", "/Cards match/Images/blank.png")
            alert("Sorry, Try again!")
        }

        carteChosen = []
        carteChosenIds = []

        resultDisplay.innerHTML = carteWon.length

        if (carteWon.length === cardArray.length / 2) {
            resultDisplay.innerHTML = "Congratulations!!!"
        }
    }

    createBoard()

})