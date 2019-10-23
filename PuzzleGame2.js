var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


var player = {

    'pos_x': 0,
    'pos_y': 0,
    'unit_size': 5,
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
        player.draw();
}


