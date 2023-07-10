//in java script there are 3 main types of datatypes
//numbers
//numbers have their owm operators
console.log(1 + 2)
console.log(1 - 2)
console.log(1 * 2)
console.log(1 / 2)
//we can also combine these operators
console.log(1+2*3-5/2)

/* here the result of the calculation  deppends 
on the order, and the JS uses the order of DMAS */

//if you want to do addition first then
console.log(8 / (1 + 3)) 

/* Let’s say your friend is trying to use JavaScript to work 
out how many balloons to buy. She’s throwing a party and 
wants everyone to have 2 balloons to blow up. There were 
originally 15 people coming, but then she invited 9 more.  */
console.log((15 + 9) * 2)


//variables

var no_of_siblings = 33;
var no_of_candies = 55;
console.log(no_of_siblings / no_of_candies)

//creating variables using math
//calculating no of sec in an hour
var SecInMinute = 60
var MinInHour = 60
var SecInHour = SecInMinute * MinInHour;
console.log(SecInHour);
//calculating no sec in a day 
var HoursInDay = 24;
var SecInDay = HoursInDay * SecInHour;
console.log(SecInDay)
//calculating no of sec in a year
var days_in_year = 365;
var sec_in_year = SecInDay * days_in_year;
console.log(sec_in_year)
//calculatuing age in secs
var age = 23;
console.log(age * sec_in_year)

//incrementing and decrementing
//plus-equals & minus-equals

//strings
var numberNine = 9;
var stringNine = "9";
console.log(numberNine + numberNine)
console.log(stringNine + stringNine)

//finding the length of a string
console.log("saikiranreddy".length);


//changing all letters of a string to upper case
var naming = "saikiranreddy".toUpperCase();
console.log(naming)
//changing all letters of a string to lower case
var named = "saikiRANREDDY".toLowerCase();
console.log(named);
//booleans
//logical operators
//&&  (used to check if both are true)
var sai = true;
var kiran = true;
var reddy = false;
console.log(sai && kiran); 
console.log(sai && reddy); 
console.log(kiran && reddy);

// || (OR) (to check if either one of the statment is true)
console.log(sai || kiran); 
console.log(sai || reddy); 
console.log(kiran || reddy);

// !(NOT)  (to turn false to true or true to false)
console.log(!sai); 
console.log(!kiran); 
console.log(!reddy);

//combining logical operators
var the_name = !sai && kiran (sai || kiran);
console.log(the_name);
//JS calculates && before ||

//comparing with booleans 
var height1 = 55;
var height2 = 50;
var height3 = 45;
var req_height = 50;
//greater than
console.log(height1 > req_height);
//less than
console.log(height3 < req_height);
//equals to 
console.log(height2 === req_height);
//double equals   (used to compare string with numbers)


