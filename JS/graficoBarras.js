let screen = document.querySelector("canvas");
let pincel = screen.getContext("2d");

function drawRectangle (x_initial, y_initial, rectangleWidth, rectangleHeight, color){
    pincel.fillStyle = color;
    pincel.fillRect(x_initial, y_initial, rectangleWidth, rectangleHeight);
    pincel.strokeStyle = "black";
    pincel.strokeRect(x_initial, y_initial, rectangleWidth, rectangleHeight);
}

function writeText(x_text, y_text, text){
    pincel.font = "15px Helvetica";
    pincel.fillStyle = "#fff";
    pincel.fillText(text, x_text, y_text);
}

function drawBar(x_initial, y_initial, serie, colors, text){
    writeText(x_initial, y_initial - 10, text);
    let sumHeight = 0;
    for (let i = 0; i < serie.length; i++) {
        let  barHeight= serie[i];
        drawRectangle(x_initial, y_initial + sumHeight, 50, barHeight, colors[i]);
        sumHeight += barHeight;
    }
}

function drawLegend(x_text, y_text, text_width, text_height, navigators, colors){
    for(let i=0; i<navigators.length; i++){
        writeText(x_text, y_text, navigators[i]);
        drawRectangle(x_text+150, y_text - 10, text_width, text_height, colors[i])
        y_text += 15;
    }
}

let colors = ["blue","green","yellow", "red","gray"];
let serie2009 = [6,47,41,3,3];
let serie2019 = [81,9,3,3,4];
let navigators = ["Chrome", "Firefox", "Internet Explorer", "Safari", "Others"];

drawBar(50, 50, serie2009, colors, "2009");
drawBar(150, 50, serie2019, colors, "2019");

drawLegend(250, 50, 100, 10, navigators, colors);