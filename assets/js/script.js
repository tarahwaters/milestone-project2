const cards = document.querySelectorAll('.game-card');

let hasFlippedCard = false
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');

  if (hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    console.log({hasFlippedCard, firstCard});
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));