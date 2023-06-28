/**
 * coding support for main functioning of the game and flip features (adapted for use): https://marina-ferreira.github.io/tutorials/js/memory-game/
 */

const allCards = document.querySelectorAll('.game-card');
const cardsCells = document.querySelectorAll('.cell-card');
const cardsFunctions = document.querySelectorAll('.function-card');
const movesElement = document.querySelector('#move-counter');
const timerElement = document.querySelector('#timer');
const restartBtn = document.getElementById('restartBtn');
const helpModalBtn = document.getElementById('helpModalBtn');
const completePairs = 8;

let gameStart = false;
let hasFlippedCard = false;
let lockMoves = false;
let firstCard, secondCard;
let moves = 0;
let matchedPairs = 0;

/**
 * functions for the move counter - adding to and reseting the number
 * coding support: https://dev.to/javascriptacademy/creating-a-memory-card-game-with-html-css-and-javascript-57g1 
 */
function moveCounter() {  
  moves++;  // adds 1 move to the counter
  movesElement.innerHTML = moves;  // displays the increasing move number in the html 'move-counter' span 
}

/**
 * declarations and functions for the updating the timer during gameplay (triggered after first card click)
 * coding support: https://moirahartigan.github.io/Portfolio-2---Alien-Memory-Game/, 
 * https://www.w3schools.com/js/js_timing.asp and https://codepen.io/FoxyStoat/pen/erzLMG 
 */
let time;
let minutes = 0;
let seconds = 0;
let startTimer = false;

function timer() {
  //sets the time interval to update for each 1 second
  time = setInterval(function() {
    seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

  // while active, adds the time taken to play the game in html
  timerElement.innerHTML = "<i class='fa-regular fa-hourglass-clock'></i>" + "Time: " + minutes + " : " + seconds;
  }, 1000);
}

 function stopTimer() {
     clearInterval(time);
 }

/**
 * flips and stores the first and second clicked cards 
 * before checking if they are a match
 */
function flipCard() {
  if (!gameStart) {
    gameStart = true;
    timer();
  }
  if (lockMoves) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first card is clicked
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
    // second card is clicked
    secondCard = this;

    checkForMatch();
}

/**
 * checks the two clicked cards for a match  
 */
function checkForMatch() {
  let cardMatch = firstCard.dataset.match === secondCard.dataset.match;
  if (cardMatch) matchedPairs += 1;

  cardMatch ? disableCards() : unflipCards();

  if (matchedPairs === completePairs) winGame();
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
 * resets the flipped card pairs after each round 
 */
function resetBoard() {
  [hasFlippedCard, lockMoves] = [false, false];
  [firstCard, secondCard] = [null, null];
}

/**
 * ends game once all cards have been matched 
 */

function winGame() {
  stopTimer();
  switchOn("#winModal");
}

/**
 * shuffles each set of cards based on its type: either cell image / function
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

// game button event listeners and their functions

restartBtn.onclick = function() {   // function to reset and restart game 
    restartGame(); // calls the restartGame function
};

// helpModalBtn.onClick = function() { // function to open the howtoplay help modal
//     switchOn("#helpModal"); // calls the switchOn function that 'shows' the helpModal
// }

/**
 * resets and restarts the game by reloading the page
 */

function restartGame() {
  location.reload()
}

/**
 * switches on the modal when activated
 * code support: https://getbootstrap.com/docs/4.0/components/modal/
 */
function switchOn(myModalId) {
  $(myModalId).modal('show');
}