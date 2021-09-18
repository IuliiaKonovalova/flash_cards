const wordsArray = [{
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
const btnNextCard = document.querySelector('#card__next');
const btnVoiceUs = document.querySelector("#voice__option--US");
const btnVoiceGb = document.querySelector("#voice__option--GB");
let currentWord;
let temporaryWordsArray = [];

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


btnVoiceUs.addEventListener('click', clickHandlerUs);
btnVoiceGb.addEventListener('click', clickHandlerGb);

/**
 * Add US voice task on click
 */
function clickHandlerUs(event) {
  // event.stopPropagation()
  let msg = new SpeechSynthesisUtterance();
  msg.lang = 'en-US';
  msg.text = currentWord;
  speechSynthesis.speak(msg);
}

/**
 * Add US voice task on click
 */
function clickHandlerGb(event) {
  event.stopPropagation()
  let msg = new SpeechSynthesisUtterance();
  msg.lang = 'en-GB';
  msg.text = currentWord;
  speechSynthesis.speak(msg);
}

/**
 *
 * Generate random index for the words array
 */
const createRandom = function () {
  return Math.floor(Math.random() * wordsArray.length);
};

/**
 * Generates the word for the user
 */
const generateWord = function () {
  if (wordsArray.length === 0) {
    wordsArray.push.apply(wordsArray, temporaryWordsArray)
  }

  let keyWord = document.getElementsByClassName('word__key')[0];

  let randomIndex = createRandom();

  keyWord.innerText = wordsArray[randomIndex].word;

  currentWord = wordsArray[randomIndex].word;
}