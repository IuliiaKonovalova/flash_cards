/// << << GRAMMAR QUIZ >> >> ///

const cardNextButton = document.querySelector('#card__next');

// Wait for the DOM to finish loading before running the quiz

document.addEventListener('DOMContentLoaded', function () {
     generateGrammarQuestion();

     // Change Card on click

     cardNextButton.addEventListener('click', generateGrammarQuestion);

     // Click enter to go to another card

     cardNextButton.addEventListener('keydown', function (event) {
          if (event.key === 'Enter') {
               generateGrammarQuestion();
          }
     });
});

const grammarQuestions = [
     {
          grammarQuestion: 'Do you like apples?',
          grammarChoices: [
               { text: 'Yes, I do. I like apples', correct: true },
               { text: "Yes, I don't. I like apples", correct: false },
               { text: 'Yes, I am. I like apples', correct: false },
               { text: "No, I do. I don't like apples", correct: false },
          ],
     },
     {
          grammarQuestion: 'Do you like watermelons?',
          grammarChoices: [
               { text: 'Yes, I do. I like watermelons', correct: true },
               { text: 'Yes, I am. I like watermelons', correct: false },
               { text: 'Yes, I do. I like watermelon', correct: false },
               { text: "Yes, I do. I don't like watermelons", correct: false },
          ],
     },
];

/**
 *
 * Generate random questions for the Quiz
 */

const createRandomBlock = function () {
     return Math.floor(Math.random() * grammarQuestions.length);
};

/**
 * Function generates the Flash Card for the user
 * with all visible elements
 */

const generateGrammarQuestion = function () {
     let grammarQuestion = document.getElementsByClassName(
          'grammar-quiz__question'
     )[0];
     let grammarAnswers = document.getElementsByClassName(
          'grammar-quiz__answers'
     )[0].children;
};
