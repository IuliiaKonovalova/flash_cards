/// << << GRAMMAR QUIZ >> >> ///

const grammarQuestions = [{

    grammarQuestion: 'Do you like apples?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.+',
    grammarChoices: [
      'Yes, I do. I like apples.',
      "Yes, I don't. I like apples.",
      'Yes, I am. I like apples.',
      "No, I do. I don't like apples.",
    ],
    correct: 'Yes, I do. I like apples.',
  },
  {
    grammarQuestion: 'Do you like melons?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.+',
    grammarChoices: [
      'Yes, I do. I like melons.',
      'Yes, I am. I like melon.',
      'Yes, I do. I like melones.',
      "Yes, I do. I don't like watermelons.",
    ],
    correct: 'Yes, I do. I like melons.',
  },
  {
    grammarQuestion: 'Do you like pineapples?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.-',
    grammarChoices: [
      "No, I don't. I don't like pineapples.",
      "No, I don't. I dont like pineapples.",
      "No, I do. I don't like pineapples.",
      "No, I'm not. I don't like pineapple.",
    ],

    correct: "No, I don't. I don't like pineapples.",
  },
  {
    grammarQuestion: 'Do you like pears?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.-',
    grammarChoices: [
      "No, I don't. I don't like pears.",
      'Yes, I am. I like pear.',
      'Yes, I am. I like pears.',
      "No, I'm not. I don't like pears.",
    ],
    correct: "No, I don't. I don't like pears.",
  },
  {
    grammarQuestion: 'Do you like bananas?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.+',
    grammarChoices: [
      'Yes, I do. Bananas are yummy.',
      "No, I don't. Bananas are yummy.",
      'Yes, I do. Bananas is yucky.',
      "No, I don't. Banana are yucky.",
    ],
    correct: 'Yes, I do. Bananas are yummy.',
  },
  {
    grammarQuestion: 'What do you want to be?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.',
    grammarChoices: [
      'I wanted to be a teacher.',
      "I want a teacher.",
      'I want to be a teacher.',
      "I want be a teacher.",
    ],
    correct: 'I want to be a teacher.',
  },
  {
    grammarQuestion: 'I want to be a nurse.',
    grammarTaskFrom: '.',
    grammarTaskTo: '.+',
    grammarChoices: [
      'Yes, I want to be a nurse.',
      "Yes, I be a nurse",
      "Yes, don't. I want to be a teacher.",
      "Yes, I do. I want to be a nurse.",
    ],
    correct: 'Yes, I do. I want to be a nurse.',
  },
  {
    grammarQuestion: "No, I don't. I don't want to be a doctor",
    grammarTaskFrom: '.-',
    grammarTaskTo: '?+',
    grammarChoices: [
      'Do I want to be a doctor.',
      'Do I want be a doctor?',
      "Don't I want to be a doctor?",
      'Yes, I do. I want to be a doctor.',
    ],
    correct: 'Do I want be a doctor?',
  },
  {
    grammarQuestion: "I don't want to be a singer",
    grammarTaskFrom: '.',
    grammarTaskTo: '.-',
    grammarChoices: [
      'No, I do. I dont want to be singer.',
      "No, I don't. I don't want to be a singer.",
      "Don't I want to be a singer?",
      "No, I did. I didn't want to be a singer.",
    ],
    correct: "No, I don't. I don't want to be a singer.",
  },
];

const btnNextCard = document.querySelector('#card__next');
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const btnCloseModal = document.querySelector('#close-modal');
const btnOpenModal = document.querySelector('#button__instructions');

// Wait for the DOM to finish loading before running the quiz

document.addEventListener('DOMContentLoaded', function () {

  //New question
  generateGrammarQuestion();

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

let currentAnswer;
let temporaryQuestionsArray = [];

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

let answers = document.getElementsByClassName('grammar-quiz__answer');

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