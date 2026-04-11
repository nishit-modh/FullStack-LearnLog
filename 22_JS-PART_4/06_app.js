let toDo = ["Face-wash", "DSA", "Web Development", "Gym"];

let action = prompt("Name the action you want to perform");

while (1) {
  if (action == "quit") {
    console.log("---------------------------------");
    console.log("Quitting the app");
    break;
  } else if (action == "list") {
    console.log("---------------------------------");
    for (tasks of toDo) {
      console.log(tasks);
    }
  } else if (action == "add") {
    console.log("---------------------------------");
    toDo.push(prompt("Enter the new task"));
    console.log("Task added");
  } else if (action == "delete") {
    del = toDo.indexOf(prompt("Name the task you want ot delete"));
    if (del >= 0) {
      toDo.splice(del, 1);
      console.log("---------------------------------");
      console.log("Task deleted");
    } else {
      console.log("---------------------------------");
      console.log("Task doesn't exist");
    }
  } else {
    console.log("---------------------------------");
    console.log("Enter a valid action");
  }
  action = prompt("Name the action you want to perform");
}
