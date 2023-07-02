/**
 * @fileoverview contains the javascript needed to run the 'Specialised Cells - GCSE Biology Revision Game'
 * this is a memory matching card pair game which involves the user flipping cards to match
 * cell type images with their functional descriptions.
 * there are additional js game functions for the user to track their time and move score, reset the game,
 * and view instructions as well as a message upon game completion.
 */

const allCards = document.querySelectorAll('.game-card');
const cardsCells = document.querySelectorAll('.cell-card');
const cardsFunctions = document.querySelectorAll('.function-card');
const movesElement = document.querySelector('#move-counter');
const timerElement = document.querySelector('#timer');
const restartBtn = document.getElementById('restartBtn');
const helpModalBtn = document.getElementById('helpModalBtn');
const COMPLETE_PAIRS = 8;
const TIME_UPDATE_FREQUENCY_MSECS = 1000;
const RESET_CARDS_TIME_INTERVAL_MSECS = 2000;

/**
 * coding support for main functioning of the game and flip features (adapted for use): 
 * https://marina-ferreira.github.io/tutorials/js/memory-game/
 */

let gameStart = false;
let hasFlippedCard = false;
let lockMoves = false;
let firstCard, secondCard;
let moves = 0;
let matchedPairs = 0;
let completedTime = "";

/**
 * MOVE COUNTER which increments the counter as the user clicks a new pair of cards
 * coding support: https://dev.to/javascriptacademy/creating-a-memory-card-game-with-html-css-and-javascript-57g1 
 */
function moveCounter() {  
  moves++;  // adds 1 move to the counter
  movesElement.innerHTML = moves;  // displays the increasing move number in the html 'move-counter' span 
}

/**
 * TIMER which increments in seconds during gameplay (triggered after first card click) 
 * and pauses if the instruction modal is open
 * coding support: https://moirahartigan.github.io/Portfolio-2---Alien-Memory-Game/, 
 * https://www.w3schools.com/js/js_timing.asp and https://codepen.io/FoxyStoat/pen/erzLMG 
 */
let time;
let minutes = 0;
let seconds = 0;
let timerOn = false;

function startTimer() {
  //sets the time interval to update for each 1 second
  time = setInterval(function() {
    seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }

  // while active, adds the time taken to play the game in html
  timerElement.innerHTML = "Time: " + minutes + " : " + seconds;
  }, TIME_UPDATE_FREQUENCY_MSECS);
}

 function stopTimer() {
     clearInterval(time);
 }

/**
 * when the HELP MODAL is closed by clicking off the screen instead of the button, 
 * boostrap's modal class fires an event to restart the timer
 * code support: https://getbootstrap.com/docs/4.6/components/modal/
 */
$('#helpModal').on('hidden.bs.modal', function (event) {
  if (firstCard) {
    startTimer();
  }
})

/**
* when the help modal is closed by clicking the close button, 
* the timer will only resume if game has already started
*/
function resumeTimerOnModalClose() {
  if (gameStart) {
    startTimer();
  }
}

/**
 * MAIN CARD GAME FUNCTIONALITY
 */

/**
 * responds to a card click event and then runs the flipCard function
 */
allCards.forEach(card => card.addEventListener('click', flipCard));

/**
 * FLIPS and stores the first and second clicked cards 
 * before checking if they are a match
 */
function flipCard() {
  if (!gameStart) {
    gameStart = true;
    startTimer();
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
 * checks the two clicked cards for a MATCHING PAIR 
 */
function checkForMatch() {
  let cardMatch = firstCard.dataset.match === secondCard.dataset.match;
  if (cardMatch) matchedPairs += 1;

  cardMatch ? disableCards() : noMatch();

  if (matchedPairs === COMPLETE_PAIRS) winGame();
}

/**
 * if there is a match, then the cards are disabled from flipping again and remain
 * showing their 'front-faces'
 */
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetCardPairFlip(); // resets the flipped pairs

    moveCounter(); // adds a move to the counter
}

/**
 * if cards are not a match, then they are flipped back after a timeout delay
 * and a move is added to the counter 
 */
function noMatch() {
  lockMoves = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetCardPairFlip();
  }, RESET_CARDS_TIME_INTERVAL_MSECS);

  moveCounter();
}

/**
 * resets the flipped card pairs after each round 
 */
function resetCardPairFlip() {
  [hasFlippedCard, lockMoves] = [false, false];
  [firstCard, secondCard] = [null, null];
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

/** RESTART GAME BUTTON responds to a click
 */
restartBtn.onclick = function() {   // function to reset and restart game 
    restartGame();
};

function restartGame() {
  location.reload() // resets and restarts the game by reloading the page
}

/**
 * ends the game once all cards have been matched,
 * stops the timer and shows the win message modal
 */
function winGame() {
  stopTimer();
  switchOn("#winModal");
}

/**
 * switches on the WIN MODAL when activated and adds final time and move score
 * code support: https://getbootstrap.com/docs/4.0/components/modal/
 */
function switchOn(myModalId) {
  $(myModalId).modal('show');
  completedTime = timerElement.innerHTML;
     // adds the completed moves and time to the winner message
     document.getElementById("totalMoves").innerHTML = moves;
     document.getElementById("totalTime").innerHTML = completedTime;
}

