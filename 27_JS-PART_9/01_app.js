// ELEMENT BY ID
let mainImg = document.getElementById("mainImg");
console.dir(mainImg);

// ELEMENT BY CLASSNAME
let smallImgs = document.getElementsByClassName("comicImg");
for (i = 0; i < smallImgs.length; i++) {
  // this will log the src of each image [we can also change image like this]
  console.log(`Source of image ${i} is ${smallImgs[i].src}`);
  // smallImgs[i].src = "Assets/batman_img.jpeg";// [we can also change image like this]
}

// ELEMENT BY TAG-NAME
let paras = document.getElementsByTagName("p");
console.dir(paras);


console.log("-------------------Query selector---------------------")
// QUERY SELECTOR - selects 1st element with matching request...
// Allows us to use any CSS selector (even pseudo selectors).
console.dir(document.querySelector("p"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector("ul .boxLink")); //only gives 1st element with "boxLink" class

console.log("-------------------Query selector All---------------------")
// QUERY SELECTOR ALL - selects all the elements with matching request...
console.dir(document.querySelectorAll("p"));
console.dir(document.querySelectorAll("ul .boxLink")); //gives all the elements with "boxLink" class