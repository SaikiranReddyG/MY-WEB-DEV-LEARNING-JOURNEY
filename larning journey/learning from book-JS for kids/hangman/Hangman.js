//choosing a random word

var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

var word = words[math.floor(math.random() * words.length)];

//creating answer array

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "-";
}
//when the loop finishes answer array will be the same length as the word 
remaining_letters = word.length;
//we use this variable to keep track of letters remaining to be guessed
//every time the player guess a correct word the value is decremented

//game loop
while (remaining_letters > 0) {
    //game code
    //shoe the player his progress
    alert(answerArray.join(""));
    //take input from the player
    var guess = prompt("guess a letter or click cancel to quit");
    if (guess ===null) {
        break;
    } else if (guess.length !==1) {
        alert('please enter a single letter');
    } else {
        //update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remaining_letters--;
            }

        }
    }
    //show the answer and congratulate the player 
    alert(answerArray.join(" "));
    alert("Good job the answer was " + word);
    //update answer array and remaining letters for every correct word guess
    //once the player have guessed all the letters the loop will end 
}