var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var spriteSheet = new Image();
spriteSheet.src = "Images/ChocBomb.png";

spriteSheet.onload = function() {
  var imgWidth = spriteSheet.width;
  var imgHeight = spriteSheet.height;
  var numberOfRows = 2;
  var numberOfColumns = 2;
  //first frame goes from 0,0
  
  // frame width = image width / columns
  // frame height = image height / rows
  var sx = 0;
  var sy = 0;
  var frameWidth = imgWidth / numberOfColumns;
  var frameHeight = imgHeight / numberOfRows;
  
  console.log(imgWidth);

  //Change dimentions of gif (it flashes)

  ctx.drawImage(spriteSheet, sx, sy, frameWidth, frameHeight, 0, 0, 116, 116);

}
var spritesheet = {
    'pos_x': 0,
    'pos_y': 0,
'imagePath': "Images/ChocBomb.png", 
    "numberOfRows":  2, 
    "numberOfColumns":  2,



};

var player = {
    'spriteSheetImage': 'Images/ChocBomb.png',
    'frame_number': 1, // current frame of spritesheet being displayed
    'number_of_frames': 6, // number of animation frames on the spritesheet
    'numberOfRows': 3, // on the spritesheet
    'numberOfColumns': 2, // on the spritesheet
    'sx': 0, // this is the coordinate of the animation frame on the spritesheet
    'sy': 0,
    'pos_x': 0,
    'pos_y': 0,
    'unit_size': 100,
    'color': "#ff0000",
    'draw': function() {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.pos_x, this.pos_y, this.unit_size, this.unit_size);
    },
};

document.addEventListener("keypress", function (event) {
    //log the keyword to the console
    console.log(event.keyCode); 
    
    //check if user has pressed 's' meaning 'down'
    if (event.keyCode == 115) {
        //alert("you pressed 'down'");
        player.pos_y += player.unit_size;
     }

    
    //check if user has pressed 'd' meaning 'right'
    if (event.keyCode == 100) {
        //alert("you pressed 'right'");
        player.pos_x += player.unit_size;
     }
 
     //check if user has pressed 'a' meaning 'left'
    if (event.keyCode == 97) {
        //alert("you pressed 'left'");
        player.pos_x -= player.unit_size;
     }

     //check if user has pressed 'w' meaning 'up'
    if (event.keyCode == 119) {
        //alert("you pressed 'up'");
        player.pos_y -= player.unit_size;
     }

});




setInterval(updateGamestate, 1000 / 25);


function updateGamestate() {
    ctx.clearRect(0, 0, c.clientWidth, c.height);
       //player.draw();
}


