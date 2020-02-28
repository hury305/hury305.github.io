// var canvas = document.getElementById('canvas');
// canvas.width = canvas.getBoundingClientRect().width;
// canvas.height = canvas.getBoundingClientRect().height;

// context = canvas.context2d;    
// context.translate(0.5, 0.5);

const paintCanvas = document.querySelector( '.js-paint' );
const context = paintCanvas.getContext( '2d' );
context.lineCap = 'round';

const colorPicker = document.querySelector( '.js-color-picker');

colorPicker.addEventListener( 'change', event => {
    context.strokeStyle = event.target.value; 
} );

const lineWidthRange = document.querySelector( '.js-line-range' );
const lineWidthLabel = document.querySelector( '.js-range-value' );

lineWidthRange.addEventListener( 'input', event => {
    const width = event.target.value;
    lineWidthLabel.innerHTML = width;
    context.lineWidth = width;
} );

let x = 0, y = 0;
let isMouseDown = false;

const stopDrawing = () => { isMouseDown = false; }
const startDrawing = event => {
    isMouseDown = true;   
   [x, y] = [event.offsetX, event.offsetY];  
}
const drawLine = event => {
    if ( isMouseDown ) {
        const newX = event.offsetX;
        const newY = event.offsetY;
        context.beginPath();
        context.moveTo( x, y );
        context.lineTo( newX, newY );
        context.stroke();
        //[x, y] = [newX, newY];
        x = newX;
        y = newY;
    }
}

paintCanvas.addEventListener( 'mousedown', startDrawing );
paintCanvas.addEventListener( 'mousemove', drawLine );
paintCanvas.addEventListener( 'mouseup', stopDrawing );
paintCanvas.addEventListener( 'mouseout', stopDrawing );

var c = document.getElementById("title");
var ctx = c.getContext("2d");
ctx.font = "36px time";
var gradient = ctx.createLinearGradient(0, 0, 500, 0);
gradient.addColorStop(0, "black");
gradient.addColorStop(0.25, "rgb(199, 122, 199)");
gradient.addColorStop(0.5, "black");
gradient.addColorStop(0.75, "rgb(199, 122, 199)");
gradient.addColorStop(1, "black");
ctx.fillStyle = gradient;
ctx.fillText("who i am", 40, 60);

var c = document.getElementById("self-portrait");
var ctx = c.getContext("2d");
ctx.font = "18px time";
// ctx.fillStyle = "rgb(243, 219, 243)";
ctx.fillText("self portrait:", 10, 25);
ctx.strokeRect(0, 0, 300, 400);
// canvas.width


var c = document.getElementById("name");
var ctx = c.getContext("2d");
ctx.font = "18px time";
ctx.fillText("full name:", 10, 125);
ctx.fillText("yerin hur", 10, 150);
ctx.fillText("허예린", 10, 175);
ctx.strokeRect(0, 100, 300, 100);

var c = document.getElementById("nicknames");
var ctx = c.getContext("2d");
ctx.font = "18px time";
ctx.fillText("nicknames:", 10, 125);
ctx.fillText("rinny", 10, 150);
ctx.fillText("ginny", 75, 150);
ctx.fillText("yerni", 50, 175);
ctx.fillText("yerinssi", 125, 175);
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.lineTo(300, 300);
ctx.lineTo(100, 300);
ctx.lineTo(0, 200);
ctx.lineTo(0, 100);
ctx.stroke();

var c = document.getElementById("hobbies");
var ctx = c.getContext("2d");
ctx.font = "18px time";
ctx.fillText("my hobbies:", 10, 25);
ctx.fillText("looking through and editing photos", 10, 50);
ctx.fillText("looking up horror movies", 10, 75);
ctx.fillText("apprciating hyein's face", 10, 100);
ctx.fillText("watching vlog/game/cooking", 10, 125);
ctx.fillText("videos", 10, 150);
ctx.moveTo(0, 0);
ctx.lineTo(300, 0);
ctx.lineTo(200, 100);
ctx.lineTo(300, 200);
ctx.lineTo(0, 200);
ctx.lineTo(0, 0);
ctx.stroke();

var c = document.getElementById("birth");
var ctx = c.getContext("2d");
ctx.font = "18px time";
ctx.fillText("place i was born:", 50, 75);
ctx.fillText("seoul, korea", 100, 100);
ctx.fillText("birthday:", 25, 100);
ctx.fillText("12.30.99", 25, 125);
ctx.moveTo(100, 200);
ctx.lineTo(200, 100);
ctx.moveTo(50, 50);
ctx.lineTo(150, 150);
ctx.stroke();

