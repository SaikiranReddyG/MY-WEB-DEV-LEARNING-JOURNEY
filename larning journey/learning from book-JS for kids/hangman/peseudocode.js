/* 
pick a random word 

while the word has not been guessed {
    show the player their progess
    get a guess from the player
    
    if the player wants to quit {
        quit the game 
    }
    else if the guess is not a single letter {
        tell the player to pick a single letter
    }
    else {
        if the guess is in the word {
            update the player progress with the guess
        }
    }
}

congratulate the player on guessing the word
*/

/* almost all games are built around a loop of some kind
in this game the loop does
take input from the player 
update the game state
display the current state of the game to the player */