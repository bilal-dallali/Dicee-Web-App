const diceImageView1 = document.querySelector(".dice-image-view-1")
const diceImageView2 = document.querySelector(".dice-image-view-2")

const rollButtonPressed = document.querySelector(".roll-button")

let diceArray = ["img/dice6.png", "img/dice5.png", "img/dice4.png", "img/dice3.png", "img/dice2.png", "img/dice1.png"]

//Adding comment
rollButtonPressed.addEventListener("click", function() {
    let random1 = Math.floor(Math.random() * diceArray.length);
    let random2 = Math.floor(Math.random() * diceArray.length);
    let randomDice1 = diceArray[random1]
    let randomDice2 = diceArray[random2]
    diceImageView1.src = randomDice1
    diceImageView2.src = randomDice2
})