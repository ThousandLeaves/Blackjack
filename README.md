# Blackjack

⚠️ [Play Blackjack in your browser here](https://thousandleaves.github.io/blackjack/)

Play the classic game of Blackjack in your web browser! This version adheres to the [Bicycle](https://bicyclecards.com/how-to-play/blackjack/) ruleset of Blackjack and features one player and one dealer opponent. Shuffle the deck with the [Fisher-Yates](http://extremelearning.com.au/fisher-yates-algorithm/) shuffling algorithm and then deal out the cards. Game updates happen instantaneously, including multiple card draws by the dealer. When choosing to stand or resign, the dealer's face-down card is revealed to the player. The game automatically counts aces as high until the player would bust, then declaring them as low.

## Installation
This implementation of the game Blackjack runs fully on the frontend with vanilla **JavaScript**, **HTML5**, and **CSS3**. There is no need to build the project or run any dependencies. The live demonstration of this program can be found at: [https://thousandleaves.github.io/blackjack/](https://thousandleaves.github.io/blackjack/)

## Playing the Game
Start off the game by pressing the deal button. The player receives a card, then the dealer, until both sides have two cards each. Press the **"hit"** button to take another card from the top of the deck. You may hit until you no longer wish to receive more cards. When finished taking cards, press the **"stand"** button to signal you are finished. The dealer then draws cards until they bust or reach a score of 17 or higher. At the end, cards are compared and if the player has a higher point value than the dealer and also does not have a score higher than 21, they win. 

If the current game seems unwinnable, pressing the **"resign"** button ends the current round and reveals all cards in play.

Start another round by pressing **"deal"**. Dealing also shuffles the deck in this implementation, ensuring that the deck does not run out and that counting cards is nearly impossible.

## Features
- Handling for player/dealer naturals (Automatic win, lose, draw)
- Handling for aces being high or low for both the dealer and player
- Card dealing is staggered, with the player receiving a card and then the dealer, cycling until both possess two cards.
- Game status messages that notify the user of the current game state
- Implementation of the Fisher-Yates shuffle, often called the "ideal" shuffling method for digital card games.
- Separation of design elements into MVC, use of JavaScript imports to separate out code into multiple files
- Flexbox for wrapping elements and producing a visible play area regardless of view size

## Future Considerations
Future versions could implement additional features to improve the user experience. These could include:
- Counting the number of player and dealer wins
- Revealing the scores of the player and dealer when the game ends for easier parsing of information
- Responsivity for mobile devices
- Asynchronous JavaScript to allow for segmenting block actions such as the dealer drawing cards to happen incrementally instead of instantaneously

## Known Issues
- Manual tests revealed that the DOM does not update the dealer's face down card when the player or dealer uncommonly wins via a natural play. This likely could be fixed in the future via the implementation of asynchronous JavaScript.
