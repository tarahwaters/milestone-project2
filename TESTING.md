# Testing

Return back to the [README.md](README.md) file.

In this section I will be providing evidence to show that:
- The project **features** work as intended
- The **users** can achieve their goals
- The project is **responsive** across different devices and screen sizes
- The project is **compatible** across different web browsers
- The project uses **valid code** according to standard practice
- The project passes audits for **performance, accessibility, best practices and SEO** (using Lighthouse by Chrome Developer Tools)

## Code Validation

I will use this space to discuss code validation of my code files (where applicable).
I will not validate external libraries/frameworks, such as imported Bootstrap etc.

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate the HTML file.

I validated the live page using the deployed URL. This gave me a custom URL which I have included in the documentation below. This will make it easier when validating again in future.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftarahwaters.github.io%2Fmilestone-project2%2F) | ![HTML Validation Results Screenshot](documentation/testing/validation-html-results.png) | **Pass**: No Errors, 1 warning due to code credit url |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate my CSS file.

The deployed URL was used to validate the CSS since a single file was used for the project. This gave a custom URL which is included and can be used for future validation. Evidence from the direct code input validation was also included.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw - deployed link](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftarahwaters.github.io%2Fmilestone-project2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) | ![Jigsaw Deployed Link Results Screenshot](documentation/testing/validation-css-deployed-link.png) | **Pass**: no errors, warnings shown are from imported Boostrap styling and also **-webkit-fill-available** is a vendor extension |
| style.css | [Jigsaw - direct input link](https://jigsaw.w3.org/css-validator/validator)  |![Jigsaw Direct Input Results Screenshot](documentation/testing/validation-css-direct-input.png)  | **Pass**: No Errors, warnings are from Boostrap button styling |

### JavaScript

I have used the recommended [JS Hint](https://jshint.com/) to validate my JS script and also [Esprima](https://esprima.org/demo/validate.html) to check for any syntax errors.

<!-- The deployed URL was used to validate the JS since a single file was used for the project. This gave a custom URL which is included and can be used for future validation. Evidence from the direct code input validation was also included. -->

| File | Validator Tool |Screenshot | Notes |
| --- | --- | --- | --- |
| script.js | [JSHint](https://jshint.com/) |![JSHint Results Screenshot](documentation/testing/validation-js-jshint-results.png) | **Pass**: no errors found after adding code to bypass undefined $ jquery and es6 version errors (support found from stackoverflow: [undefined jquery](https://stackoverflow.com/questions/39510736/eslint-dollar-is-not-defined-no-undef) and [es6 errors](https://stackoverflow.com/questions/54647294/const-is-available-in-es6-use-esversion-6) in JSHint) |
| script.js | [Esprima](https://esprima.org/demo/validate.html)  |![Esprima Results Screenshot](documentation/testing/validation-js-esprima-syntax-results.png)  | **Pass**: No Errors |

## Browser Compatibility

The live/deployed site was tested on multiple browsers to check for compatibility issues.

The following popular browsers were tested:
- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Edge](https://www.microsoft.com/edge)
- [Safari](https://support.apple.com/downloads/safari)
- [Brave](https://brave.com/download)
- [Opera](https://www.opera.com/download)

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![Chrome Compatibility Screenshot](documentation/testing/compatibility-chrome.png) | Works as expected |
| Firefox | ![Firefox Compatibility Screenshot](documentation/testing/compatibility-firefox.png) | Works as expected |
| Edge | ![Edge Compatibility Screenshot](documentation/testing/compatibility-edge.png) | Backface of card designs don't fully fit but this does not distort the image quality. Font-sizing of function descriptions is smaller than on other browsers but does not reduce functionality / usability |
| Safari | ![Safari Compatibility Screenshot](documentation/testing/compatibility-safari.jpeg) | Works as expected |
| Brave | ![Brave Comptibility Screenshot](documentation/testing/compatibility-brave.png) | Works as expected |
| Opera | ![Opera Compatibility Screenshot](documentation/testing/compatibility-opera.png) | Same as Edge - Backface of card designs don't fully fit but this does not distort the image quality. Font-sizing of function descriptions is smaller than on other browsers but does not reduce functionality / usability |

## Manual Testing

| Feature | Expect | Action | Result |
| --- | --- | --- | --- |
| **Gamegrid** | All cards showing their backfaces, gamegrid in clear view (with no modals open), move counter and timer set to zero. | Opened / refreshed the page. | Gamegrid and scores were reset to zero and ready for gameplay, modals were hidden. |
| **Game button style change on hover and focus** | All game buttons will change to #B65B81 colour upon a mouse hover and click | Hover over and clicked the game buttons | All game buttons responded to a mouse hover and click. However the 'How To Play' button remains in the focus colour even after the modal close, until a click elsewhere (see [Issues / Bugs](#issues-/-bugs) section).
| **Reset button** | When clicked the game will refresh and the game will reset. | Clicked Reset button. | Page refreshed, cards reset to starting position, move counter and timer reset to zero. |
| **How To Play button** | When clicked the 'How To Play'' modal will open (if a game has already started, the timer will pause). | Clicked the How To Play button. | 'How To Play' modal opened when clicked, timer pauses if a game has started. |
| **Close button in 'How To Play' modal** | When clicked the modal will close and the timer will resume (if game has started) or will remain at 00:00 if no game has started. | Clicked the close button (may need to scroll down on smaller devices). | Modal closed when button clicked and timer either stayed at 00:00 or resumed if paused (please see [Issues / Bugs](#issues-/-bugs) section for timer anomaly error in some situations - occasionally there is an out of sync timer when resuming after pause).|
| **Close 'How To Play' modal by clicking the homepage behind (Boostrap feature)**  (relevant for larger screens only) | When background homepage is clicked, the modal will close and timer will resume after pause (if game has already started) or remain at 00:00 if game hasn't started. | Clicked the background homepage while the modal was open. | Modal closed and timer resumed if paused (again see [Issues / Bugs](#issues-/-bugs) section for out of sync timer error). |
| **Cell Type images and written Function cards (frontfaces)** | Cell images and matching written functions are visible and readable upon being flipped 'open' | Clicked cards to flip them and cell type cards show images (with a descriptive label) and function cards show a written description to be matched | 'Cell Type' cards showed an image and label when flipped. 'Function' cards showed a readable description when clicked (see [Responsiveness](#responsiveness) or [Issues / Bugs](#issues-/-bugs) for any readability issues).
| **Shuffling of cards** | Cell type cards shuffle separately to function cards to provide a clear distinction for user. All cards shuffle before the start of a new game (after the DOM has fully loaded) | Clicked reset / refreshed the page to reset the game and flip cards to see cards have shuffled and show in a different order | Cards shuffle to a new order before the start of each new game and when the page is refreshed (changes in the assigned order numbers can also be viewed in DevTools when inspecting the HTML code).
| **Card Flips** | Cards will flip from backface (either saying 'Cell Type' or 'Function') to frontface (either a cell type image or function description). The first card will stay flipped until a second card is flipped. If the second card flipped is the correct matching pair, the cards stay open on the front face. If the second card flipped is not a match, both cards will flip back.  | Clicked a first and second card | Both cards flipped and stayed open if they were a match, and flipped back if there was no match. |
| **Only two cards flipped at one time** | Once two cards are clicked that are not a match, both cards must flip back before the next card can be clicked | Clicked two cards that were not a match, then tried to click another. | Cards could not not be clicked until a 'no match' had been reset and flipped back. |
| **Win Message Modal** | On completing the game (by matching all 8 pairs of cards), the winner Modal opens revealing a message with the user's move count and game time, and downloadable resources. | Matched all card pairs by clicking the cards | Winner message opens up on the screen, revealing the winner message, scores and downloadable resource information. |
| **Move Counter** | Keeps a running total of each pair of cards clicked before the user completes the game. Starts at 0 and increments by 1 when two cards (a matching pair attempt) have been clicked, and stops when all pairs are matched. The final move score should be visible at the top of the winner message | Clicked the cards and completed all matching pairs to win the game. | Moves were counted for each pair attempt made, and the move counter stopped when all cards have been flipped. The final move count was visible at the top of the win modal. |
| **Timer** | Timer is at 00:00 before cards are clicked to start the game. The time will increase every second, by one second. The timer will pause when the instructions are open, and will resume when the modal is closed. The timer will continue while the game is in play, and will stop when the game is completed. The final time should be visible at the top of the win message. | Click the cards to start the game and the timer. Test the timer will pause by opening the modal, and test it will resume by closing the instructions. Complete the game to view the final time on the win message. | Timer at zero when the game is reset or first loaded. Timer started when first card was clicked. The timer increased by one second, every second until the game was completed (timer sometimes continues once win message is closed and game is yet to be reset, but final time is logged correctly). The timer pauses when the game instructions are open, and resumes when closed (if the game has started), but sometimes this triggers it to speed up and become out of sync (see [Issues / Bugs](#issues-/-bugs)). |
| **Downloadable resource links and clickable images** | When links or images are clicked, the correct pdf resource will open in a separate tab. | Clicked both the links and images. | Correct pdf resource (2 options) opened in a separate tab. |
| **Play Again! button** | When the winner message is open, a 'Play Again!' button can be clicked to reset and restart a new game. | Win modal will close, the game page will be refreshed and all cards and scores will be reset back, ready for a new game to start. | Clicked the button and the modal closed, and game was fully reset.


## Responsiveness

I have tested my deployed project on multiple devices to check for responsiveness issues.

From this testing, I would recommend the game to be used on devices larger than 340px width and on a vertical plane (on mobile devices) - this will give a better gaming experience since the horizontal layout is not responsive with current styling - e.g. [iPhoneSE horizontal view](documentation/testing/responsive-iphoneSE-horizontal.png), and font-sizing becomes an issue at <340px.

| Device | Screenshot | Notes |
| --- | --- | --- |
| **Small Mobile** 320x734 (DevTools) | [Main GamePlay](documentation/testing/responsive-small-mob-main.png) / [Help Modal](documentation/testing/responsive-small-mob-help.png) / [Win Modal](documentation/testing/responsive-small-mob-win.png)   | Font-sizing on cards is slightly too big for devices <340px width (see **Main GamePlay** screenshot) so the game is recommended for use on bigger screens until this error is fixed in future |
| **Medium Mobile** 375x374 (iPhone SE using DevTools) | [Main GamePlay](documentation/testing/responsive-med-mob-main.png) / [Help Modal](documentation/testing/responsive-med-mob-help.png) / [Win Modal](documentation/testing/responsive-med-mob-win.png) | Works as expected |
| **Large Mobile** 412x915 (Samsung s20 Ultra) | [Main GamePlay](documentation/testing/responsive-large-mob-main.png) / [Help Modal](documentation/testing/responsive-large-mob-help.png) / [Win Modal](documentation/testing/responsive-large-mob-win.png) | Works as expected |
| **Tablet** 786x734 (iPad Pro) | [Main GamePlay](documentation/testing/responsive-tablet-main.png) / [Help Modal](documentation/testing/responsive-tablet-help.png) / [Win Modal](documentation/testing/responsive-tablet-win.png) | DevTools shows backfaces of cards to be more zoomed in than expected (on vertical viewing), but this does not distort the image and the user can still read the cards normally. Hoirzontal viewing works as expected |
| **17" Laptop** 1707x960 | [Main GamePlay](documentation/testing/responsive-17laptop-main.png) / [Help Modal](documentation/testing/responsive-17laptop-help.png) / [Win Modal](documentation/testing/responsive-17laptop-win.png) | Works as expected   |
| **22" Desktop** 1680x1050 | [Main GamePlay](documentation/testing/responsive-22desktop-main.png) / [Help Modal](documentation/testing/responsive-22desktop-help.png) / [Win Modal](documentation/testing/responsive-22desktop-win.png) | Works as expected |
| **4K Monitor** 2560x1506 | [Main GamePlay](documentation/testing/responsive-4Kdesktop-main.png) / [Help Modal](documentation/testing/responsive-4Kdesktop-help.png) / [Win Modal](documentation/testing/responsive-4Kdesktop-win.png) | Works as expected after adding a final media query to target screens over 2000px width (font sizing was previously a little small) |

## Lighthouse Audit

I have tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![Lighthouse Results Mobile Screenshot](documentation/testing/lighthouse-mob-results.png) | **Pass** |
| Home | Desktop | ![Lighthouse Results Desktop Screenshot](documentation/testing/lighthouse-desktop-results.png) | **Pass** |

**Note for future development** - backface colour contrast of the function cards may not be visually assessible / comfortable for some users, so this will be taken into consideration when developing further. For the moment, it doesn't impact the functioning of the game too much as the text is still clear against the background.

## User Story Testing

| User Story | Screenshot | Notes |
| --- | --- | --- |
| As a user, to play a card-matching memory game presented in a visually appealing format | ![screenshot](documentation/testing/responsive-med-mob-main.png) | The game grid is clearly visible in the center of the homepage, with a simple and colourful design that is consistent through the page. Images used were specifically designed to be attractive to make the learning game more fun. Card flipping is smooth and predictable. The title and game description tells the user what type of game it is and instructions can be viewed easily to find out how to play. |
| As a user I want to learn or revise knowledge about specialised cell types in a fun way. | ![screenshot](assets/images/winner/winner-message.gif) ![screenshot](documentation/testing/user-story-win-feedback.png) | Game instructions are simple and very visual so all users can understand and follow. Card flipping is intuitive and game can be played even with no prior knowledge of biology. There are prompts in the instructions that can be accessed at any time via the 'How To Play' button. There are also free downloadable resources available as a prize to support their learning further / play a phyiscal version of the game. |
| As a user I want to read the rules of the game| ![screenshot](documentation/testing/user-story-help.png) | Game instructions are provided in a modal which can be accessed before or during gameplay. Visuals were used to demonstrate clearly what a card match should look like, and details of each cell card with its matching function. This allows users with no prior knowledge of the specialised cells to access the learning and play the game. |
| As a user I want to access the prelearning material before testing their knowledge during the game | ![screenshot](documentation/testing/responsive-4Kdesktop-help.png) | Details of each cell type card and their matching function can be found in a table within the instructions modal |
| As a user I want to to navigate through the elements of the game / website easily | ![screenshot](documentation/testing/user-simple-layout.png) | There is only one page for the game and just two main buttons can control the gameplay ('Reset' and 'How To Play'). These buttons are close to the main game grid, where the user would expect to find them - directly below the game grid. A timer and move counter are visible above the game grid and opened modals will always occupy the center of the screen and can be navigated easily by scrolling. |
| As a user I want to to receive ongoing feedback about my progression through the game | ![screenshot](documentation/testing/user-story-game-feedback.png) | A timer and move counter provide the user with continuous feedback of how they are progressing through the game. The cards also remain open (so cannot be re-flipped) once a pair has been found, so a visual user can see how many cards they have left to match. |
| As a user I want to have fun while playing the game (and also learn!). | ![screenshot](documentation/testing/user-story-fun.png) | Friends and family who have tried the game already have said it's a fun and easy game to play, and you can learn something without having to focus too hard. The flipping animation is appealing due to its simplicity and smoothness. Also users who are competitive can aim to complete the game faster and in fewer moves, and with repeition they may retain more information about the content. The extra resources also provide users with more opportunities to practise their learning in a similar visual style. |
| As a user I want to have the option of viewing and downloading a summary of the cell types and their functions |![screenshot](assets/images/winner/flashcards-page1-preview.webp) ![screenshot](documentation/testing/user-story-resources.png) | Links to 2 pdf documents containing card summaries and printable flashcards can be viewed / downloaded upon completing of a game (from within the win modal) |
| As a user to restart the game to play again |  ![screenshot](documentation/testing/user-story-play-again.png) ![screenshot](documentation/readme/feature-game-buttons.png) | The 'Reset' button or 'Play again!' button can be clicked to reset the game, or alternatively the page can be refreshed |
| As a user I want to have an option of playing an increased level of difficulty | N/A | This feature wasn't achieved during this stage of the development but please see [Future Features](README.md#future-features)


## Issues / Bugs

Some of these issues are part of the overall game development and so may not be considered as 'bugs' but I still thought it would be useful and relevant to talk about them here as they were all a part of the troubleshooting process.

### Game Development and Fixed Bugs ✅

**Preventing more than two cards flipping at a time** - A JS variable was declared called 'lockMoves' along with an 'if' statement which, when true, does not allow another card to be clicked until a pair has been matched or flipped back. This was important because early on in the game, extra clicking made the game prone to freezing which could not be undone unless the game was reset.

**Same card click freezing the game** - This issue is highly relevant for memory card games that pair two of the same cards together for a match, whereby clicking the same card could be considered 'a match'. Since my game matches pairs that are not identical, users are less likely to try and pair the same card together but it was still necessary to prevent this so that the correct matches could be checked for. This then allowed me to develop a 'completedPairs' condition to provide feedback for matching all pairs and 'winning' the game. Clicking on the same card twice was also causing glitches / freezing the game so this needed to be addressed. This was fixed by including a matching condition in JS that first checked for a match (checkForMatch()) by comparing the first and second card dataset.match, then removed the click eventlisteners for the cards if they matched (so they are disabled from any further flips). If there is no match, there is a time delay before cards are flipped back and click eventlisteners are added again.

**Shuffling of all cards at the same time, but not in the same grid** - In the early stages of the game, all cards were going to be shuffled together in one grid (which is evident from the initial [Wireframes](README.md#wireframes) I had designed). Most card matching games on the internet use identical pairs where the backfaces are all one design, but when discussing the project idea with my mentor, he advised against this. 

If all cards were shuffled together, it would not be clear enough to the user which pairs of cards could be matched. I then designed different backfaces for the card types (cell type vs function), and tried having the cards all shuffle together for simplicity. This worked, but my mentor thought the UX could be improved further by physically separating the cards by their 'type'. I revisted my designs, and created separate grids for the 2 sets of cards and styled them so that they would operate in exactly the same way, and as part of the main gamegrid square. They are also called upon to shuffle in the same way, but separately, so that there is a clear distinction between cards and users can make their choice of which to match. 

I decided not to incorporate JS code that would prevent the user from flipping two cards of a similar type (i.e. a cell type with another cell type, which is not a matching pair), because it can be effective for the user to flip two images / functions to first make the correct match association (which stimulates the learning of the science) before using their memory to locate the cards. This can speed up the game and reduce frustration for the user as they play.

**Issues with Boostrap modals opening and closing properly** - Boostrap have their own JS modal plugin that can be used to customise a modal's functionality. For my helpModal (How To Play instructions), I wanted this to be opened upon a button click, and the winModal to be opened upon completion of a game. There were issues in adding this functionality despite me following the documentation. The main issue was due to the fact that the most up to date version of Bootstrap (v5.0) did not include jquery support. Instead, I switched to using a previous version which does include jquery - v4.6. Since I had first written my modal code using the v5.0 template, this caused compatibility issues with running the modal attributes, but once these were removed to suit v4.6, the modals worked fine.

**Pausing the timer when the modal opens, restarting when the modal closes** - This can be considered a 'partial fix'.
To improve user experience, the timer should pause during gameplay if the user chooses to check the instructions modal. I used the Bootstrap event functionality from their documentation to stop the timer when the modal is open, and to start again when it is closed. JS will only stop / start the timer function if gameplay has already begun (ie. gameStart = true), which seems to work the majority of the time. However, I noticed that on some occasions, the timer will resume and speed up, adding the seconds much quicker than before. See [Ongoing Issues](#ongoing-issues-❌) for more details.

Another timer issue that does appear to be fixed - initially the pause / resume timer function responded only to the 'close' button of the modal, but this didn't accommodate for Boostrap's added functionality of closing a modal by clicking off the screen. However, when I added the function into Bootstrap's modal event JS for hiding the modal, this fixed the problem.


### Ongoing Issues ❌

**Timer restarts after pause and sometimes goes double-time / out of sync** - This issue doesn't always happen, so most users may not even notice it's an issue, but when it does happen it's weird and annoying. I didn't have enough time to fully troubleshoot the issue, but when I was first researching how to code for the timer, I did read how there can be many inaccuracies in building a timer that relies on the time interval to be in milliseconds - which depends on the accuracy of each system see [StackOverflow advice](https://stackoverflow.com/questions/16134997/how-to-pause-and-resume-a-javascript-timer) for details. They suggested an alternative way of coding for the timer with more precision and accuracy.

What might be happening, is that depending on when the timer is paused within the interval of 1000 milliseconds, the restarted timer could be out of sync with the orginal timer. Although I did not have the time or scope to investigate this now, I would approach this during future development.

**Timer display does not always read in 00:00 format** - This does not affect overall gameplay, but it can be a bit visually unappealing / confusing to see the time display as '3:1' for example. I think what is needed is clearer definition of how the time is defined within the JS and the innerHTML, but unfortunately I did not have enough time to fix this.

**Responsiveness issues** - As previously mentioned in the [Responsiveness](#responsiveness) testing section, it is recommended that this game is only viewed on devices larger than 340px width (and using the vertical view for mobiles). This is due to issues with styling the game grid to be responsivess enough for all devices sizes and orientations. My first error during initial styling was that I used absolute measurements for the game card containers and this did not accommodate for responsiveness. When I had finished the JS game functionality, I adapted the sizing using vw and vh units to be more responsive, and defined media queries at every breakpoint I came across when using DevTools. This approach lacked efficiency, and also couldn't accommodate for every screen size (particularly with the smallest screens due to font-sizing of descriptions) so in future I would aim to design a different grid layout / use a responsive grid framework when building the containers. Due to the nature of the game type, where there is a fine balance between image sizing / text sizing and gameplay challenge, a compromise was made at this point so that a majority of screens are catered for but not all. I aim to work on improving responsiveness styling for future.

**How To Play button stuck in 'focus mode' after closing the modal** - I overrode some of the Boostrap button styling to use a colour that matched my theme for the game design. I wanted the button to have styling that would respond to the user's hover and click, but unfortunately I did not have time to fix the issue of the How To Play button. It currently stays in the 'focus' colour until the user clicks again which is poor UX. I did play around with some of the Boostrap classes to fix this, but I think in overriding the BS styles, I have removed some of the original functionality. This is a minor issue though which doesn't affect overall gameplay.

