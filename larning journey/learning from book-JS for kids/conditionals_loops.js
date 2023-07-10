var name = "saikiran";
        console.log("hello " + name);
        if (name.length > 7) {
            console.log("wow you have a really long name!!");
        } else {
            console.log("wow your name is not very long!!!!!!!!")
        }

//chaining if else statments
var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;
if (lemonChicken) {
    console.log("great i am having lemon chicken!!!");
} else if (beefWithBlackBean) {
    console.log('i am having the beef');
}else if (sweetAndSourPork) {
    console.log('ok i will have the pork');
}else {
    console.log('well i guess i will have the egg rice than!!!');
}

//saying hello
var namee = "sudhakar"

if (namee === "saikiran") {
    console.log("hi!! me");
} else if (namee = "sudhakar") {
    console.log('hii dad');
} else {
    console.log('hii stranger');
}

/*while loop 
it is one of the simplest loop
it repeatedly executes the body until a paticular condition stops being true */

//counting sheep with a while loop
var sheep_counted = 0;
while (sheep_counted < 10) {
    console.log("i have counted " + sheep_counted + " sheep!!!");
    sheep_counted++;
} 
console.log('Zzzzzzzzzzzzzz');


/* For loops
for loops are used for loops that =
(create a variable
loop until a condition is true 
update the variable at the end of each turn around of the loop)
when setting up a loop 
(create a variable 
specify the condition 
say how the variable should change after each cycle)
*/

for (var sheep_counted = 0; sheep_counted < 10; sheep_counted++) {
    console.log("i have counted " + sheep_counted + " sheep!!!");
}
console.log('Zzzzzzzzzzzzzz');

/*in the above for loop there are there parts 
for(setup; condition; increment)
1>>the setup runs before the loop starts ,, it is generally
used to create a variable to track the no of times the loop has to run

2>>the condition is checked before the each run of the loop body & if the 
condition is true the body is executed & if the body is false the loop stops
(in the above case the loop stops when the sheep counted is equal to 10)

3>>the increment is run after every execution of the loop body */

var say_hello = 3;
for (var i = 0; i < say_hello; i++) {
    console.log("HELOOOOOOO!!!!");
}

//using for loops with arrays and strings
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for (var i = 0; i < animals.length; i++) {
    console.log('this zoo contains a   ' + animals[i] + ".");
}

//awsome animals
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
for (i = 0; i < animals.length; i++) {
    console.log("awsome " + animals[i]);
}

//random string gnerator
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var random_string = "";
while (random_string.length < 9) {
    random_string += random.alphabet;
}
console.log(random_string);