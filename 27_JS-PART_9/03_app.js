// i) a with red text that says "Hey I'm red!"
// ii) an <h3> with blue text that says "I'm a blue h3!"
// iii) a with a black border and pink background color with the following elements inside of it:
// • another that says "I'm in a div"
// • a that says "ME TOO!"
let body = document.querySelector("body");

let redPara = document.createElement("p");
redPara.innerText = "Hey Baka, I am red!!";
redPara.style.color = "red";
body.append(redPara);

let buleH3 = document.createElement("h3");
buleH3.innerText = "Sir, I am a blue H3!!";
buleH3.style.color = "blue";
body.append(buleH3);

let pinkDiv = document.createElement("div");
let divH1 = document.createElement("h1");
let divP = document.createElement("p");

pinkDiv.style.border = "solid black 2px";
pinkDiv.style.padding = "10px";
pinkDiv.style.backgroundColor = "pink";
body.append(pinkDiv);

divH1.innerText = "I am a Div!";
divP.innerText = "ME TOO!!!";

pinkDiv.appendChild(divH1);
pinkDiv.append(divP);

let b;
hr = document.createElement("hr");
body.append(hr);

// Qsl. Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me'.

// Qs2. Add following attributes to the element :
// - Change placeholder value of input to "username"
// - Change the id of button to "btn'

let randomInp = document.createElement("input");
let clickBtn = document.createElement("button");

randomInp.setAttribute("placeholder", "Username");
clickBtn.innerText = "Click ME!!!";
clickBtn.setAttribute("id", "btn");
body.append(randomInp);
body.append(clickBtn);

// Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.
let sameBtn = document.querySelector("#btn");

sameBtn.style.color = "white";
sameBtn.style.backgroundColor = "blue";

// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. Change its color to purple.

let pracH1 = document.createElement("h1");

pracH1.innerText = "DOM Practice";
pracH1.style.color = "purple";

body.append(pracH1);

// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.
let batPara = document.createElement("p");

batPara.innerHTML = "I am <b>Batman</b>";
body.append(batPara);
