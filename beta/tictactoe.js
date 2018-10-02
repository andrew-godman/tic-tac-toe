// ### Technical Requirements
//
// Your app must:
//
// * **Render a game in the browser**
// * **Switch turns** between more than one player
// * **Design logic for winning** & **visually display which player won**
// * **Include separate HTML / CSS / JavaScript files**
// * Stick with **KISS (Keep It Simple Stupid)** principles
// * Use **Javascript** for **DOM manipulation**
// * **Deploy your game online**, where the rest of the world can access it
// * Use **semantic markup** for HTML and CSS (adhere to best practices)
// 
// * **today** - At least one artefact of either pseudocode, flow diagram, wireframe, mockup or storyboard demonstrating planning - **Due today** 
// * A **working game, built by you**, hosted somewhere on the internet
// * A **link to your hosted working game** in the URL section of your GitHub repo
// * A **git repository hosted on GitHub**, with a link to your hosted game, and **frequent commits** dating back to the very beginning of the project
// * **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
//
// ### Suggested Ways to Get Started
//
// * **Break the project down into different components** (data, presentation, markup, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
// * **Use your Development Tools** (console.log, inspector, debugger, etc) to debug and solve problems
// * Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know... _procrastinating_.
// * **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
// * **Consult documentation resources** (MDN etc.) at home to better understand what you’ll be getting into.
// * **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

// get mouse click of the 9 clicked items
// display where use as clicked on (or cpu)
// if 3 in a row display win

var box = document.querySelector('.board')



box.addEventListener('click', boxClicked)

function boxClicked() {
    columnClicked = event.target.className;
    rowClicked = event.target.parentElement.className;
    
    console.log(columnClicked, rowClicked);
     
    
}

// event.target
// <div class=​"column2">​2​</div>​
// event.target.parentElement
// <div class=​"row1">​…​</div>​