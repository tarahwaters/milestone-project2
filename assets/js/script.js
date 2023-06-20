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
  }
}

function checkForMatch() {
    // do the two cards match?
    if (firstCard.dataset.match === secondCard.dataset.match) {
    // it's a matching pair!
      disableCards();
    } else {
    // it's not a matching pair..
    // delay the reset flip by adding a timeout
       unflipCards(); 
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 2000);
}

cards.forEach(card => card.addEventListener('click', flipCard));