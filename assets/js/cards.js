/* jshint esversion:8 */
const card = document.querySelector('.card');
const cardNextButton = document.querySelector('#card__next');
const btnVoiceUs = document.querySelector("#voice__option--US");
const btnVoiceGb = document.querySelector("#voice__option--GB");
let currentWord;
let temporaryCardsArray = [];
let flashcards
// Variables related to modal
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const btnCloseModal = document.querySelector('#close-modal');
const btnOpenModal = document.querySelector('#button__instructions');


/**
 * Wait for the DOM to finish loading before running the quiz
 */
document.addEventListener('DOMContentLoaded', function () {

  fetchFlashCardsData()


  // Change Card on click
  cardNextButton.addEventListener('click', generateCard);

  // Click enter to go to another card
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      generateCard();
    }
  });

  //listen click for audio
  btnVoiceUs.addEventListener('click', function (event) {
    speakFunction(event, "US");
  });
  btnVoiceGb.addEventListener('click', function (event) {
    speakFunction(event, "GB");
  });


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
async function fetchFlashCardsData() {
  const res = await fetch("assets/js/json/cards-data.json");
  flashcards = await res.json();
  generateCard();
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


// Flip card on the click
card.addEventListener('click', function (e) {
  e.preventDefault();
  card.classList.toggle('is-flipped');
});


/**
 * Add voice on click
 */
function speakFunction(event, lang) {
  event.stopPropagation();
  let msg = new SpeechSynthesisUtterance();
  msg.lang = `en-${lang}`;
  msg.text = currentWord.replace('/', 'or');
  speechSynthesis.speak(msg);
}


/**
 *
 * Generate random index for the FC
 */
const createRandom = function () {
  return Math.floor(Math.random() * flashcards.length);
};


/**
 * Function generates the Flash Card for the user
 * with all visible elements
 */
const generateCard = function () {
  card.classList.remove('is-flipped');
  if (flashcards.length === 0) {
    flashcards.push.apply(flashcards, temporaryCardsArray);
  }

  let cardTopic = document.getElementsByClassName('topic')[0];
  let cardImage = document.getElementsByClassName('image')[0];
  let cardWord = document.getElementsByClassName('english__word')[0];
  let CardIpa = document.getElementsByClassName('english__ipa')[0];

  let randomIndex = createRandom();

  cardTopic.innerText = flashcards[randomIndex].topic;
  cardImage.innerHTML = `<img loading="lazy" src = ${flashcards[randomIndex].image} alt=${flashcards[randomIndex].imageAlt}>`;

  //Reveal the content of the back side of the card after 1 sec
  //Prevents the reavealing the content of the next of the card to the user
  setTimeout(() => {
    cardWord.innerText = flashcards[randomIndex].word;
    CardIpa.innerText = flashcards[randomIndex].ipa;

    currentWord = flashcards[randomIndex].word;

    temporaryCardsArray.push(flashcards[randomIndex]);
    flashcards.splice([randomIndex], 1);
  }, 1000);
};