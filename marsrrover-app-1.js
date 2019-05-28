// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[]
}
// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N": 
      rover.direction = "W";
      // console.log(rover.direction) 
      break;
    case "E":
      rover.direction = "N";
      // console.log(rover.direction) 
      break; 
    case "S":
      rover.direction = "E";
      // console.log(rover.direction) 
      break;
    case "W":
      rover.direction = "S";
      // console.log(rover.direction) 
      break;
  }
  console.log("turnLeft was called!");
console.log(rover.direction);
}

// turnLeft(rover)

function turnRight(rover){
  switch (rover.direction) {
    case "N": 
      rover.direction = "E";
      // console.log(rover.direction) 
      break;
    case "E":
      rover.direction = "S";
      // console.log(rover.direction) 
      break; 
    case "S":
      rover.direction = "W";
      // console.log(rover.direction) 
      break;
    case "W":
      rover.direction = "N";
      // console.log(rover.direction) 
      break;
  }
  console.log("turnRight was called!");
  console.log(rover.direction);
}

function moveForward(rover){
  switch (rover.direction) { // Checking the direction of the rover
    case "N": // Figure out direction so we can figure out coordinates
      rover.y--; 
      // console.log("Position is: " + rover.x + "," + rover.y)
      break;
    case "E":
    rover.x++; 
    // console.log("Position is: " + rover.x + "," + rover.y)
    break;
    case "S":
    rover.y++; 
    // console.log("Position is: " + rover.x + "," + rover.y)
    break;
    case "W":
    rover.x--; 
    // console.log("Position is: " + rover.x + "," + rover.y)
    break;
  }
  console.log("moveForward was called");
  console.log("Position is: " + rover.x + "," + rover.y);
}


function moveBackward(rover){
  switch (rover.direction) { 
    case "S": 
      rover.y--; 
      // console.log("Position is: " + rover.x + "," + rover.y)
      break;
    case "W":
    rover.x++; 
    // console.log("Position is: " + rover.x + "," + rover.y)
    break;
    case "N":
    rover.y++; 
    // console.log("Position is: " + rover.x + "," + rover.y)
    break;
    case "E":
    rover.x--; 
    // console.log("Position is: " + rover.x + "," + rover.y)
    break;
  }
  console.log("moveBackward was called");
  console.log("Position is: " + rover.x + "," + rover.y);
}
function command(string){
  for (i = 0; i < string.length; i++) {
    switch(string[i]) {
      case 'f':
        moveForward(rover)
        rover.travelLog.push([rover.x, rover.y]);
        console.log(rover.travelLog);
        break;
      case 'b':
        moveBackward(rover) 
        rover.travelLog.push([rover.x, rover.y]);
        console.log(rover.travelLog);
        break;
      case 'r':
        turnRight(rover)
        break;
      case 'l':
      turnLeft(rover)
      break;
    }
  }
}
command("lrlfb")

