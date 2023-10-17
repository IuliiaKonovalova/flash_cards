# Testing


## **COMPATIBILITY:**

+ The app was tested on the following browsers: Chrome, Firefox, Brave, Edge:

  - Chrome:

  ![Menu Page](documentation/compatibility/chrome_menu_page.png)
  ![Flash Cards Page. Front](documentation/compatibility/chrome_cards_front_page.png)
  ![Flash Cards Page. Back](documentation/compatibility/chrome_cards_back_page.png)
  ![Grammar Quiz Page](documentation/compatibility/chrome_grammar_quiz_page.png)
  ![Spelling Quiz Page](documentation/compatibility/chrome_spelling_quiz_page.png)
  
  - Firefox:

  ![Menu Page](documentation/compatibility/firefox_menu_page.png)
  ![Flash Cards Page. Front](documentation/compatibility/firefox_cards_front_page.png)
  ![Flash Cards Page. Back](documentation/compatibility/firefox_cards_back_page.png)
  ![Grammar Quiz Page](documentation/compatibility/firefox_grammar_quiz_page.png)
  ![Spelling Quiz Page](documentation/compatibility/firefox_spelling_quiz_page.png)

  - Brave:

  ![Menu Page](documentation/compatibility/brave_menu_page.png)
  ![Flash Cards Page. Front](documentation/compatibility/brave_cards_front_page.png)
  ![Flash Cards Page. Back](documentation/compatibility/brave_cards_back_page.png)
  ![Grammar Quiz Page](documentation/compatibility/brave_grammar_quiz_page.png)
  ![Spelling Quiz Page](documentation/compatibility/brave_spelling_quiz_page.png)

  - Edge:

  ![Menu Page](documentation/compatibility/edge_menu_page.png)
  ![Flash Cards Page. Front](documentation/compatibility/edge_cards_front_page.png)
  ![Flash Cards Page. Back](documentation/compatibility/edge_cards_back_page.png)
  ![Grammar Quiz Page](documentation/compatibility/edge_grammar_quiz_page.png)
  ![Spelling Quiz Page](documentation/compatibility/edge_spelling_quiz_page.png)


  - Noted Issues:
    - The Speech Synthesis does not work on Brave browser;
    - vw does not work properly in Edge browser;

## Devtools testing

+ The app was checked by devtools implemented on Firefox and Chrome browsers.

## Responsiveness testing

+ The app was checked with [Responsive Website Design Tester](https://responsivedesignchecker.com/).

  1. Mobile Screens:

      - Mobile 320x480:

      ![Mobile 320x480](documentation/responsiveness/mobile_320_480.gif)

      - Mobile 320x568:

      ![Mobile 320x568](documentation/responsiveness/mobile_320_568.gif)

      - Mobile 360x640:

      ![Mobile 360x640](documentation/responsiveness/mobile_360_640.gif)

      - Mobile 375x667:

      ![Mobile 375x667](documentation/responsiveness/mobile_375_667.gif)

      - Mobile 384x640:

      ![Mobile 384x640](documentation/responsiveness/mobile_384_640.gif)

      - Mobile 411x731:

      ![Mobile 411x731](documentation/responsiveness/mobile_411_731.gif)

      - Mobile 414x736:

      ![Mobile 414x736](documentation/responsiveness/mobile_414_736.gif)
      
  1. Tablets Screens:

      - Tablet 600x960:
        
      ![Tablet 600x960](documentation/responsiveness/tablet_600_960.gif)

      - Tablet 768x1024:

      ![Tablet 768x1024](documentation/responsiveness/tablet_768_1024.gif)

      - Tablet 800x1280:
        
      ![Tablet 800x1280](documentation/responsiveness/tablet_800_1280.gif)

      - Tablet 1366x1024:

      ![Tablet 1366x1024](documentation/responsiveness/tablet_1366_1024.gif)
      
  1. Desktop Screens:

      - Desktop 1024x600:
        
      ![Desktop 1024x600](documentation/responsiveness/desktop_1024_600.gif)

      - Desktop 1024x800:

      ![Desktop 1024x800](documentation/responsiveness/desktop_1024_800.gif)

      - Desktop 1366x768:
        
      ![Desktop 1366x768](documentation/responsiveness/desktop_1366_768.gif)

      - Desktop 1440x900:

      ![Desktop 1440x900](documentation/responsiveness/desktop_1440_900.gif)

      - Desktop 1600x900:
        
      ![Desktop 1600x900](documentation/responsiveness/desktop_1600_900.gif)

      - Desktop 1680x1050:

      ![Desktop 1680x1050](documentation/responsiveness/desktop_1680_1050.gif)

      - Desktop 1920x1080:
        
      ![Desktop 1920x1080](documentation/responsiveness/desktop_1920_1080.gif)

      - Desktop 1920x1200:

      ![Desktop 1920x1200](documentation/responsiveness/desktop_1920_1200.gif)


+ The functionality of the links in the app was checked as well by different users.

---
## Validator testing

+ ### HTML
    - No errors or warnings were found when passing through the official [W3C](https://validator.w3.org/) validator.
      - Menu Page:
          ![Menu Page HTML Validator](documentation/validators_testing/menu_page_html_validator.png)
      - Card Page:
          ![Cards Page HTML Validator](documentation/validators_testing/flash_cards_page_html_validator.png)
      - Grammar Quiz:
          ![Grammar Quiz Page HTML Validator](documentation/validators_testing/grammar_quiz_page_html_validator.png)
      - Spelling Quiz:
          ![Spelling Quiz Page HTML Validator](documentation/validators_testing/spelling_quiz_page_html_validator.png)
    
+ ### CSS
    - No errors or warnings were found when passing through the official [W3C (Jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_uri) validator except the warnings that: root variable (  --linear-grad) could not be checked and -webkit-backface-visibility - is unknown. However, css code works perfectly. 

    ![CSS Validator Errors](documentation/validators_testing/w3c_validator_errors.png)
    ![CSS Validator Warnings](documentation/validators_testing/w3c_validator_warnings.png)


+ ### JS
    - No errors or warnings were found when passing through the official [JSHint](https://jshint.com/) validator except the warnings that   

      - Cards:

          ![JSHint Validator Cards JS](documentation/validators_testing/jshint_flash_cards_js.png)


      - Grammar Quiz:

          ![JSHint Validator Grammar Quiz JS](documentation/validators_testing/jshint_grammar_quiz_js.png)


      - Spelling Quiz:

          ![JSHint Validator Spelling Quiz JS](documentation/validators_testing/jshint_spelling_quiz_js.png)


## Accessibility and performance

- Using lighthouse in devtools I confirmed that the website is performing well, accessible and colors and fonts chosen are readable.

  - Menu Page:

      ![Menu Page Performance Score](documentation/lighthouse_report/menu_page_performance.png)

  - Cards Page:

      ![Cards Page Performance Score](documentation/lighthouse_report/flash_cards_performance.png)

  - Grammar Quiz:

      ![Grammar Quiz Page Performance Score](documentation/lighthouse_report/grammar_quiz_performance.png)

  - Spelling Quiz:

      ![Grammar Quiz Page Performance Score](documentation/lighthouse_report/spelling_quiz_performance.png)
