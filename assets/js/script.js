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
    if (firstCard.dataset.match === secondCard.dataset.match) {
      // it's a matching pair!
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
    } else {
        // it's not a matching pair..
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));