/// << << GRAMMAR QUIZ >> >> ///

const cardNextButton = document.querySelector('#card__next');

// Wait for the DOM to finish loading before running the quiz

document.addEventListener('DOMContentLoaded', function () {
     generateGrammarQuestion();

     // answerOptions.forEach((quizAnswer) =>
     //      quizAnswer.addEventListener('click', checkForAnswer)
     // );

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
               'Yes, I do. I like apples.',
               "Yes, I don't. I like apples.",
               'Yes, I am. I like apples.',
               "No, I do. I don't like apples.",
          ],
          correct: 'Yes, I do. I like apples.',
     },
     {
          grammarQuestion: 'Do you like melons?',
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
          grammarChoices: [
               'Yes, I do. Bananas are yummy.',
               "No, I don't. Bananas are yummy.",
               'Yes, I do. Bananas is yucky.',
               "No, I don't. Banana are yucky",
          ],
          correct: 'Yes, I do. Bananas are yummy.',
     },
];

// function handleQuestions() {
//      //function to shuffle and push 10 questions to shuffledQuestions array
//      //app would be dealing with 10questions per session
//      while (shuffledQuestions.length <= 10) {
//           const createRandomBlock = function () {
//                return Math.floor(Math.random() * grammarQuestions.length);
//           };
//           if (!shuffledQuestions.includes(createRandomBlock)) {
//                shuffledQuestions.push(createRandomBlock);
//           }
//      }
// }

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
