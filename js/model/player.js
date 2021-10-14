/**
 * [ ] player.js
 * 
 * Player is a factory object that contains object properties for the player's hand and score.
 * We can also keep a player's name for future iterations that could add multiplayer. Both the 
 * player and dealer are considered as player objects for the purposes of processing game logic.
 */

export const Player = (hand, score) => {
    return {

        _hand: hand,
        _score: score = 0,

        getHand() {
            return this._hand;
        },

        getScore() {
            return this._score;
        },

        addScore(addAmt) {
            this._score += parseInt(addAmt);
        },

        addCard(card) {
            this._hand.push(card);
        }

    }
}