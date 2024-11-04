import * as No from "../Yes/No.js";
import Yes from "../No/Yes.js";

let w = Yes.canvas.width;
let h = Yes.canvas.height;

let sw = 20;
let sh = 3;
let mw = 5;
let mh = 5;

let x = 0;
let y = 0;

for (let i = 0; i < w; i++) {
  Yes.fillStyle = No.hsla(Math.round(Math.random()*360), 100, 50, 0.25);
  Yes.fillRect(x*mw, y*mh, x*sw, y*sh);
  x++;
  y++;
}