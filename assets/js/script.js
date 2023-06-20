const cards = document.querySelectorAll('.game-card');

let hasFlippedCard = false;
let lockMoves = false;
let firstCard, secondCard;

/**
 * flips and stores the first and second clicked cards 
 * before checking if they are a match
 */
function flipCard() {
  if (lockMoves) return;
  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first card click
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
    // second card click
    hasFlippedCard = false;
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
}

/**
 * if cards are not a match, then they are flipped back after a timeout delay 
 */
function unflipCards() {
  lockMoves = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    lockMoves = false;
  }, 2000);
}

/**
 * responds to a click event and then runs the flipCard function
 */
cards.forEach(card => card.addEventListener('click', flipCard));