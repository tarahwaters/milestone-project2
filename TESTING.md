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
| **Home Navbar Button** | When clicked the Home page will open | Clicked Home on the Nav bar | Home page opened when clicked |
| **About Navbar Button** | When clicked the About page will open | Clicked About on the Nav bar | About page opened when clicked |
| **Contact Navbar Button** | When clicked the Contact page will open | Clicked Contact on the Nav bar | Contact page opened when clicked |
| **Summit logo / Brand name on Navbar** | When clicked the Home page will open | Clicked the logo or brand name on the Nav bar | Home page opened when clicked |
| **Menu Item Button** (screens less than 1400px width) | When clicked the menu item list will open and drop down | Clicked the menu button | Menu list opened |
| **Hero Image Carousel** | Images will automatically scroll across but the user can also click and swipe to the next image | Clicked and swiped the images on the carousel | Carousel changes to the next image in the sequence |
| **'We know what it takes' Link to About Page** | Highlighted text in company-summary section should open the About page | Clicked the 'we know what it takes' text | About page opened when link clicked |
| **'Get in touch' Button Link to Contact Form** | User will be taken to the contact form at the bottom of the page when the button is clicked | Cliked the 'Get in touch' button | Page scrolls down to the contact form or 'Get in touch' section |
| **Form Submit Button** | Form submits and redirects to confirmation page (redirect.html) when required data has been added and submit button is clicked| Clicked the submit button on the form | The form is successfully submitted on click and the user is redirected to a confirmation page |
| **Home Button on Redirect Page** | When clicked the Home page will open | Clicked the Home button on the Redirect page | Home page opened when clicked |
| **Review Carousel Previous / Next image icons** | When clicked the review image and caption will change to the previous / next person | Clicked both the previous and next icons | Review image and caption changed to different person in the carousel |
| **Social Link Icons** | Social link icons open relevant websites in a new tab when clicked | Clicked each social link icon | All links opened a new tabl and to the correct site |


## Responsiveness

I have tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Screenshot | Notes |
| --- | --- | --- |
| **Small Mobile** 320x734 (DevTools) | [Main GamePlay](documentation/testing/responsive-small-mob-main.png) / [Help Modal](documentation/testing/responsive-small-mob-help.png) / [Win Modal](documentation/testing/responsive-small-mob-win.png)   | Works as expected |
| **Medium Mobile** 375x374 (iPhone SE using DevTools) | [Main GamePlay](documentation/testing/responsive-med-mob-main.png) / [Help Modal](documentation/testing/responsive-med-mob-help.png) / [Win Modal](documentation/testing/responsive-med-mob-win.png) | Works as expected |
| **Large Mobile** 412x915 (Samsung s20 Ultra) | [Main GamePlay](documentation/testing/responsive-large-mob-main.png) / [Help Modal](documentation/testing/responsive-large-mob-help.png) / [Win Modal](documentation/testing/responsive-large-mob-win.png) | Works as expected |
| **Tablet** 786x734 (iPad Pro) | ![screenshot](documentation/testing/responsive-tablet-768px.png) | Works as expected |
| **17" Laptop** 1707x960 | ![screenshot](documentation/testing/responsive-laptop-1024px.png) | Works as expected   |
| **22" Desktop** 1680x1050 | ![screenshot](documentation/testing/responsive-laptop-lg-1440px.png) | Hero-image cover text smaller than expected here but only minor issue |
| **4K Monitor** 2560x1506 | ![screenshot](documentation/testing/responsive-4k-2560px.png) | Works as expected |

## Lighthouse Audit

I have tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![Lighthouse Results Mobile Screenshot](documentation/testing/lighthouse-mob-results.png) | **Pass** |
| Home | Desktop | ![Lighthouse Results Desktop Screenshot](documentation/testing/lighthouse-desktop-results.png) | **Pass** |

Note for future development - backface colour contrast of the function cards may not be visually assessible / comfortable for some users, so this will be taken into consideration when developing further. For the moment, it doesn't impact the functioning of the game too much as the text is still clear against the background.

## User Story Testing

| User Story | Screenshot | Notes |
| --- | --- | --- |
| As a new site user, I would like to find out more about the services offered. | ![screenshot](documentation/testing/user-story-company-summary.jpg) | A summary of the service the company provides is highlighted on the Home page. |
| As a user I want to find this information easily, without too many clicks needed. | ![screenshot](documentation/testing/user-story-homepage.jpg) | Navigation between pages is clear via the navbar menu and a contact form is accessible on each page. |
| As a user I want to know the experience level of the consulting team and their backgrounds.| ![screenshot](documentation/testing/user-story-team-details.jpg) | The About page gives details of each team member and their backgrounds. |
| As a user I want to be reassured that the team are trustworthy, have a positive reputation and a track record of successful candidates. | ![screenshot](documentation/testing/user-story-reviews.jpg) | 'What are people saying?' section is accessible from the Home page where users can read reviews from previous clients. |
| As a user I want to get in touch with the company easily and securely, without needing to commit or pay anything upfront. | ![screenshot](documentation/testing/user-story-contact-form.jpg) | There is a contact form accessible at the bottom of each page for easy sign-up. |
| As a user I want to be able to find the company contact details and social links easily. | ![screenshot](documentation/testing/user-story-social-links.jpg)  ![screenshot](documentation/testing/user-story-easy-submit-details.jpg) | The Contact page is accessible via the navbar menu (as expected) and there are social links in the footer of each page. |
| As a user I want reassurance that my enquiry will be answered quickly and the process is straight-forward. | ![screenshot](documentation/testing/user-story-submit-confirmation.jpg) | The Redirect page post contact form submission gives the user a time frame of when their enquiry will be answered. |
| As a user I want to the option of opting in / out of receiving newsletters and advice by email when submitting my details. | Unable to achieve at this time - See **Future Features**. | X |
| As a user I want to view this information smoothly on preferably either a mobile device or tablet, with the option of also a desktop. | ![screenshot](documentation/readme/am-i-responsive-summit-careers.png)| The site has a responsive layout accessible from different popular devices and browsers. |
| As a site owner I want users to find out about our services and team | ![screenshot](documentation/testing/user-story-team-details.jpg) | There is information about the company and its team acccessible from the Home and About page. |
| As a site owner I want users to submit their contact details and arrange schedule a meeting with us. | ![screenshot](documentation/testing/user-story-get-in-touch.jpg) ![screenshot](documentation/testing/user-story-contact-form.jpg) | Contact form is accessible at the bottom of each page as per the client's specifications and the button 'Get in touch' will take the user straight to the form. |
| As a site owner I want users to know the positive success we have had with other clients and the process involved when working with us | ![screenshot](documentation/testing/user-story-reviews.jpg) | The Review section of the Home page gives details of positive feedback from other clients, but the Study Abroad page was intended to outline the company's process in more detail (unable to achieve at this time, but a part of **Future Features**.)

## Issues / Bugs

- Fixed bugs
- Ongoing Issues