const allCards = document.querySelectorAll('.game-card');
const cardsCells = document.querySelectorAll('.cell-card');
const cardsFunctions = document.querySelectorAll('.function-card');

let hasFlippedCard = false;
let lockMoves = false;
let firstCard, secondCard;

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
 (function shuffle() {
   cardsCells.forEach(card => {
     let randomPos = Math.floor(Math.random() * 8);
     card.style.order = randomPos;
   });
 })();

(function shuffle() {
   cardsFunctions.forEach(card => {
     let randomPos = Math.floor(Math.random() * 8);
     card.style.order = randomPos;
   });
 })();

/**
 * responds to a click event and then runs the flipCard function
 */
allCards.forEach(card => card.addEventListener('click', flipCard));