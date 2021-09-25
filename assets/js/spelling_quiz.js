const wordsArray = ['apple', 'banana', 'grapes', 'orange', 'peach', 'pear', 'strawberry', 'watermelon', 'melon', 'raspberries', 'pomegranate', 'plum', 'pineapple', 'persimmon', 'passion fruit', 'papaya', 'mangosteen', 'lime', 'mango', 'grapefruit', 'kiwi', 'lemon', 'lychee', 'mandarin', 'jackfruit', 'durian', 'fruits', 'dragon fruit', 'coconut',
  'cherry', 'blueberries', 'pumpkin', 'blackberries', 'avocado', 'apricot', 'berries',
  'color', 'blue', 'brown', 'gold', 'gray', 'green', 'pink', 'purple', 'white', 'red', 'silver', 'yellow',
  'cat', 'alligator', 'bear', 'butterfly', 'camel', 'dolphin', 'donkey', 'frog', 'giraffe', 'goat', 'gorilla', 'hedgehog', 'hen', 'kangaroo', 'koala', 'owl', 'parrot', 'peacock', 'penguin', 'pig', 'pigeon', 'polar bear', 'puppy', 'raccoon', 'rhino', 'rhinoceros', 'rooster', 'seal', 'sheep', 'squirrel', 'swan', 'whale', 'wolf', 'dog', 'cow', 'kitten',
  'mouse', 'tiger', 'fish', 'rabbit', 'snake', 'lion', 'deer', 'fox', 'zebra', 'ox', 'bee', 'elephant', 'turtle', 'monkey', 'duck', 'bird', 'panda', 'animals', 'horse', 'sweater', 'blouse', 'boots', 'crocs', 'dress', 'flip-flops', 'hat', 'mittens', 'overalls', 'shorts', 'slippers', 'suit', 'T-shirt', 'sneakers', 'cap', 'coat', 'tie', 'shoe', 'shoes',
  'jacket', 'jeans', 'pants', 'scarf', 'shirt', 'skirt', 'socks', 'vest', 'uniform', 'gloves',
  'summer', 'winter', 'spring', 'fall', 'autumn',
  'China', 'Canada', 'America', 'Britain', 'Japan',
  'sweet potatoes', 'cookies', 'biscuits', 'bread', 'cherry pie', 'roast chicken', 'chocolate', 'cookbook', 'fish', 'egg', 'hot dog', 'ice cream', 'jam', 'noodles', 'nuts', 'oil', 'pizza', 'rice', 'tofu', 'bacon', 'baguettes', 'barbecue', 'butter', 'cake', 'candies', 'cereal', 'cheese', 'chicken nuggets',
  'chicken wings', 'chips', 'cottage cheese', 'crab', 'cupcake', 'donuts', 'fried chicken', 'fried egg', 'fried fish', 'hamburger', 'honey', 'lollipops', 'muffin', 'onion rings', 'pancakes', 'pasta', 'popcorn', 'porridge', 'pretzel', 'salad', 'sandwich', 'sausages', 'seafood', 'shrimps', 'soup', 'spices', 'steak', 'taco', 'waffles',
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
  'April', 'August', 'January', 'July', 'June', 'February', 'December', 'March', 'May', 'November', 'October', 'September',
  'apple juice', 'orange juice', 'coffee', 'tea', 'coke', 'juice', 'lemonade', 'milk', 'milkshake', 'soda', 'soy milk', 'water', 'yogurt',
  'bag', 'blackboard', 'book', 'eraser', 'brush', 'calculator', 'chair', 'chalk', 'clips', 'clock', 'colored pencils', 'computer', 'crayons', 'desk', 'dictionary', 'door', 'flag', 'folder', 'globe', 'glue', 'highlighter', 'locker', 'lunch box', 'map', 'marker', 'notebooks', 'pen', 'pencil', 'pencil case', 'projector',
  'ruler', 'scissors', 'school', 'sharpener', 'stapler', 'stickers', 'tablet', 'tape', 'trash can',
];


//main variables
const btnCheck = document.querySelector('#btn__check');
const btnNextCard = document.querySelector('#card__next');
const btnVoiceUs = document.querySelector("#voice__option--US");
const btnVoiceGb = document.querySelector("#voice__option--GB");
let currentWord;
let temporaryWordsArray = [];

const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const btnCloseModal = document.querySelector('#close-modal');
const btnOpenModal = document.querySelector('#button__instructions');

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

  //Open Instructions for the quiz
  btnOpenModal.addEventListener('click', openModal);

  //Close instructions for the quiz
  btnCloseModal.addEventListener('click', closeModal);

  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

});


/**
 * Open instructions modal window
 */
const openModal = function () {
  modal.classList.remove('modal--hidden');
  overlay.classList.remove('overlay--hidden');
};

/**
 * Close instructions modal window
 */
const closeModal = function () {
  modal.classList.add('modal--hidden');
  overlay.classList.add('overlay--hidden');
};

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
    wordsArray.push.apply(wordsArray, temporaryWordsArray);
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
};

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