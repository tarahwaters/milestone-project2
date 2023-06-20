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
        // delay the reset flip by adding a timeout
        setTimeout(() => {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');
        }, 2000);
    }
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));