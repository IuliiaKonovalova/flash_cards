/* jshint esversion:8, expr:true */

//main variables
const btnCheck = document.querySelector('#btn__check');
const btnNextCard = document.querySelector('#card__next');
const btnVoiceUs = document.querySelector("#voice__option--US");
const btnVoiceGb = document.querySelector("#voice__option--GB");
let currentWord;
let temporaryWordsArray = [];
let wordsArray
// Variables related to modal
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const btnCloseModal = document.querySelector('#close-modal');
const btnOpenModal = document.querySelector('#button__instructions');


/**
 * Wait for the DOM to finish loading before running the quiz
 */
document.addEventListener('DOMContentLoaded', function () {
  fetchWordsData();
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

  //listen click to check spelling
  btnCheck.addEventListener('click', checkSpelling);

  //listen click for audio
  btnVoiceUs.addEventListener('click', () => speakFunction("US"));
  btnVoiceGb.addEventListener('click', () => speakFunction("GB"));

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
 * Fetch data from the JSON file
 */
async function fetchWordsData() {
  try {
    const res = await fetch("assets/js/json/words-data.json");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    if (Array.isArray(data.wordsArray)) {
      wordsArray = data.wordsArray;
      generateWord();
      return wordsArray;
    } else {
      throw new Error("Data does not contain an array of words");
    }
  } catch (error) {
    return [];
  }
}


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
 * Add voice task on click American or British accents
 */
function speakFunction(lang) {
  if (typeof currentWord === 'string') {
    let msg = new SpeechSynthesisUtterance();
    msg.lang = `en-${lang}`;
    msg.text = currentWord.replace('/', 'or');
    speechSynthesis.speak(msg);
  } else {
    let msg = new SpeechSynthesisUtterance();
    msg.lang = `en-${lang}`;
    msg.text = currentWord.join(' or ');
    speechSynthesis.speak(msg);
  }
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

  let answerInput = document.querySelector('#word__key--input');
  if (answerInput.value === '') {
    btnCheck.getAttribute("aria-disabled") === "true";
  } else {
    document.getElementsByClassName('word__key')[0].innerText = currentWord;
    btnCheck.getAttribute("aria-disabled") === "false";
    if (answerInput.value.toLowerCase() === currentWord) {
      answerInput.style.backgroundColor = '#008a5a';
    } else {
      answerInput.style.backgroundColor = '#c26ee3';
    }
  }
};