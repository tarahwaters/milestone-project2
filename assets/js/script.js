const cards = document.querySelectorAll('.game-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {

  if (!hasFlippedCard) {
    // first click
    console.log("in has flipped if statement....")
    hasFlippedCard = true;
    firstCard = this;

    console.log("result : ", {hasFlippedCard, firstCard});
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));