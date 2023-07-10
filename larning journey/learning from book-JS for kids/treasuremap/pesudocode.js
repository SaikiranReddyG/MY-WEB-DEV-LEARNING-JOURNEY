/*
Designing the game
1>>>create a web page with an image and a place to 
dispaly the message to the player
2>>pick a random spot on the map to hide the treasure
3>>create a click handler, each time the player
clicks the map the click handler will:
     >>add 1 click to the counter
     >>calculate how far the click is from the treasure
     >>display a message on the web page to tell player 
     they are hot or cold
     >>congratulate the player if they click on the treasure
     and say how many clicks did it took  
*/

/*
picking a random tresure location
since the dimensions of the map is 400*400 the coordinates must be same
top left pixel={x:0, y:0}
bottom right pixel={x:399, y:399}
for setting a random coordinates pick a random number btw 0 and 399 
*/

var clicks = 0; //for click handler

var get_random_number =function(size) {
    return Math.floor(Math.random()*size);
};

/*setting the treasure coordinates */
var width = 400;
var height = 400;

var target = {
    x: get_random_number(width),
    y: get_random_number(height)
};


/*click handler
this click handler needs to a quite a lot work like
increment the counter
calculate the positon of the click towards the treasure
dispay the message
*/
$("map").click(function (eventt) {
    //click handler code 
})

/*
calculate the distance btw the click and treasure 
*/

var get_distance = function (eventt, target) {
    var diffx = eventt.offsetX - target.x;
    var diffy = eventt.offsety - target.y;
    return Math.sqrt((diffx * diffy) + (diffx * diffy));
};

/*
this function takes two obj (eventt and target)
the eventt contains offsetx and offsety which are x and y coordinates
of the click
the variable diffx stores the horizontal distance btw clicked location and the target
and the same for diffy 
to calculate the distance btw eventt and the target we use pythagoreus theorem  
*/

//telling the player how close they are
/*
for this we need to display a hint telling the player how close they are using the hint
*/

var get_distance_hint = function (distance) {
    if (distance < 10) {
        return "boiling hot!";
    } else if (distance < 20) {
        return "really hot ";
    } else if (distance < 40) {
        return "Hot";
    } else if (distance < 80) {
        return "warm";
    } else if (distance < 160) {
        return "cold";
    } else if (distance < 320) {
        return "really cold";
    } else {
        return "freezing";
    }
};

/* 
this function returns diffrent strings depending on the calculated distance from treasure
we display the message to the player by adding it as text in the web page
*/

var distance = get_distance(eventt, target)
var distance_hint = get_distance_hint(distance);
$('#distance').text(distance_hint);

//checking if the player won 
if (distance < 8) {
    alert("found the treasure in " + clicks + "  clicks!!!");
}

