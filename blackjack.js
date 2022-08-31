let player = {
    name: "Deola",
    chips: 175
} 
let cards = [] 
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById ("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
//1. Create a function, getRandomCard(), that always returns a random number 1-13
function getRandomCard() {

    let randomCard = Math.floor(Math.random() * 13 ) + 1  

    if (randomCard > 10) {
        return 10
    } 
    else if (randomCard === 1) {
        return 11
    } else {
        return randomCard 
    }
} 
   
// create a new function called startGame() that calls renderGame()

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    
    cardsEl.textContent = "cards: " 
    //create a for loop that renders out all the cards
    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <=20) {
        message = "Do you want to draw new card?"
    }
    else if (sum ===21) {
        message = "Whoo! You have blackjack"
        hasBlackJack = true
    } 
    else {
        message = " You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message 
    
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card
        cards.push(card);
        renderGame()
}
    }
    
 