var c = document.getElementById("accomplishment");
var ctx = c.getContext("2d");
ctx.font = "18px Time";
ctx.fillText("accomplishments:", 150, 50);
ctx.fillText("learning new things", 150, 75);
ctx.fillText("(coding, after effects)", 150, 100);
ctx.fillText("i have never:", 25, 200);
ctx.fillText("skied before", 25, 225);
ctx.fillText("where i spend", 175, 275);
ctx.fillText("my free time:", 175, 300);
ctx.fillText("at home", 175, 325);
ctx.strokeRect(0, 0, 350, 350);
ctx.lineTo(0, 350);
ctx.lineTo(0, 0);
ctx.lineTo(350, 350);
ctx.moveTo(150, 150);
ctx.lineTo(150, 350);
ctx.stroke();

var c = document.getElementById("family");
var ctx = c.getContext("2d");
ctx.font = "80px time";
ctx.fillStyle = gradient;
ctx.fillText("♡", 350, 75);
ctx.fillText("♡", 450, 75);
ctx.fillText("♡", 250, 75);
ctx.fillText("♡", 500, 150);
ctx.fillText("♡", 400, 150);
ctx.fillText("♡", 300, 150);
ctx.font = "18px time";
ctx.fillStyle = "black";
// ctx.moveTo(75, 40);
// ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
// ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
// ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
// ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
// ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
// ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
ctx.fillText("my family:", 350, 50);
ctx.fillText("mom, dad, lil bro", 350, 75);
ctx.fillText("places i have lived:", 150, 125);
ctx.fillText("shanghai and new york", 175, 150);
ctx.fillText("(seoul and irvine)", 225, 175);
ctx.fillText("person i look up to:", 10, 150);
ctx.fillText("hyein", 10, 175);
ctx.moveTo(550, 0);
ctx.lineTo(550, 200);
ctx.lineTo(250, 100);
ctx.moveTo(0, 100);
ctx.lineTo(300, 200);
ctx.stroke();

var c = document.getElementById("favorite");
var ctx = c.getContext("2d");
ctx.font = "70px time";
ctx.fillText("🔥", 340, 125);
ctx.fillText("🦕", 175, 125);
ctx.fillText("🐺", 425, 375);

ctx.font = "18px time";
ctx.fillText("pets:", 100, 25);
ctx.fillText("favorite", 450, 50);
ctx.fillText("food: hot pot", 300, 100);
ctx.fillText("class: core lab", 400, 200);
ctx.fillText("movie: princess mononoke", 350, 350);
ctx.fillText("color: purple", 300, 450);
ctx.fillText("sport: ", 150, 450);
ctx.fillText("book: bonobono", 50, 350);
ctx.fillText("tv show: santa clarita diet", 25, 200);
ctx.fillText("brooklyn nine nine", 50, 225);
ctx.fillText("music: last dinosaurs", 125, 100);

ctx.beginPath();
ctx.arc(275, 275, 275, 0, 2 * Math.PI);
ctx.moveTo(275, 0);
ctx.lineTo(275, 550);
ctx.moveTo(0, 275);
ctx.lineTo(550, 275);
ctx.moveTo(80, 80);
ctx.lineTo(470, 470);
ctx.moveTo(80, 470);
ctx.lineTo(470, 80);
ctx.moveTo(0, 0);
ctx.lineTo(550, 0);
ctx.stroke();

var c = document.getElementById("event");
var ctx = c.getContext("2d");
ctx.font = "18px time";
ctx.fillText("most memorable recent event:", 75, 50);
ctx.fillText("spending time with my family", 75, 75);
ctx.fillText("during winter break", 75, 100);
ctx.fillText("favorite childhood memory:", 200, 200);
ctx.fillText("playing on the beach", 200, 225);
ctx.fillText("in korea during summers", 200, 250);
ctx.fillText("qualities of", 25, 150);
ctx.fillText("a good teacher:", 25, 175);
ctx.fillText("friendliness", 25, 200);
ctx.moveTo(0, 0);
ctx.lineTo(175, 150);
ctx.lineTo(350, 0);
ctx.moveTo(175, 150);
ctx.lineTo(175, 300);
ctx.moveTo(0, 0);
ctx.lineTo(0, 300);
ctx.lineTo(625, 300);
ctx.stroke();