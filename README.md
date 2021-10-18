# Blackjack
Play the classic game of Blackjack in your web browser! This version adheres to the [Bicycle](https://bicyclecards.com/how-to-play/blackjack/) ruleset of Blackjack and features one player and one dealer opponent. Shuffle the deck with the [Fisher-Yates](http://extremelearning.com.au/fisher-yates-algorithm/) shuffling algorithm and then deal out the cards. Game updates happen instantaneously, including multiple card draws by the dealer. When choosing to stand or resign, the dealer's face-down card is revealed to the player. The game automatically counts aces as high until the player would bust, then declaring them as low.

## Installation
This implementation of the game Blackjack runs fully on the frontend with vanilla JavaScript, HTML5, and CSS3. There is no need to build the project or run any dependencies. The live demonstration of this program can be found at: [link](example.com)

## Known Issues
- Time constraints did not allow for unit testing. Manual tests revealed that the DOM does not update the dealer's face down card when the player or dealer wins via a natural play. This likely could be fixed in the future via the implementation of asynchronous JavaScript.
