/* jshint esversion:8 */

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
      'Do I want to be a doctor?',
      'Do I want be a doctor?',
      "Don't I want to be a doctor?",
      'Yes, I do. I want to be a doctor.',
    ],
    correct: 'Do I want to be a doctor?',
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
  {
    grammarQuestion: 'Do you like dogs?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.+',
    grammarChoices: [
      'Yes, I do. I like dogs.',
      "Yes, I don't. I like dogs.",
      'I like dogs.',
      'Yes, I do. I like dog.',
    ],
    correct: 'Yes, I do. I like dogs.',
  },
  {
    grammarQuestion: 'Yes, I do. I like turtles.',
    grammarTaskFrom: '.+',
    grammarTaskTo: '.-',
    grammarChoices: [
      "No, I don't. I don't like dogs.",
      "No, I don't. I don't like turtles.",
      "No, I do. I don't like turtles",
      "No, I doesn't. I doesn't like turtles.",
    ],
    correct: "No, I don't. I don't like turtles.",
  },
  {
    grammarQuestion: 'She likes lions.',
    grammarTaskFrom: '.+',
    grammarTaskTo: '?+',
    grammarChoices: [
      'Does she likes lions?',
      'Does she like lions?',
      'Do she like lions?',
      'Does she like lion?',
    ],
    correct: 'Does she like lions?',
  },
  {
    grammarQuestion: 'Does she like rabbits?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.-',
    grammarChoices: [
      "No, she doesn't. She doesn't like rabbits.",
      "No, she doesn't She doesn't like rabbit.",
      "No, she don't. She don't like rabbits.",
      "No, she does. She doesn't lie rabbits.",
    ],
    correct: "No, she doesn't. She doesn't like rabbits.",
  },
  {
    grammarQuestion: 'Yes, she does. She likes tigers.',
    grammarTaskFrom: '.+',
    grammarTaskTo: '.-',
    grammarChoices: [
      "No, she doesn't. She doesn't like tigers.",
      'No, she does. She does not like tigers.',
      "No, she don't. She don't like tigers.",
      'No, she does. She does like tigers.',
    ],
    correct: "No, she doesn't. She doesn't like tigers.",
  },
  {
    grammarQuestion: "He doesn't like birds.",
    grammarTaskFrom: '.',
    grammarTaskTo: '?+',
    grammarChoices: [
      'Does he likes birds?',
      'Does he like birds?',
      'Do he likes birds?',
      'Do he like bird?',
    ],
    correct: 'Does he like birds?',
  },
  {
    grammarQuestion: 'Yes, they do. They like to play football.',
    grammarTaskFrom: '.+',
    grammarTaskTo: '?+',
    grammarChoices: [
      'Do they like to play football?',
      'Do they like play football?',
      'Does they like to play football?',
      "Doesn't the like to play football?",
    ],
    correct: 'Do they like to play football?',
  },
  {
    grammarQuestion: 'Does he like to play soccer?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.+',
    grammarChoices: [
      'Yes, he does. He likes to play soccer.',
      'Yes, he do. He likes to play football.',
      'Yes, he does. He likes play soccer.',
      'Yes, he does. He like to play football.',
    ],
    correct: 'Yes, he does. He likes to play soccer.',
  },
  {
    grammarQuestion: 'Do we like cherries?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.-',
    grammarChoices: [
      "No, we doesn't. We don't like tigers.",
      "No, we don't. We don't like cherries.",
      "No, we don't. We don't like cherry.",
      'No, we do. We like cherries.',
    ],
    correct: "No, we don't. We don't like cherries.",
  },
  {
    grammarQuestion: "Yes, they do. They like to play basketball.",
    grammarTaskFrom: '.+',
    grammarTaskTo: '.-',
    grammarChoices: [
      "No, they don't. They don't like to play basketball.",
      "No, they doesn't. They doesn't like to play basketball.",
      "No, they don't. They don't like play basketball.",
      "No, they do. They don't like to play basketball",
    ],
    correct: "No, they don't. They don't like to play basketball.",
  },
  {
    grammarQuestion: 'He likes to play tennis.',
    grammarTaskFrom: '.',
    grammarTaskTo: '?+',
    grammarChoices: [
      'Does he like to play tennis?',
      'Do he like to play tennis?',
      'Does he like play tennis?',
      'Does he likes to play tennis?',
    ],
    correct: 'Does he like to play tennis?',
  },
  {
    grammarQuestion: 'We like strawberries.',
    grammarTaskFrom: '.',
    grammarTaskTo: '.-',
    grammarChoices: [
      "No we don't. We don't like strawberries.",
      "No, we do. We do like strawberries.",
      "No we don't. We don't like strawberry.",
      "No, we not. We don't like strawberries.",
    ],
    correct: "No we don't. We don't like strawberries.",
  },
  {
    grammarQuestion: 'What color is your hair?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.',
    grammarChoices: [
      "It's white.",
      'Its white.',
      "It's a white.",
      'Its white.',
    ],
    correct: "It's white.",
  },
  {
    grammarQuestion: 'What color are your eyes?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.',
    grammarChoices: [
      "It's blue.",
      'They blue.',
      "They're blue.",
      "They're blues.",
    ],
    correct: "They're blue.",
  },
  {
    grammarQuestion: 'Are his eyes brown?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.+',
    grammarChoices: [
      'Yes, they are.',
      'Yes, they brown.',
      "Yes, they aren't.",
      'Yes, they.',
    ],
    correct: 'Yes, they are.',
  },
  {
    grammarQuestion: 'Are your hair short?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.-',
    grammarChoices: [
      "No, it isn't. It's long.",
      "No, it is. It's long.",
      "No, It not. It's long.",
      "No, its not. It's long.",
    ],
    correct: "No, it isn't. It's long.",
  },
  {
    grammarQuestion: 'Do you have 2 heads?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.-',
    grammarChoices: [
      "No, I don't. I have 1 head.",
      "No, I do. I have 1 head.",
      "No, I'm not. I have 1 head.",
      "No, I don't. I don't have 1 head.",
    ],
    correct: "No, I don't. I have 1 head.",
  },
  {
    grammarQuestion: 'Do you have 1 tummy?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.+',
    grammarChoices: [
      "Yes, I do. I have 1 tummy.",
      "Yes, I don't. I have 1 tummy.",
      "Yes, I am. I have 1 tummy.",
      "Yes, I do. I have 1 tumy.",
    ],
    correct: "Yes, I do. I have 1 tummy.",
  },
  {
    grammarQuestion: 'Do you have 2 arms?',
    grammarTaskFrom: '?+',
    grammarTaskTo: '.+',
    grammarChoices: [
      "Yes, I do. I have 2 arms.",
      "Yes, I don't. I have 2 arms.",
      "Yes, I am. I have 2 arms.",
      "Yes, I do. I have 2 arm.",
    ],
    correct: "Yes, I do. I have 2 arms.",
  },
  {
    grammarQuestion: 'I have 10 toes.',
    grammarTaskFrom: '.',
    grammarTaskTo: '?-',
    grammarChoices: [
      "Don't I have 10 toes?",
      "Dont I have 10 toes?",
      "Am I have 10 toes?",
      "Do I have 10 toes?",
    ],
    correct: "Don't I have 10 toes?",
  },
  {
    grammarQuestion: 'You have 2 knees.',
    grammarTaskFrom: '.',
    grammarTaskTo: '.+',
    grammarChoices: [
      "Yes, you do. You have 2 knees.",
      "Yes, you are. You have 2 knees.",
      "Yes, you does. You have 2 knees.",
      "Yes, you do. You has 2 knees.",
    ],
    correct: "Yes, you do. You have 2 knees.",
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