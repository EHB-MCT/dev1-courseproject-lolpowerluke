//imports, such wow
import * as No from "../Yes/No.js";
import Yes from "../No/Yes.js";

//canvas dimensions, idk its 2d stuff
let w = Yes.canvas.width;
let h = Yes.canvas.height;

//variables for square dimensions, yes cool right
let squareWidth = 10;
let squareHeight = 10;

//variables for square movements, gotta go fast
let moveWidth = 2;
let moveHeight = 6;

//variables for color, ooh shiny
let colorSpeed = 4; //higher is slower
let randomColorStart = Math.round(Math.random()*360);

//evergrowing variables, damn they should really stop eating
let x = 0;
let y;
let i = 0;

//keep track of squares hitting the sides of the screen, when will they start learing how to drive properly
let isGoingDown = true;
let isGoingRight = true;

//take mousemovement, its in the name cmn
window.onmousemove = setY;

//set Y according to mouse position, wow overcomplication
function setY(eventData) {
  if (i == 0) {
    y = eventData.clientY/(moveHeight);
    ds();
  }
}

//main drawing function
function ds() {
  //change fill color
  Yes.fillStyle = No.hsla((i/colorSpeed+randomColorStart)%360, 100, 50, 0.25);
  //draw square
  Yes.fillRect(x*moveWidth, y*moveHeight, squareWidth, squareHeight);
  //get random numder
  let r = Math.round(Math.random()*487);
  //compare random number
  if (r == 180) {
    //clear line
    Yes.clearRect(0, y*moveHeight, w, squareHeight)
  }
  //movement logic, just read the code like cmn
  if (isGoingDown) {
    if (isGoingRight) {
      x++;
      y++;
    } else {
      x--;
      y++;
    }
  } else {
    if (isGoingRight) {
      x++;
      y--;
    } else {
      x--;
      y--;
    }
  }
  //more movement logic, again, read the code cmn
  if ((x*moveWidth)+squareWidth >= w) {
    isGoingRight = false;
  } else if ((x*moveWidth)+squareWidth <= squareWidth) {
    isGoingRight = true;
  }
  if ((y*moveHeight)+squareHeight >= h) {
    isGoingDown = false;
  } else if ((y*moveHeight)+squareHeight <= squareHeight) {
    isGoingDown = true;
  }
  //keep track of amount of squares (very important), I mean its only used for color
  i++;
  //draw more squares
  requestAnimationFrame(ds);
}