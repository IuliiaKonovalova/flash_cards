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
               { text: 'Yes, I do. I like apples.', correct: true },
               { text: "Yes, I don't. I like apples.", correct: false },
               { text: 'Yes, I am. I like apples.', correct: false },
               { text: "No, I do. I don't like apples.", correct: false },
          ],
     },
     {
          grammarQuestion: 'Do you like melons?',
          grammarChoices: [
               { text: 'Yes, I do. I like melons.', correct: true },
               { text: 'Yes, I am. I like melon.', correct: false },
               { text: 'Yes, I do. I like melones.', correct: false },
               { text: "Yes, I do. I don't like watermelons.", correct: false },
          ],
     },
     {
          grammarQuestion: 'Do you like pineapples?',
          grammarChoices: [
               { text: "No, I don't. I don't like pineapples.", correct: true },
               {
                    text: "No, I don't. I don't like pineapples.",
                    correct: false,
               },
               { text: "No, I do. I don't like pineapples.", correct: false },
               { text: "No, I'm not. I don't like pineapple.", correct: false },
          ],
     },
     {
          grammarQuestion: 'Do you like pears?',
          grammarChoices: [
               { text: "No, I don't. I don't like pears.", correct: true },
               { text: 'Yes, I am. I like pear.', correct: false },
               { text: 'Yes, I am. I like pears.', correct: false },
               { text: "No, I'm not. I don't like pears.", correct: false },
          ],
     },
     {
          grammarQuestion: 'Do you like bananas?',
          grammarChoices: [
               { text: 'Yes, I do. Bananas are yummy.', correct: true },
               { text: "No, I don't. Bananas are yummy.", correct: false },
               { text: 'Yes, I do. Bananas is yucky.', correct: false },
               { text: "No, I don't. Banana are yucky", correct: false },
          ],
     },
];

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
     let grammarQuestion = document.getElementsByClassName(
          'grammar-quiz__question'
     )[0];
     let grammarAnswers = document.getElementsByClassName(
          'grammar-quiz__answers'
     )[0].children;

     //Generate random order of the answers

     grammarQuestions.forEach((questionBlock) =>
          questionBlock.grammarChoices.sort(() => Math.random() - 0.5)
     );

     //Applying random question function

     let randomBlockIndex = createRandomBlock();

     grammarQuestion.innerText =
          grammarQuestions[randomBlockIndex].grammarQuestion;
     for (answer of grammarAnswers) {
          answer.innerText =
               grammarQuestions[randomBlockIndex].grammarChoices[0].text;
          grammarQuestions[randomBlockIndex].grammarChoices.shift();
     }
};
