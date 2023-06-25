const allCards = document.querySelectorAll('.game-card');
const cardsCells = document.querySelectorAll('.cell-card');
const cardsFunctions = document.querySelectorAll('.function-card');
const movesElement = document.querySelector('#move-counter');
const timeElement = document.querySelector('#timer');
const restartBtn = document.getElementById('restartBtn');

let hasFlippedCard = false;
let lockMoves = false;
let firstCard, secondCard;
let moves = 0;

/**
 * functions for the move counter - adding to and reseting the number
 */
function moveCounter() {  
  moves++;  // adds 1 move to the counter
  movesElement.innerHTML = moves;  // displays the increasing move number in the html 'move-counter' span 
}

function resetCounter() {  
  moves = 0;  // resets the move counter to 0
  movesElement.innerHTML = moves;  // displays the reset counter as '0' in the html

}

/**
 * flips and stores the first and second clicked cards 
 * before checking if they are a match
 */
function flipCard() {
  if (lockMoves) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first card click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
    // second card click
    secondCard = this;

    checkForMatch();
}

/**
 * checks the two clicked cards for a match  
 */
function checkForMatch() {
  let cardMatch = firstCard.dataset.match === secondCard.dataset.match;

  cardMatch ? disableCards() : unflipCards();
}

/**
 * if there is a match, then the cards are disabled from flipping back
 */
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();

    moveCounter(); // add a move to the counter
}

/**
 * if cards are not a match, then they are flipped back after a timeout delay 
 */
function unflipCards() {
  lockMoves = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 2000);

  moveCounter(); // adds a move to counter
}

/**
 * reset the flipped card pairs after each round 
 */
function resetBoard() {
  [hasFlippedCard, lockMoves] = [false, false];
  [firstCard, secondCard] = [null, null];
}

/**
 * shuffle each set of cards based on its type: either cell image / function
 * within the separate game card containers
 */

function shuffle(cards) {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 8);
    card.style.order = randomPos;
  });
}

shuffle(cardsCells);
shuffle(cardsFunctions);

/**
 * responds to a click event and then runs the flipCard function
 */
allCards.forEach(card => card.addEventListener('click', flipCard));

// restart game event listener and restartGame button function to call restarGame function

restartBtn.onclick = function() {   // function to reset and restart game 
    restartGame(); // calls the restartGame function
};

/**
 * resets and restarts the game
 */

function restartGame() {
  location.reload()
}
