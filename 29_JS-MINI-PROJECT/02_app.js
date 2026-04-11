let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let newTask = document.createElement("li");
  newTask.innerHTML = `<span>${inp.value}  </span>`;// in span for using previousElementSibling

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add = "delete";

  // delBtn.addEventListener("click", function () {
  //   let parent = delBtn.parentElement;
  //   ul.removeChild(parent);
  // });

  newTask.appendChild(delBtn);
  ul.appendChild(newTask);
});

ul.addEventListener("click", function(e) {
  if (e.target.nodeName == "BUTTON") {
    let delItem = e.target.parentElement;
    delItem.remove();
    console.log(`Task deleted : ${e.target.previousElementSibling.innerText}`)
  }
})