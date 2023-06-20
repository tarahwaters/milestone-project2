const cards = document.querySelectorAll('.game-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first card click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    // second card click
    hasFlippedCard = false;
    secondCard = this;

  // do the two cards match?
  console.log(firstCard.dataset.match);
  console.log(secondCard.dataset.match);
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));