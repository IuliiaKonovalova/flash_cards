/// << << GRAMMAR QUIZ >> >> ///

const cardNextButton = document.querySelector('#card__next');
const answerOptions = document.querySelectorAll('.grammar-quiz__answer');
console.log(answerOptions);

// Wait for the DOM to finish loading before running the quiz

document.addEventListener('DOMContentLoaded', function () {
     generateGrammarQuestion();

     answerOptions.forEach((quizAnswer) =>
          quizAnswer.addEventListener('click', checkForAnswer)
     );

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
               "No, I don't. I don't like pineapples.",
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

// let shuffledQuestions = []; //empty array to hold shuffled selected questions out of all available questions

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

// let questionNumber = 1; //holds the current question number
// let playerScore = 0; //holds the player score
// let wrongAttempt = 0; //amount of wrong answers picked by player
// let indexNumber = 0; //will be used in displaying next question

// function NextQuestion(index) {
//      handleQuestions();
//      const currentQuestion = shuffledQuestions[index];
//      document.getElementById('grammar-quiz__score').innerHTML = playerScore;
//      document.getElementById('grammar-quiz__question-number').innerHTML =
//           currentQuestion.question;
// }

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

     //Add data to the html from the grammarQuestions array

     grammarQuestion.innerText =
          grammarQuestions[randomBlockIndex].grammarQuestion;

     for (let i = 0; i < grammarAnswers.length; i++) {
          grammarAnswers[i].innerText =
               grammarQuestions[randomBlockIndex].grammarChoices[i];
     }
};

function checkForAnswer() {
     if (
          document.querySelectorAll('.grammar-quiz__answer').innerText ===
          grammarQuestions.correct
     ) {
          document.querySelector(
               '.grammar-quiz__answers'
          ).children.style.backgroundColor = 'red';
     }
}
//      const currentQuestion = shuffledQuestions[indexNumber]; //gets current Question
//      const currentQuestionAnswer = currentQuestion.correctOption; //gets current Question's answer
//      const options = document.getElementsByName('option'); //gets all elements in dom with name of 'option' (in this the radio inputs)
//      let correctOption = null;

//      options.forEach((option) => {
//           if (option.value === currentQuestionAnswer) {
//                //get's correct's radio input with correct answer
//                correctOption = option.labels[0].id;
//           }
//      });

//      //checking to make sure a radio input has been checked or an option being chosen
//      if (
//           options[0].checked === false &&
//           options[1].checked === false &&
//           options[2].checked === false &&
//           options[3].checked == false
//      ) {
//           document.getElementById('option-modal').style.display = 'flex';
//      }

//      //checking if checked radio button is same as answer
//      options.forEach((option) => {
//           if (
//                option.checked === true &&
//                option.value === currentQuestionAnswer
//           ) {
//                document.getElementById(correctOption).style.backgroundColor =
//                     'green';
//                playerScore++; //adding to player's score
//                indexNumber++; //adding 1 to index so has to display next question..
//                //set to delay question number till when next question loads
//                setTimeout(() => {
//                     questionNumber++;
//                }, 1000);
//           } else if (option.checked && option.value !== currentQuestionAnswer) {
//                const wrongLabelId = option.labels[0].id;
//                document.getElementById(wrongLabelId).style.backgroundColor =
//                     'red';
//                document.getElementById(correctOption).style.backgroundColor =
//                     'green';
//                wrongAttempt++; //adds 1 to wrong attempts
//                indexNumber++;
//                //set to delay question number till when next question loads
//                setTimeout(() => {
//                     questionNumber++;
//                }, 1000);
//           }
//      });
// }
