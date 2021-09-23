const wordsArray = ['apple', 'banana', 'grapes', 'orange', 'peach', 'pear', 'strawberry', 'watermelon', 'melon', 'raspberries', 'pomegranate', 'plum', 'pineapple', 'persimmon', 'passion fruit', 'papaya', 'mangosteen', 'lime', 'mango', 'grapefruit', 'kiwi', 'lemon', 'lychee', 'mandarin', 'jackfruit', 'durian', 'fruits', 'dragon fruit', 'coconut',
  'cherry', 'blueberries', 'pumpkin', 'blackberries', 'avocado', 'apricot', 'berries', 'color', 'blue', 'brown', 'gold', 'gray', 'green', 'pink', 'purple', 'white', 'red', 'silver', 'yellow',
  'cat', 'alligator', 'bear', 'butterfly', 'camel', 'dolphin', 'donkey', 'frog', 'giraffe', 'goat', 'gorilla', 'hedgehog', 'hen', 'kangaroo', 'koala', 'owl', 'parrot', 'peacock', 'penguin', 'pig', 'pigeon', 'polar bear', 'puppy', 'raccoon', 'rhino', 'rhinoceros', 'rooster', 'seal', 'sheep', 'squirrel', 'swan', 'whale', 'wolf', 'dog', 'cow', 'kitten', 'mouse', 'tiger', 'fish', 'rabbit', 'snake', 'lion', 'deer', 'fox', 'zebra', 'ox', 'bee', 'elephant', 'turtle', 'monkey', 'duck', 'bird', 'panda', 'animals', 'horse',



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
  btnNextCard.addEventListener('click', generateWord);

  // Listen for the Enter to check the spelling
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      checkSpelling();
    }
  });
  btnCheck.addEventListener('click', checkSpelling);
  btnVoiceUs.addEventListener('click', clickHandlerUs);
  btnVoiceGb.addEventListener('click', clickHandlerGb);
})




/**
 * Add US voice task on click
 */
function clickHandlerUs() {
  let msg = new SpeechSynthesisUtterance();
  msg.lang = 'en-US';
  msg.text = currentWord;
  speechSynthesis.speak(msg);
}

/**
 * Add US voice task on click
 */
function clickHandlerGb() {
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
  //Update input for new word
  let answerInput = document.querySelector('#word__key--input');
  answerInput.style.backgroundColor = "#5bd3f7";

  // Hide the key word
  document.getElementsByClassName('word__key')[0].innerText = '';
  answerInput.value = '';

  const randomIndex = createRandom();

  currentWord = wordsArray[randomIndex];

  //Delete shown word from the main array
  //Push the word into temporary array
  temporaryWordsArray.push(wordsArray[randomIndex]);
  wordsArray.splice([randomIndex], 1);
}

/**
 * Check whether the answer is correct
 * display the correct answer
 */
const checkSpelling = function () {
  document.getElementsByClassName('word__key')[0].innerText = currentWord;
  let answerInput = document.querySelector('#word__key--input');
  if (answerInput.value.toLowerCase() === currentWord) {
    answerInput.style.backgroundColor = '#008a5a';
  } else {
    answerInput.style.backgroundColor = '#c26ee3';
  }
}