![Animal Shelter Logo](documentation/yingwen_logo.png)

# *YINGWEN*

YINGWEN app was build in order to ease the struggles that Chinese students experience daily. Since Chinese children are not allowed to study English besides school facilities nowadays, they have to attain tons of information for a short period by themselves. This app will help them to learn English and get the highest grades in their final exams. YINGWEN app is mainly aimed at enhancing English skills and passing the final English exams at primary and middle schools.

The site can be accessed by this [link](https://iuliiakonovalova.github.io/flash_cards/)

![Responsive Mockup](documentation/responsive_mockup.png)


---
## User Stories

### First Time Visitor Goals:

* As a First Time Visitor, I want to easily understand the main purpose of the app, so I can learn more about this app.
* As a First Time Visitor, I want to be able to easily navigate through the app, so I can find the content.
* As a First Time Visitor, I want to engage in learning, so I can boost my knowledge in English.

### Returning VisitorGoals:

* As a Returning Visitor, I want to see various quiz, so I can practice different skills in English.
* As a Returning Visitor, I want to access information at one click, so I can learn at my own pace.

### Frequent Visitor Goals:
* As a Frequent User, I want to get constant access to learning materials, so I can continue learning.
* As a Frequent User, I want to have different options for studying, so I can develop my English skills. 

## Features

+ ### Menu Page

    - Represent: 

        * the main goal of the application.
        * Emphasize the the easiness of the using the application.
        * Provides options for learning.

    ![Menu Page](documentation/menu_page_screenshot.png)



    - Menu page has 3 buttons:

        1. Flash Cards Button leads to the page where the user can learn and practice English vocabulary;

        1. Grammar Quiz Button leads to the page where the user can learn and practice English grammar;

        1. Spelling Quiz Button leads to the page where the user can practice spelling of English words.
​
---

+ ### Flash Cards Page

    - It has a button at the top left corner of the screen, which leads to the menu page;

    - It has Flash Cards, which consist a word's topic and a descriptive picture of word;

    - It has a button, which replace the current word with another one; 

    ![Flash Card Page](documentation/cards_page_front_screenshot.png)

    - After clicking on the card:  

        - Card has the key word, IPA of the word, and sound buttons, which allow the user to listen to the correct American and British pronunciation of the word:

    ![Flash Card Back Page](documentation/cards_page_back_screenshot.png)

---

+ ### Grammar Quiz Page

    - It has a button at the top left corner of the screen, which leads to the menu page;

    - It has a button at the top right corner of the screen, which opens modal window with instructions for the quiz;

    ![Flash Card Page](documentation/grammar_quiz_page_info_screenshot.png)

    - It has a card with a question and a grammar task;
    
    - It has 4 probable answers for the question;
    
    - It has a button and the card to go to another question;

    ![Flash Card Page](documentation/grammar_quiz_page_screenshot.png)

    - When the user click on the right answer, the answer's background color changes to green:

    ![Flash Card Page](documentation/grammar_quiz_page_correct_answer_screenshot.png)


    - When the user click on the wrong answer, the answer's background color changes to light-pink, but the user allowed to find the correct answer anyway:

    ![Flash Card Page](documentation/grammar_quiz_page_wrong_answer_screenshot.png)

---

+ ### Spelling Quiz Page

    - It has a button at the top left corner of the screen, which leads to the menu page;

    - It has a card with a an audio question;

    - Card has 2 sound buttons -  allows the user to listen to American and British pronunciation in order to guess the right word:
    
    - It has input where the user can type his or her guess;

    - It has a check button to check whether the spelling of the user was correct;

    - It has a button at the bottom, which leads to another audio task:

    ![Flash Card Page](documentation/spelling_quiz_page_screenshot.png)
    
    - When the user the spelling of the word is correct, the input background color changes to green and the user can see the original word;

    ![Flash Card Page](documentation/spelling_quiz_page_correct_answer_screenshot.png)

     When the user the spelling of the word is wrong, the input background color changes to pink and the user can see the original word;

    ![Flash Card Page](documentation/spelling_quiz_page_wrong_answer_screenshot.png)

---

## Flowchart

The flowchart represent the logic of the application:

  ![Flash Card Page](documentation/app_flowchart.png)

---

## Design

![Background Color](documentation/background_color.png)
Deep Dark Purple Color was used to reduce visual pressure for the user.

![Main Blue Color](documentation/main_blue_color.png)
Soft blue color was used as the main color for educational content due to its psychological effect: help the user to calmly concentrate on the question.

![Accent Text Color](documentation/accent_text_color.png)
Dark Purple color was used to increase the contrast between the background and the text and boost the readability of the content.

![Neutral Text Color](documentation/neutral_text_color.png)
Soft pinkish color was used for the title and call to action content in order to attract more user's attention toward educational content.

![Highlight Color](documentation/highlight_color.png)
Yellow Color was used to highlight the task in the grammar quiz question in order to draw user's attention how to answer the question.

![Input Color](documentation/input_color.png)
Light Blue Color was used as a background color of the input in order to calm down the user as he or she is about to answer question since this color creates a sense of tranquility.

![Input Correct Answer Color](documentation/input_color_correct_answer.png)
Soft Green Color was used to highlight the correct answer in quiz.

![Input Wrong Answer Color](documentation/input_color_wrong_answer.png)
Soft Pink Color was used to highlight the wrong answer in quiz, but at the same time reduce psychological pressure on the user.

![Font](documentation/primary_font.png)
'Segoe UI' (Tahoma, Geneva, Verdana, sans-serif) Font was used as the main font of the application in order to increase readability of the content on the pages.

---

## Testing


**COMPATIBILITY:**

+ The app was tested on the following browsers: Chrome, Firefox, Brave, Edge:

  - Chrome:
  ![Menu Page](documentation/chrome_menu_page.png)
  ![Flash Cards Page. Front](documentation/chrome_cards_front_page.png)
  ![Flash Cards Page. Back](documentation/chrome_cards_back_page.png)
  ![Grammar Quiz Page](documentation/chrome_grammar_quiz_page.png)
  ![Spelling Quiz Page](documentation/chrome_spelling_quiz_page.png)
  
  - Firefox:

  - Brave:

  - Edge:
  ![Menu Page](documentation/edge_menu_page.png)
  ![Flash Cards Page. Front](documentation/edge_cards_front_page.png)
  ![Flash Cards Page. Back](documentation/edge_cards_back_page.png)
  ![Grammar Quiz Page](documentation/edge_grammar_quiz_page.png)
  ![Spelling Quiz Page](documentation/edge_spelling_quiz_page.png)


  - Noted Issues:
    - The Speech Synthesis does not work on Brave browser;
    - vw does not work properly in Edge browser;
+ The app was checked by devtools implemented on Firefox and Chrome browsers.
+ The app was checked with [Responsive Website Design Tester](https://responsivedesignchecker.com/).
+ The functionality of the links in the app was checked as well by different users.

---
## Validator testing
+ ##### HTML
    - No errors or warnings were found when passing through the official W3C validator.
      - Menu Page:
          ![Menu Page HTML Validator](documentation/menu_page_html_validator.png)
      - Card Page:
          ![Cards Page HTML Validator](documentation/flash_cards_page_html_validator.png)
      - Grammar Quiz:
          ![Grammar Quiz Page HTML Validator](documentation/grammar_quiz_page_html_validator.png)
      - Spelling Quiz:
          ![Spelling Quiz Page HTML Validator](documentation/spelling_quiz_page_html_validator.png)
    
+ ##### CSS
    - No errors or warnings were found when passing through the official W3C (Jigsaw) validator except the warnings that all: 

    ![CSS Validator Errors](documentation/w3c_validator_errors.png)
    ![CSS Validator Warnings](documentation/w3c_validator_warnings.png)


+ ##### JS
    - No errors or warnings were found when passing through the official JSHint validator except the warnings that all: 

      - Cards:
          ![JSHint Validator Cards JS](documentation/jshint_flash_cards_js.png)


      - Grammar Quiz:
          ![JSHint Validator Grammar Quiz JS](documentation/jshint_grammar_quiz_js.png)


      - Spelling Quiz:
          ![JSHint Validator Spelling Quiz JS](documentation/jshint_spelling_quiz_js.png)


+ ##### Accessibility and performance 
    - Using lighthouse in devtools I confirmed that the website is performing well, accessible and colors and fonts chosen are readable.
      - Menu Page:
          ![Menu Page Performance Score](documentation/menu_page_performance.png)
      - Cards Page:
          ![Cards Page Performance Score](documentation/flash_cards_performance.png)
      - Grammar Quiz:
          ![Grammar Quiz Page Performance Score](documentation/grammar_quiz_performance.png)
      - Spelling Quiz:
          ![Grammar Quiz Page Performance Score](documentation/spelling_quiz_performance.png)



