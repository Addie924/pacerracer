canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_height = 90;
car1_width = 100;
car1_x = 10;
car1_y = 10; 
car1_image = "car1.png"

car2_height = 90;
car2_width = 100;
car2_x = 10;
car2_y = 100; 
car2_image = "car1.png"

background_image = "canvasback.jpg";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackgound;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}

function uploadBackgound(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        car1up();
        console.log("car 1 up");
    }
    if(keyPressed == '40')
    {
        car1down();
        console.log("car 1 down");
    }
    if(keyPressed == '37')
    {
        car1left();
        console.log("car 1 left");
    }
    if(keyPressed == '39')
    {
        car1right();
        console.log("car 1 right");
    }
    if(keyPressed == '87')
    {
        car2up();
        console.log("car 2 up");
    }
    if(keyPressed == '83')
    {
        car2down();
        console.log("car 2 down");
    }
    if(keyPressed == '65')
    {
        car2left();
        console.log("car 2 left");
    }
    if(keyPressed == '68')
    {
        car2right();
        console.log("car 2 right");
    }
}
function car1up(){
    console.log("This is car 1 up");
}
function car1down(){
    console.log("This is function car 1 down");
}
function car1left(){
    console.log("This is function car 1 left");
}
function car1right(){
    console.log("This is function car 1 right");
}

function car2up(){
    console.log("This is function car 2 up");
}
function car2down(){
    console.log("This is function car 2 down");
}
function car2left(){
    console.log("This is function car 2 left");
}
function car2right(){
    console.log("This is function car 2 right");
}