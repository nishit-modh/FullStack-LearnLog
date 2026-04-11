// innerText - Text displayed on the webpage (Shows the visible text contained in a node)
// textContent - Text written in the html (Shows all the full text in the same format)
// innerHTML - html code (Shows the full markup)

let mainHead = document.querySelector("h1");
mainHead.innerHTML = "Bat Man - <i>Bruce Wayne</i>"; // html tags can be directly applied

let para = document.querySelector("p");
para.innerText = "I am vengence!!"; // tags are not recognized...

let desc = document.getElementById("description");
desc.innerHTML = `<u>${desc.innerText}</u> `; // can be done with innerHTML

// MANIPULATING ATTRIBUTES
// obj.getAttribute( attr )  - getter
// obj.setAttribute( attr, val )  - setter
console.log("--------MANIPULATING ATTRIBUTES--------");
let img = document.getElementById("mainImg");
console.log(img.getAttribute("src")); // used to get attribute value
img.setAttribute("src", "Assets/creation_2.jpeg"); // image (image src) be changed
img.setAttribute("class", "images");

// MANIPULATING STYLE - obj.style
console.log("----------MANIPULATING STYLE------------");
console.dir(mainHead.style);
mainHead.style.justifySelf = "center"; // manipulates style property
mainHead.style.color = "purple";
img.style.marginLeft = "40%";
let list = document.querySelectorAll(".box a");
for (item of list) {
  item.style.color = "red";
}

// CLASS LIST - obj.classList
// classList.add( ) to add new classes
// classList.remove( ) to remove classes
// classList.contains( ) to check if class exists
// classList.toggIe( ) to toggle between add & remove
console.log("--------------classList--------------");
let box = document.querySelector(".box");
console.dir(box.classList);
box.classList.add("curve"); // Curve class added to box (better than setter cause setter will replace class insted of adding)
console.dir(box.classList);

// NAVIGATION ON PAGE
// parentElement
// children
// previousElementSibling | nextElementSibling
console.log("---------NAVIGATION ON PAGE----------");
console.dir(box.children);
console.log(box.childElementCount);
let images = document.getElementsByClassName("comicImg");
console.dir(images[0].parentElement); // gives the parent element of 1st image
console.dir(img.previousElementSibling);
console.dir(desc.nextElementSibling.className);

// ADDING ELEMENTS
// document.createElement('p') ->

// • appendChild( element )
// • append( element )
// • prepend( element )
// • insertAdjacentElement( where, element) - refer mdn
console.log("----------ADDING ELEMENTS-----------");
let newPara = document.createElement("p");
newPara.innerText = "About Adding Elements...!";
let body = document.querySelector("body");
body.appendChild(newPara); // to append para at the edn of the body
newPara.append(" this is extra para text...") // to append string or element

let btn = document.createElement("button");
btn.innerText = "click me";
btn.classList.add("curve");
console.dir(btn);
box.prepend(btn); // to append/prepend button 

let moreBtn = document.createElement("button");
moreBtn.innerText = "DON'T CLICK!!!";
moreBtn.style.backgroundColor = "red";
desc.insertAdjacentElement("beforeend" , moreBtn); // added at the end before para ends


// REMOVE ELEMENTS
// • removeChild( element)
// • remove( element )
console.log("----------REMOVE ELEMENTS-----------");
box.removeChild(btn); // removes the specified element
// box.remove(); // Removes element completely