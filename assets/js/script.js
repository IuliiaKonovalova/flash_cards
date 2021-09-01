const card = document.querySelector('.card');
console.log(card);

card.addEventListener('click', function (e) {
     card.classList.add('is-flipped');
});

console.log('hello');

// function cardFlip() {
//      if (card.classList.contains('card--front')) {
//           card.classList.replace('card--front', 'card--back');
//      }
//      if (card.classList.contains('card--back')) {
//           card.classList.replace('card--back', 'card--front');
//      }

// }

// card.addEventListener('click', cardFlip);
