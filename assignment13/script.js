let move = prompt("Enter Value:");
if(move ){
  move=move.toUpperCase();
  let output=circle(move);
  document.write(output)
}
else{
  document.write("Enter moves only R,L,U,D")
}

function circle(move) {
    let x = 0,
     y = 0;
    for (let i = 0; i < move.length; i++) {
      switch (move[i]) {
        case "R":
          x++;
          break;
        case "L":
          x--;
          break;
        case "U":
          y++;
          break;
        case "D":
          y--;
          break;
      }
    }
    return x === 0 && y === 0;
  }
