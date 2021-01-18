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
    if(car1_x>700)
    {
        console.log("Car 1 Won");
        document.getElementById("status").innerHTML = "Car 1 Wins!!";
    }
    if(car2_x>700)
    {
        console.log("Car 2 Won");
        document.getElementById("status").innerHTML = "Car 2 Wins!!";
    }
}
function car1up(){
    if(car1_y>=0){
        car1_y = car1_y-10;
        console.log("When up is pressed, x = " + car1_x + " and y = " + car1_y);
        uploadBackgound();
        uploadCar1();
        uploadCar2();
    }
    console.log("This is up");
}
function car1down(){
    if(car1_y<=500){
        car1_y = car1_y+10;
        console.log("When down is pressed, x = " + car1_x + " and y = " + car1_y);
        uploadBackgound();
        uploadCar1();
        uploadCar2();
    }
}
function car1left(){
    if(car1_x>=0){
        car1_x = car1_x-10;
        console.log("When left is pressed, x = " + car1_x + " and y = " + car1_y);
        uploadBackgound();
        uploadCar1();
        uploadCar2();
    }
    }
function car1right(){
    if(car1_x<=700){
        car1_x = car1_x+10;
        console.log("When right is pressed, x = " + car1_x + " and y = " + car1_x);
        uploadBackgound();
        uploadCar1();
        uploadCar2();
    }
}
function car2up(){
    if(car2_y>=0){
        car2_y = car2_y-10;
        console.log("When up is pressed, x = " + car2_x + " and y = " + car2_y);
        uploadBackgound();
        uploadCar1();
        uploadCar2();
    }
    console.log("This is up");
}
function car2down(){
    if(car2_y<=500){
        car2_y = car2_y+10;
        console.log("When down is pressed, x = " + car2_x + " and y = " + car2_y);
        uploadBackgound();
        uploadCar1();
        uploadCar2();
    }
}
function car2left(){
    if(car2_x>=0){
        car2_x = car2_x-10;
        console.log("When left is pressed, x = " + car2_x + " and y = " + car2_y);
        uploadBackgound();
        uploadCar1();
        uploadCar2();
    }
    }
function car2right(){
    if(car2_x<=700){
        car2_x = car2_x+10;
        console.log("When right is pressed, x = " + car2_x + " and y = " + car2_x);
        uploadBackgound();
        uploadCar1();
        uploadCar2();
    }
}

