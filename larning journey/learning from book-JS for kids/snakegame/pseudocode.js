/*
set up the canvas 
set score to zero
create snake 
create apple

every 100milliseconds {
    clear the canvas 
    draw current score on the screen 
    move snake in current direction
    if snake collides with wall or itself {
        end the game 
    } else if snake eats the apple {
        add one  to score 
        move apple to new location 
        make snake longer
    }

    for each segment of the snake {
        draw the segment 
    }
    draw the apple
    draw the border
}

whem the user presses a key {
    if the key is an arrow {
        update the direction of the snake
    }
}
*/