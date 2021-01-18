# Harry Potter Quiz

![GitHub contributors](https://img.shields.io/github/contributors/abibubble/milestone2-harry-potter-quiz)
![GitHub last commit](https://img.shields.io/github/last-commit/abibubble/milestone2-harry-potter-quiz)
![GitHub language count](https://img.shields.io/github/languages/count/abibubble/milestone2-harry-potter-quiz)
![GitHub top language](https://img.shields.io/github/languages/top/abibubble/milestone2-harry-potter-quiz)
![Font Awesome version](https://img.shields.io/badge/Font%20Awesome-v5.15.1-blue)
![GitHub forks](https://img.shields.io/github/forks/abibubble/milestone2-harry-potter-quiz?style=social)

[Here is a link to the final project](https://abibubble.github.io/milestone2-harry-potter-quiz/)

This is a Harry Potter quiz, made with fully interactive elements, music and sound effects to match. 
It is designed to be responsive on a wide range of devices, whilst also being easy to navigate through. 
I chose this project as the Harry Potter novels were a huge inspiration to myself and many others from a young age.

![Final project image home page](assets/images/docs/finalpage.png)

## Contents

* [User Experience (UX)](#user-experience-(ux))
    * [Initial Discussion](#initial-discussion)
    * [User Stories](#user-stories)

* [Design](#design)
    * [Color Scheme](#color-scheme)
    * [Typography](#typography)
    * [Imagery](#imagery)
    * [Wireframes](#wireframes)
    * [Features](#features)
    * [Audio](#audio)

* [Technologies Used](#technologies-used)
    * [Languages Used](#languages-used)
    * [Frameworks, Libraries & Programs Used](#frameworks-libraries-and-programs-used)

* [Deployment](#deployment)
    * [Initial Deployment](#initial-deployment)
    * [How to Fork it](#how-to-fork-it)
    * [How to Clone it](#how-to-clone-it)
    * [Making a Local Clone](#making-a-local-clone)

* [Testing](#testing)
    * [W3C Validator](#w3c-validator)
    * [Testing User Stories](#testing-user-stories)
    * [Full Testing](#full-testing)
    * [Further Testing](#further-testing)
    * [Solved Bugs](#solved-bugs)
    * [Known Bugs](#known-bugs)
    * [Lighthouse](#lighthouse)
        * [Performance](#performance)
        * [Accessibility](#accessibility)
        * [Best Practices](#best-practices)
        * [SEO](#seo)

* [Credits](#credits)
    * [Code](#code)
    * [Content](#content)
    * [Media](#media)
    * [Acknowledgements](#acknowledgements)

---
## User Experience (UX)
### Initial Discussion
My initial requirements for this project was to create a fun, interactive quiz that could be enjoyed by anyone.
My target audience is Harry Potter fans and their friends and family. Luckily, this covers a large part of the population.
The target demographic is incredibly mixed, as Harry Potter is enjoyed by people of all ages and genders.

The main features that I wanted to include are:
* Interactive quiz elements.
* A score counter for correct answers.
* A progress bar so that the user can see how far through the quiz they are.
* Choose your house, and the questions correlate to which house is chosen.
* Audio that can be toggled on and off, which changes depending on which page you're on.
* A timer that ends the quiz if the time runs out.

### User Stories
#### Client Goals
* The quiz needs to be easily accessible, with instructions and audio settings available throughout.
* The quiz needs to be personalised to each user.
* It needs to be easy to see how many questions there are, and how many correct answers have been made throughout the quiz.
* It needs to be instantly engaging to enourage the user to play the game.
* Questions needs to be randomised and drawn from a large bank of available questions.
* It must be easy to see how much time the user has left to complete the quiz.
* Manouvering around the site needs to be straightforward.
* The user must be able to give up on the quiz if they wish to, and return to the homepage.

#### First Time Visitor Goals
* I want it to be easy to understand what to do.
* I want to be able to easily navigate throughout the site.
* I want to be able to turn the audio on or off at any point in the quiz.

#### Returning Visitor Goals
* I want to have different questions depending on which house I choose, increasing replayability.

#### Frequent Visitor Goals
* I want to be able to play the quiz again with new questions.

---
## Design
### Color Scheme
* Basic color scheme uses rgb(218,165,32) for the gold (also known as goldenrod) and #07080c for the off-black.
* Gryffindor house uses #d74f40 as the primary color, with #fbb928 as the secondary.
* Hufflepuff house uses #fbb92f as the primary color, with #07080c as the secondary.
* Ravenclaw house uses #203268 as the primary color, with #886031 as the secondary.
* Slytherin house uses #005d4a as the primary color, with #a7acaf as the secondary.

![Colors used](assets/images/docs/colors.png)

All of these colors are taken via a color picker tool, directly from the Harry Potter official logo, and from the official Hogwarts crest.

### Typography
* For the opening page, I used the font monospace, as it's got quite a bit of character, and it links with the feeling of entering into something. It's also very similar to a typewriter font, which matches the theme of novels quite nicely.
* I used sans-serif throughout the quiz. It's a clean and easy to read font, whilst also being bold and eye catching. 
* Both of these fonts also don't distract the user from the main theme, and have the added bonus that they're staple fonts with HTML, so all browsers will be able to display them.

### Imagery
* The opening quote page is a direct line from the books, which immediately captures the attention of the user, sets the theme for the quiz, and encourages immersion as soon as they enter the site.
* The large background hero image is designed to be striking and catch the user's attention, making it clear at first glance what the quiz is related to. 
* It directly correlates to the aesthetic of the Harry Potter series, using an image of Gloucester cloisters, which was used in the filming of the Harry Potter films.

### Wireframes
[Here are the wireframes for desktop, mobile and tablet for this project](wireframes.pdf).

### Features
* Interactive quiz elements, including:
    * A score counter for correct answers.
    * A progress bar so that the user can see how far through the quiz they are.
    * Choose your house, the questions correlate to which house is chosen.
    * Background audio that can be toggled on and off.
    * A timer that ends the quiz if the time runs out.
* Responsive on all devices.

### Audio
* In the Harry Potter universe, a witch or wizard has to utter the phrase 'I solemnly swear that I am up to no good' for the Marauders Map to reveal the map.
* Because of this, I've got the phrase displayed, the user has the choice to turn the audio on via the button in the banner at the top. It's also goldenrod to link with the color scheme.
* Once the user clicks to enter the quiz, if the audio is on, the audio will play, as if they're speaking the phrase to reveal the quiz.
* On the Home page, once the audio is turned on, a crackling fire sound can be heard, giving the atmosphere of a common room at Hogwarts.
* Once the quiz starts, if the audio is turned on, a Harry Potter-style theme is played as background music, adding to the experience and the intensity of the quiz.
* When the user gets to the results page, the crackling fire sound returns if the audio is turned on, bringing it full circle so that there is no dramatic stop in the audio.
---

## Technologies Used
### Languages Used
* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
* [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3#:~:text=CSS3%20is%20the%20latest%20evolution,flexible%20box%20or%20grid%20layouts.)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Frameworks Libraries and Programs Used
#### Font Awesome:
[Font Awesome](https://fontawesome.com/) was used on all pages to add the instructions, home, settings and copyright icons.
#### Git:
Git was used for version control by utilizing the Gitpod terminal to add and commit to Git and push to GitHub.
#### GitHub:
GitHub is used to store the code for this project after being pushed from Git.
#### Balsamiq:
Balsamiq was used to create the wireframes during the design process.
#### Responsinator:
[Responsinator](http://www.responsinator.com/) was used to help improve the responsive design on a variety of devices.
#### Google DevTools:
Google DevTools was used to help me find what code correlated to what feature.
#### Am I Responsive Design:
[Am I Responsive Design](http://ami.responsivedesign.is/#) was used to check the responsive design of the quiz.
#### Shields.io:
[Shields.io](https://shields.io/) was used to create the GitHub badges for this README.md file.
#### Audacity:
Audacity was used to record the 'I solemnly swear' audio, and to edit it to sound more within the theme. It was also used to reduce the volume on the other two audio tracks.

## Deployment
### Initial Deployment
This site was deployed to GitHub Pages by following these steps:
1. Login or Sign Up to [GitHub](www.github.com).
2. Create a new repository named "milestone2-harry-potter-quiz".
3. Once created, click on "Settings" on the navigation bar under the repository title.
4. Scroll down to "GitHub Pages".
5. Under "Source", choose which branch to deploy. I chose "master", but this is sometimes shown as "main".
6. Choose which folder to deploy from, usually "/root".
7. Click "Save", then wait for it to be deployed. It can take some time for the page to be fully deployed.
8. Your URL will be displayed above "Source".

### How to Fork it
1. Login or Sign Up to [GitHub](www.github.com).
2. On GitHub, go to [Abibubble/milestone2-harry-potter-quiz](https://github.com/Abibubble/milestone2-harry-potter-quiz).
3. In the top right, click "Fork".

### How to Clone it
1. Login or Sign Up to [GitHub](www.github.com).
2. Fork the repository Abibubble/milestone2-harry-potter-quiz using the steps above in [How to Fork it](#how-to-fork-it).
3. Above the file list, click "Code".
4. Choose if you want to clone using HTTPS, SSH, or GitHub CLI, then click the copy button to the right.
5. Open Git Bash.
6. Change the directory to where you want your clone to go.
7. Type gitclone and then paste the URL you copied in step 4.
8. Press Enter to create your clone.

### Making a Local Clone
1. Log in to [GitHub](www.github.com) and locate the [Repository](https://github.com/Abibubble/milestone2-harry-potter-quiz) for this quiz.
2. Under the repository name, above the list of files, click "Code".
3. Here you can either Clone or Download the repository.
4. You should clone the repository using HTTPS, clicking on the icon to copy the link.
5. Open Git Bash.
6. Change the current working directory to the new location, where you want the cloned directory to be.
6. Type git clone, and then paste the URL that was copied in Step 4.
7. Press Enter, and your local clone will be created.

For a more detailed version of these steps, go to the [Github Docs](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) page on this topic.

---
## Testing
### W3C Validator
The W3C Markup Validator, W3C CSS Validator and JSHint were used to validate the project to ensure there were no syntax errors within the site.
The only errors found were due to 'let', 'const' and template literals only being available in ES6 within the JavaScript code.

1. W3C Markup Validator
    * [HTML Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fabibubble.github.io%2Fmilestone2-harry-potter-quiz%2F)

2. W3C CSS Validator
    * [CSS Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fabibubble.github.io%2Fmilestone2-harry-potter-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

3. JSHint
    * [JSHint](https://jshint.com/)


### Testing User Stories
#### Client Goals
##### The quiz needs to be easily accessible, with instructions and music settings available.
* On every page, there is a link to Instructions, and a button to toggle the music on or off.
* From every page, you can return to the Home page via a button. This cancels the current quiz and allows the user to restart.
* Basic instructions are available on every page, with more information on the Instructions page.

![Image of the instructions page](assets/images/docs/testing/instructionspage.png)

##### The quiz needs to be personalised to each user.
* On the Home page, the user selects their house.
* This updates the color scheme for the entire quiz, changing the answers boxes to their house colors.
* It also gives them a pool of questions related to their chosen house.
* If the user answers 0 - 2 questions correctly, they get the galleons results page.
* If the user answers 3 - 5 questions correctly, they get the remembrall results page.
* If the user answers 6 - 8 questions correctly, they get the letters results page.
* If the user answers 9 - 10 questions correctly, they get the ticket results page.

![Image of a quiz personalised to the house chosen](assets/images/docs/testing/homepage.png)

##### It needs to be easy to see how many questions there are, and how many correct answers have been made throughout the quiz.
* Underneath the answers boxes, there is a tally showing x / 10, with x being their current score. This is updated after each question.
* There is also a progress bar underneath, that shows how far through the quiz they are.

![Image of progress bar and score tally](assets/images/docs/testing/progress.png)

##### It needs to be easy to see how much time is left to complete the questions.
* Underneath the answers boxes, there is a clear timer that counts down from 180 seconds.

![Image of the timer underneath the answers](assets/images/docs/testing/timer.png)

##### It needs to be instantly engaging to enourage the user to play the game.
* The user is immediately greeted with a well-known quote from the Harry Potter books, which then prompts them to click to enter, causing them to interact with the quiz before the quiz even starts.
* The Home page is bright and interesting, with bright colors to draw their eye in, and encourage them to play the quiz.
* The navigation buttons are bright and right at the top, drawing thier eye to the 'Audio on' button. Upon clicking this, the audio adds more immersion to the website.
* Each of the house buttons are bright, and colored using the house colors, which are eye-catching.
* Most people who know Harry Potter have a house that they consider 'their house'. The choosing house function allows them to feel like they're part of the quiz.

![Image of the home page](assets/images/docs/testing/homepage.png)

##### Questions needs to be randomised and drawn from a large bank of available questions.
* There are 10 questions available for each of the 4 houses, giving a question pool of 40 possible questions.
* The question set is fully randomised, without allowing questions to be repeated.

![Image of the quiz page showing an example of a question](assets/images/docs/testing/quizpage.png)

##### It must be easy to see how much time the user has left to complete the quiz.
* Underneath the answer boxes is a timer. It's positioned next to the progress bar and the score counter, which makes it very easy to spot.

![Image of the timer](assets/images/docs/testing/timer.png)

##### Manouvering around the site needs to be straightforward.
* On every page, there is a button to take the user to Home, Instructions, and to toggle the audio.
* On the Home page, there are simple instructions for the user to choose their house, with brightly colored buttons to match the house colors.
* Within the quiz, the question and answers are bright and eye-catching, making it obvious what to do.

![Image of the home page to show the buttons](assets/images/docs/testing/homepage.png)

##### The user must be able to give up on the quiz if they wish to, and return to the homepage.
* On every page, there is a button to take the user to Home or to Instructions, which resets their house, score, and timer back to default.

![Image of the buttons on every page](assets/images/docs/testing/buttons.png)

#### First Time Visitor Goals
##### I want it to be easy to understand what to do.
* There is a clear Instructions page, that details exactly how the quiz works.
* This is easily accessible from every page.
* The instructions on the main pages themselves are clear to read and easy to understand.
* Every page is fully visible on a browser window, nothing requires scrolling down to view it, other than when the user is in landscape orientation on a mobile or tablet.

![Image of the instructions](assets/images/docs/testing/instructionspage.png)

##### I want to be able to easily navigate throughout the site.
* On every page, there is a button to take the user to Home, Instructions, or to toggle the audio on or off.
* All other buttons and links are clearly defined and easy to see.

![Image of the audio button](assets/images/docs/testing/audioon.png)

##### I want to be able to turn the audio on or off at any point in the quiz.
* On the solemnly page, there is a banner at the top allowing them to turn the audio on, and the image on the button changes depending on if the audio is on or off.
* There is an audio button in the top right of every other page, in which the text changes depending on if the audio is on or off.
* If the audio is off (as default), the button says 'Audio on' with a volume up icon.
* If the audio is on, the button says 'Audio off' with a mute volume icon.

![Image of the solemnly page](assets/images/docs/testing/solemnlypage.png)

#### Returning Visitor Goals
##### I want to have different questions depending on which house I choose, increasing replayability.
* There are 10 questions available for each of the 4 houses, giving a question pool of 40 possible questions.
* The question set is fully randomised, without allowing questions to be repeated. This allows the user to replay any house without having the same experience.
* The user can choose any house they like, and the quiz takes you back to the Home page once you've completed the quiz. This allows for easy choosing of a new house.

![Image of a random quiz question](assets/images/docs/testing/quizpage.png)

#### Frequent Visitor Goals
##### I want to be able to play the quiz again with new questions.
* The code is designed so that questions can be changed at any time in the questions variable.
* The code is designed so that additional questions can be added at any time into the questions variable.
* The progress bar and score will then update to the new total amount of questions, and remain functional.

![Image of the progress bar and timer](assets/images/docs/testing/progressandtimer.png)

### Full Testing
[Click here](testing.md) to view the full testing steps that were completed on every device and browser, and screenshots of testing.

#### Desktop / Laptop
1. Google Chrome
    * All tested and working correctly.

2. Microsoft Edge
    * All tested and working correctly.

3. Mozilla Firefox
    * Progress bar backing cannot be styled, so it's white instead of goldenrod.
    * Everything else tested and working correctly.

4. Internet Explorer
    * Internet Explorer doesn't support the click to enter, so is not accessible on this browser.
    * However, Internet Explorer has been replaced by Microsoft Edge, which fully supports this site.

5. Safari
    * The overlay on the score and the timer on the quiz page is shrunken, so it doesn't fully cover the text.
    * This appears to be only with the MacBook Air, when using responsive screen sizes and other devices with the same screen size, there is no problem.
    * Everything else tested and working correctly.

#### Tablet
1. Safari
    * All tested and working correctly.

#### Mobile
1. Google Chrome
    * All tested and working correctly.

2. Safari
    * All tested and working correctly.

3. Samsung Internet
    * On dark mode, all of the colors invert, as shown in [my testing file](testing.md).
    * Everything else tested and working correctly.

### Further Testing
The website was tested on Google Chrome, Firefox, Internet Explorer, Microsoft Edge, Safari and Samsung Internet browsers.
The website was viewed on a variety of devices, including:
* Custom built desktop PC, running Windows 10
* Acer Aspire V Nitro Laptop, running Windows 10
* Lenovo B51 IntelCore i7 Laptop, running Ubuntu 16.04 LTS
* MacBookAir7,2 (13-inch, 2017)
* iPad 6,11 5th generation, running iOS 10.3
* Amazon Fire tablet 7
* iPhone 7
* iPhone X
* iPhone 12
* OPPO Find X2 Lite
* Samsung Galaxy A70
* Samsung Galaxy S9
* Samsung Galaxy S10+
* Samsung A20
* xBox One

A large amount of testing was done to ensure that all pages were visible or hidden correctly, all buttons worked as they should, and the quiz played out as it should.
Friends, family members, and other developers were asked to review the site and documentation to point out any bugs and/or user experience issues that they came across.

### Solved Bugs
1. The setHouse function wasn't acting on the second page, so it didn't change the color scheme as it should.
    * I searched Google and Stack Overflow and tested out a few fixes that I saw suggested there, but none of them worked.
    * I used console.log on all of my variables after they were created, and discovered that 'this' wasn't being targeted properly.
    * The houseChosen variable was collecting the correct id, and the answers variable was collecting an HTML collection instead of the answers.
    * I searched on Stack Overflow, and saw that as I was using multiple scripts and multiple html documents, I'd need to use a GET or POST request to access the data fully.
    * This added more complications than was necessary, making my code longer than required, so I changed the set up of my documents.
    * I added all scripts into one script, with different sections clearly defined.
    * I added all HTML pages into one page, using a hide/show function to access whichever part of the page needs to be visible to the user.
    * I was then able to simplify my setHouse function, which fixed this bug, and improved the performance of my site.

2. The houseChosen variable contained a string, so when I was trying to use it to cycle through an array of objects, it was just bringing up each index of that string (a single letter).
    * I searched Google and Stack Overflow, and found eval(), which fixed my problem.
    * Upon more research, I found that eval() should not be used due to extreme security risks.
    * I looked into using Function(), but that didn't fix my problem either.
    * I spoke to Eve Crabb and Tom Crabb (friends of mine who are developers), who suggested that I'd be better off having my questions in one 'questions' object.
    * Then I put each set of questions in their own object, and each question and answer set in an array within that object.
    * This meant I could then refer to the object depending on which house was chosen much simpler.
    * I then used a seperate function to refer to a specific question within the question set, which solved my problem.

3. The randomiseQuestionOrder() function wasn't accessing the question and answer content as it should have been.
    * Originally, I had my randomiseQuestionOrder() set up to find a number between 0 and 9 using Math.floor(), to then use with indexing to find a question.
    * However, due to bug #2, this didn't function was I intended.
    * I then changed it to Math.ceil(), to find a random number between 1 and 10.
    * Using this number, I concatenated the letter Q in front of the number, and set that to the variable of currentQuestion.
    * This meant I could refer to the question by the [0 ] of each question set.
    * This meant that referring to the question, the answers, and the correct answer became much simpler.
    * I could then use indexing to use whichever part I needed to, which fixed this bug.

4. After answering a question, the completed question wasn't being removed from the question pool, so it was being repeated.
    * Originally I had my questions organised as a arrays nested inside an object. I reached out to the Slack community, and received advice that this was a complicated method.
    * I changed my questions to be a nested array inside an array, which made my referencing each question much simpler, requiring less code.
    * However, when I needed to delete the currentQuestion from the current questionsSet, it wasn't being deleted.
    * I tried delete questionsSet.currentQuestion and delete questionsSet[currentQuestion ], but neither worked.
    * Changed my questions into a nested array, but neither of the above worked still.
    * I also tried using .splice(), which also didn't work. It was just removing index 1, rather than getting the index number from the currentQuestion variable.
    * I did a bit more research into .splice(), and got it removing the final index of the questionsSet.
    * Finally, I realised I was using currentQuestion.indexOf(); instead of questionsSet.indexOf(currentQuestion).
    * I corrected my reference to the correct index, which solved this bug.

5. The quiz wouldn't let you get to 10 answered questions, it refused to count higher than 9, meaning the only way to end the quiz is to let the timer run out.
    * As I had just changed the endTimer() function, I double checked my code for that.
    * I changed the condition to questionsAnswered <= 10, but that caused it to stop at 8.
    * I checked my code again, and added an else statement that I'd forgotten, for if the answer isn't correct.
    * I also moved the endTimer() and endQuiz() functions above the checkAnswer() function, because they're used inside it, which fixed this bug.

6. Once the user has completed the quiz and got to the results page, the timer kept going, giving an alert after 120 seconds, even if the user had completed the quiz.
    * I added an if (counter = "") statement to end the timer function if counter was updated to "", which it is in the endQuiz() function.
    * This didn't fix the issue, at which point I realised it was likely to be linked to bug #7.
    * I did more reading into how setInterval and clearInterval works, and refactored my code, making my code shorter and easier to read.
    * I'd been using clearInterval with my function name in the brackets, which I learned was incorrect.
    * I replaced the function name with the variable name to fix this bug.

7. Timer isn't stopping when you click the navigation links.
    * I tried to update counter to blank in the navigation functions, but that caused it to bring up the score page as well as home page.
    * To correct that, I added code to add the hide class to all pages as the quiz ends.
    * Whilst researching to fix bug #6, I learned how to use clearInterval() properly.
    * I added the correct use of clearInterval() into my navigation click functions, which fixed this bug.

8. The progress bar wasn't updating after each question was answered.
    * I checked my code, and realised I'd used .innerHTML instead of .value, which was what I needed to update.
    * I was still getting an error that getElementById wasn't defined.
    * On a second read through, I realised I'd forgotten to include 'document.' at the start.
    * I updated this, which fixed my bug.

9. TypeError: Cannot read property '0' of undefined at script.js.193 after finishing the quiz once.
    * It's not re-setting the questionsSet for some reason.
    * I tried setting questionsSet to 0 in the startQuiz function, but no luck.
    * currentQuestion is returning undefined when going through the quiz the second time around.
    * Changing the house doesn't stop the bug, so it's not house-specific, and not linked to choosing the same house twice in a row.
    * The const questions was being changed when questionsSet was changed, because it's got nested arrays in it.
    * I checked on StackOverflow, and on Google and found [this article on Medium](https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089).
    * I checked every step it suggests, and none of the shallow copy methods worked.
    * I continued into the deep copy methods, and as I wanted to avoid importing things from external sources, I didn't use Lodash or Ramda.
    * I did a deep copy of it using JSON.parse(JSON.stringify(questions));, which fixed the bug.

10. Upon refactoring my code, the quiz wasn't getting to question 6.
    * I used console.log to see what was happening at what time, and realised that questionsSet.length was changing each time a question was answered.
    * I wanted it to stay at the original questionsSet length, so that if more questions are added in the future, it can update automatically.
    * I created a questionsSetLength variable, which got the length of the chosen questionsSet when it was created.
    * I then used this as my variable, instead of questionsSet.length, which fixed this bug.

### Known Bugs
* This quiz is not supported on Internet Explorer. However, IE has been declared outdated by Microsoft's head of cyber-security, and is recommended not to be used as a main browser.
* On Safari on MacBook Air, the overlay for the score and timer on the quiz page aren't big enough to cover the text. This is not an issue on other devices using the same screen size.

![MacBook Air overlay bug](assets/images/docs/macoverlayscore.png)
![MacBook Air overlay bug](assets/images/docs/macoverlaytimer.png)

* On Samsung Internet, their version of dark mode just inverts all the colors, including the color scheme of the entire quiz, as shown in [my testing file](testing.md).
* On Mozilla Firefox, the progress bar backing cannot be styled, so it's white instead of goldenrod.

![Mozilla Firefox progress bar bug](assets/images/docs/firefoxprogress.png)

### Lighthouse
I tested my website using DevTools Lighthouse feature, and got these results:

#### Desktop
![Lighthouse desktop first try](assets/images/docs/lighthouse.png)

#### Mobile
![Lighthouse mobile first try](assets/images/docs/lighthousemobile.png)

#### Performance:
* I decided to use vanilla CSS and JavaScript, rather than utilising Bootstrap or jQuery due to the performance trade-offs caused by those libraries.
* I was very happy with my initial lighthouse score, as the only thing reducing my Performance is that I have quite a few images, including an image being used as the background on all pages.
* My mobile score is lower because the images are scaled down for use on mobile, rather than importing a new image, so it's reducing the Performance due to resizing.

#### Accessibility:
* I was very careful when writing my code to ensure it was fully accessible.
* I used semantic code wherever possible to help any users that use screen readers.
* Every image has relevant alt text, including the images that are populated depending on the result. Each image is populated with relevant alt text.
* All text has good visibility on whichever background it's on, so it shouldn't cause issues for any color blind users.
* I also checked this site with a friend who has Deuteranopia color blindness, and he had no issues with the site.

#### Best Practices:
* As I avoided code libraries, I also avoided any security vulerabilities associated with those libraries.
* Images are shown with the correct aspect ratio, as all resizing is done with percentage values instead of pixel values.
* As the site is a quiz, it also doesn't ask for any geolocation or notification permissions.

#### SEO:
* I ensured the site has a relevant meta description and a relevant title.
* All font sizes are legible on all screen sizes, and all tap targets are well sized.

---
## Credits
### Code
* [Font Awesome](https://fontawesome.com/): Library of icons used for social media and download links.
* [CSS Tricks](https://css-tricks.com/html5-progress-element/): The base code for the progress bar during the quiz.
* [This article on Medium](https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089): Help with fixing bug #9.

### Audio
* [No Copyright Sound](https://www.youtube.com/watch?v=QDgnFDiyXEk): The dramatic music for during the quiz.
* [Free Sounds Library](https://www.freesoundslibrary.com/fire-sound/): The fire cracking sound.
* 'I solemnly swear' audio was spoken by Conor Nye, recorded and edited by Abi Harrison.

### Content
* Introduction quote is from the Harry Potter novels.
* All other text content written by the developer, Abi Harrison.
* All other code was written by the developer, Abi Harrison.
* Background photo on Homepage by Devon Cartwright-Smith from [FreeImages](https://freeimages.com/).
* [Harry Potter logo](https://commons.wikimedia.org/wiki/File:Harry_Potter_wordmark.svg).
* [Colour picker](https://imagecolorpicker.com/en/).
* [Galleons image](https://commons.wikimedia.org/wiki/File:The_Making_of_Harry_Potter_29-05-2012_(7415385922).jpg).
* [Letters image](https://pixabay.com/da/photos/harry-potter-hogwarts-accept-brev-4455031/).
* [Remembrall image](https://commons.wikimedia.org/wiki/File:The_Making_of_Harry_Potter_29-05-2012_(Remembrall).jpg).
* [Ticket image](https://commons.wikimedia.org/wiki/File:The_Making_of_Harry_Potter_29-05-2012_(7415391168).jpg).

### Media
* All media belongs to J.K. Rowling & Warner Bros Entertainment Inc.
* All characters, quotes, and themes belong to J.K. Rowling & Warner Bros Entertainment Inc.
* All images used were copyright free images, with credit given in Content above.

### Acknowledgements
* My mentor, Antonio Rodriguez, for continuous helpful feedback and support.
* Eve Crabb, for her support through my learning, and for being a sounding board for bug fixes.
* Tom Crabb, for his advice on how to make my code cleaner.
* The team at Code Institute, for teaching me the necessary skills to create this site.
* Conor Nye, for helping me check about color blind accessibility, and for recording a lot of takes of the solemnly audio until I was happy.