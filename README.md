![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)


# Specialised Cells 🔬
# - a GCSE Biology Revision Game

------

This *GCSE Biology Revision Game* is a card-matching game that helps students to memorise **specialised cell types and their functions**. 

A specialised cell is any cell that has developed features to perform a specific job - e.g. a *red blood cell* has developed certain features to perform *its function of carrying oxygen around the body*. The specialised cell types chosen are from **the Biology curriculum at GCSE level**.

 The objective of the game is to **find the matching pairs of cards** - a labeled image of the cell type with a description of its function. 
 This game should hopefully be accessible enough and fun for anyone to play as a **quick-thinking memory style game**, but also can be used as a **revision tool** to help remember different cell types and their functions. 

## Showcase

![Am I Responsive?](/assets/documentation "Am I Responsive? Website Mockup")

The **Am I Responsive?** link can be found here - [Am I Responsive?](#)

A **deployed link** to the live website can be found here [Specialised Cells Game](https://tarahwaters.github.io/milestone-project2/)

---

## Table of Contents

---

## UX:
## Strategy
### Target Audience

The target audience of this game are students studying Biology at high school level (GCSE or equvivalent) and also those interested in learning some biological facts. The topic of Specialised Cells is included in the UK biology curriculum at KS3 and GCSE (including iGCSE) and this game can therefore be used as a fun revision / learning tool. It is also designed to be accessible without prior biology knowledge so hopefully will be enjoyed by any user of any age.

### User Requirements and Expectations

- Simple and intuitive user interface
- Instructions are easy to follow
- Gameplay works as expected and is fun to play
- Clear presentation of the content
- Design that is visually attractive
- Accessibility
- Features and navigation system works as expected


### User Stories

#### User
As a user I would like:
- to play a card-matching memory game presented in a visually appealing format
- to learn or revise knowledge about specialised cell types in a fun way
- to play a game with the option of increasing the complexity/challenge
- to read the rules of the game
- to access the prelearning material before testing their knowledge during the game
- to navigate through the elements of the game / website easily
- **to adjust settings to suit my game-play requirements e.g.**
    - **whether to play in-game audio**
    - **choosing the level of challenge**
- to receive ongoing feedback about my progression through the game
- to have fun while playing the game (and also learn!).
- to learn some interesting facts about specialised cells
- **to have the option of viewing and downloading a summary of the cell types and their functions**
- to restart the game to play again

#### Site Owner
As a site owner I would like:
- to enjoy the experience of playing the game
- to provide users with an enjoyable and intuitive gaming experience
- to provide users with the opportunity to learn or revise their biology knowledge
- to provide users with a visually appealing game that is also accessible
- to provide users with an option to increase game difficulty
- to provide users with the rules of how to play the game in an easy-to-read format
- **to give users the option to turn audio on/off and to view a summary of the revision notes once they complete the game**
- to provide users with a site that is straight forward to navigate


---

## Scope
### Trade Offs

Considering the user requirements and expectations, the table below shows the features that should be implemented to make an appealing and functional interactive game for users. Due to time constraints and my current skill level, some of these features are not implemented at this stage.

[X] indicates opportunities that were considered at the planning stage but were deemed not viable/feasible for this project sprint.
Y / N indicates a Yes / No as to whether each opportunity was acheived and implemented at this stage.

| Opportunity                                                      | Importance | Viability / Feasibility | Outcome |
| ---------------------------------------------------------------- | :--------: | :---------------------: | :------:|
| Card-matching memory game that works by user clicking cards      |     5      |            5            |         |
| Timer and move counter that provide up-to-date feedback to user  |     5      |            5            |         |
| HowToPlay modal with set of instructions (with clickable button) |     5      |            5            |         |
| WinMessage modal that pops up when user has completed the game   |     5      |            5            |         |
| Option to restart (with button on main page, also via Win modal) |     5      |            5            |         |
| Increase in challenge (adding more complex set of cards to match)|     4      |            4            |         |
| Access to summary notes page for revision / download afer game   |     3      |            4            |         |
| Option to adjust audio settings [X]                              |     3      |            2            |         |



---

## Structure

### Features
### Existing Features
### Future Features

---

## Skeleton

Wireframes for the website were created using the UI wireframe tool, [Balsamiq](https://balsamiq.com/), to plan the layout across desktop, tablet and mobile devices.

The layout and design was kept consistent across the pages / devices as much as possible.

The main game page consists of:

- A title
- A subtitle description of the game
- A gamegrid of 16 divs displaying the rear side of the cards - two cards can be flipped over at once to make a match
- A gamestart modal which allows the user to select the challenge level of the game before starting (or open the howtoplay modal)
- A moves counter that is on the top right corner of the gamegrid - displays the number of moves made during a game
- A countdown timer is on the top left corner ofthe gamegrid - displays how many seconds are remaining during a game
- A restart button is underneath the gamegrid - gives the user the option to reset the game to the beginning
- A howtoplay button is underneath the gamegrid - gives the user the option to view the game instructions and access the prelearning material
- A footer which contains a copyright statement

### Wireframes

These were the initial wireframes created for the project during the planning stage:

**1. Game Grid Wireframes**

- [Mobile and Table Devices](https://github.com/tarahwaters/milestone-project2/blob/main/documentation/readme/wireframe-mob-gamegrid.png "GameGrid Wireframe for Mobile and Tablet Devices")

- [Desktop Devices](https://github.com/tarahwaters/milestone-project2/blob/main/documentation/readme/wireframe-desktop-gamegrid.png "GameGrid Wireframe for Desktop Devices")

**2. HowToPlay Modal Wireframes**

- [Mobile and Table Devices](https://github.com/tarahwaters/milestone-project2/blob/main/documentation/readme/wireframe-mob-howtoplay.png "HowToPlay Modal Wireframe for Mobile and Tablet Devices")

- [Desktop Devices](https://github.com/tarahwaters/milestone-project2/blob/main/documentation/readme/wireframe-desktop-howtoplay.png "HowToPlay Modal Wireframe for Desktop Devices")

**3. WinMessage Modal Wireframes**

- [Mobile and Tablet Devices](https://github.com/tarahwaters/milestone-project2/blob/main/documentation/readme/wireframe-mob-winmessage.png "WinMessage Modal Wireframe for Mobile and Tablet Devices")

- [Desktop Devices](https://github.com/tarahwaters/milestone-project2/blob/main/documentation/readme/wireframe-desktop-winmessage.png "WinMessage Modal Wireframe for Desktop Devices")

## Surface
### Color Scheme

[coolors.co](https://coolors.co/) was used to create a color palette for the design.

![Biology Game Color Scheme](/documentation/readme/colorscheme.png "Biology Game Color Scheme")

### Typography

[fontjoy.com](https://fontjoy.com/) was used to create aesthetic font pairings for the project.

- **Kalam** - for the main title
- **Preahvihear** - for subtitles and headings
- **Sriracha** - for descriptive text
- with a backup font of **"Sans serif"**

![Font pairings](/documentation/readme/typography.jpg "Font pairings")

### Card Design

Since the images of specialised cells available online were consistent or visually appealing enough in their design, I decided to draw my own using the Procreate app on my iPad. Here is the the full image containing all the cell drawings used in the game. These were then cropped to add to the individual cards.

![Specialised Cells Full Image](/documentation/readme/specialised-cells-full.png "Full image containing all Specialised Cells used on the game cards")

### Extra Learning Resource

As a prize for completing the game, users have access to a downloadable learning resource which summarises all the cell types used in the game.
Learners can print off the flashcards and use them for their biology revision.

![Specialised Cells Flashcards Page 1](/documentation/readme/specialised-cells-flashcards-page1.png "Specialised Cells Flashcards Page 1")
![Specialised Cells Flashcards Page 2](/documentation/readme/specialised-cells-flashcards-page2.png "Specialised Cells Flashcards Page 2")

## References

- [redketchup.io](https://redketchup.io/) - used for resizing and converting image files to webp format
- **Moira Hartigan's PP2** [Alien Memory Game](https://moirahartigan.github.io/Portfolio-2---Alien-Memory-Game/) - deployed project and [github](https://github.com/moirahartigan/Portfolio-2---Alien-Memory-Game)
- **Nuala Greenwood's MS2** [Lord Of The Rings Game](https://nualagr.github.io/the-lord-of-the-rings-game/) - deployed project and [github](https://github.com/nualagr/the-lord-of-the-rings-game)
- **Louise Jones' MS2** [Tropical Birds Memory Game](https://louisejones101.github.io/memory-game/) - deployed project and [github](https://github.com/louisejones101/memory-game)



