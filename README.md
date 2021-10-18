# Blackjack
Play the classic game of Blackjack in your web browser! This version adheres to the [Bicycle](https://bicyclecards.com/how-to-play/blackjack/) ruleset of Blackjack and features one player and one dealer opponent. Shuffle the deck with the [Fisher-Yates](http://extremelearning.com.au/fisher-yates-algorithm/) shuffling algorithm and then deal out the cards. Game updates happen instantaneously, including multiple card draws by the dealer. When choosing to stand or resign, the dealer's face-down card is revealed to the player. The game automatically counts aces as high until the player would bust, then declaring them as low.

## Installation
This implementation of the game Blackjack runs fully on the frontend with vanilla JavaScript, HTML5, and CSS3. There is no need to build the project or run any dependencies. The live demonstration of this program can be found at: [link](example.com)

## Features
- Handling for player/dealer naturals (Automatic win, lose, draw)
- Handling for aces being high or low for both the dealer and player
- Card dealing is staggered, with the player receiving a card and then the dealer, cycling until both possess two cards.
- Game status messages that notify the user of the current game state
- Implementation of the Fisher-Yates shuffle, often called the "ideal" shuffling method for digital card games.
- Separation of design elements into MVC, use of JavaScript imports to separate out code into multiple files
- Flexbox for wrapping elements and producing a visible play area regardless of view size

## Known Issues
- Time constraints did not allow for unit testing. Manual tests revealed that the DOM does not update the dealer's face down card when the player or dealer uncommonly wins via a natural play. This likely could be fixed in the future via the implementation of asynchronous JavaScript.
