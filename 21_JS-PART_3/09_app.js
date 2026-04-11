let game = [ [ "X", null, "O"], [ null, "X", null], [ "O", null, "X"]];
console.log(game);
game[0].splice( 1, 1, "O");
// also can be written as:
// game[0][1] = "O";
console.log(game);
