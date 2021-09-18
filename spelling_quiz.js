const words = [{
    topic: 'fruits',
    image: 'assets/images/apple.jpg',
    word: 'apple',
    ipa: '[ˈæp.əl]',
  },
  {
    topic: 'fruits',
    image: 'assets/images/banana.jpg',
    word: 'banana',
    ipa: '[bəˈnæn.ə]',
  },
]


//main variables
const btnCheck = document.querySelector('#btn__check');
const cardNextButton = document.querySelector('#card__next');
const btnVoiceUs = document.querySelector("#voice__option--US");
const btnVoiceGb = document.querySelector("#voice__option--GB");

// Wait for the DOM to finish loading before running the quiz

document.addEventListener('DOMContentLoaded', function () {

  // New word;
  generateWord();


  // Listen for the arrow right to switch the question:
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      generateWord();
    }
  });

  // Listen for the Enter to check the spelling
  btnNextCard.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      checkSpelling();
    }
  });
})


/**
 * Add voice task on click
 */

//American pronunciation

//British pronunciation


/**
 *
 * Generate random index for the words array
 */

const createRandom = function () {
  return Math.floor(Math.random() * flashcards.length);
};

/**
 * Generates the word for the user
 */