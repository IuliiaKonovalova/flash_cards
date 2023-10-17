/* jshint esversion:8 */

/// << << GRAMMAR QUIZ >> >> ///

const btnNextCard = document.querySelector('#card__next');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const btnCloseModal = document.querySelector('#close-modal');
const btnOpenModal = document.querySelector('#button__instructions');
let answers = document.getElementsByClassName('grammar-quiz__answer');
let grammarQuestions;
let currentAnswer;
let temporaryQuestionsArray = [];


/**
 * Wait for the DOM to finish loading before running the quiz
 */
document.addEventListener('DOMContentLoaded', function () {
  // Fetch data from the JSON file
  fetchQuizData()
  //Open Instructions for the quiz
  btnOpenModal.addEventListener('click', openModal);
  //Close instructions for the quiz
  btnCloseModal.addEventListener('click', closeModal);
  // Close modal with Esc key
  overlay.addEventListener('click', closeModal);
  // Close modal with Esc key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
  // Change Card on click
  btnNextCard.addEventListener('click', generateGrammarQuestion);
  // Click enter to go to another card
  btnNextCard.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      generateGrammarQuestion();
    }
  });
});


/**
 * Fetch data from the JSON file
 */
async function fetchQuizData() {
  try {
    const response = await fetch('assets/js/json/quiz-data.json');
    if (!response.ok) {
      throw new Error('HTTP error! status: ${response.status}');
    }
    const data = await response.json();
    if (Array.isArray(data.grammarQuestions)) {
      grammarQuestions = data.grammarQuestions;
      generateGrammarQuestion();
    } else {
      throw new Error('Invalid data format');
    }

  } catch (error) {
    console.log(error);
    return []
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
 *
 * Generate random index for the Quiz
 */
const createRandomBlock = function () {
  return Math.floor(Math.random() * grammarQuestions.length);
};


/**
 * Function generates the Flash Card for the user
 * with all visible elements
 */
const generateGrammarQuestion = function () {
  if (grammarQuestions.length === 0) {
    grammarQuestions.push.apply(
      grammarQuestions,
      temporaryQuestionsArray
    );
  }

  let grammarQuestion = document.getElementsByClassName(
    'grammar-quiz__question'
  )[0];
  let grammarAnswers = document.getElementsByClassName(
    'grammar-quiz__answers'
  )[0].children;
  let grammarTasksFrom = document.getElementsByClassName(
    'task__from'
  )[0];
  let grammarTasksTo = document.getElementsByClassName(
    'task__to'
  )[0];
  //Generate random order of the answers
  grammarQuestions.forEach((questionBlock) =>
    questionBlock.grammarChoices.sort(() => Math.random() - 0.5)
  );

  //Applying random question function
  let randomBlockIndex = createRandomBlock();

  currentAnswer = grammarQuestions[randomBlockIndex].correct;

  //Add data to the html from the grammarQuestions array
  grammarQuestion.innerText =
    grammarQuestions[randomBlockIndex].grammarQuestion;

  grammarTasksFrom.innerText = grammarQuestions[randomBlockIndex].grammarTaskFrom;
  grammarTasksTo.innerText = grammarQuestions[randomBlockIndex].grammarTaskTo;
  for (let i = 0; i < grammarAnswers.length; i++) {
    grammarAnswers[i].style.backgroundColor = '#00e3c57a';
    grammarAnswers[i].style.cursor = 'pointer';
    grammarAnswers[i].innerText =
      grammarQuestions[randomBlockIndex].grammarChoices[i];
  }

  temporaryQuestionsArray.push(grammarQuestions[randomBlockIndex]);
  grammarQuestions.splice([randomBlockIndex], 1);
};


/**
 * Add event listener to the answers
*/
for (let answer of answers) {
  answer.addEventListener('click', checkAnswers);
}


/**
 * Checking whether answer is correct
 * */
function checkAnswers(event) {
  if (event.target.innerText === currentAnswer) {
    event.target.style.backgroundColor = '#008a5a';
  } else {
    event.target.style.background = '#c26ee3';
  }
}