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
