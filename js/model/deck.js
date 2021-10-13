/**
 * [ ] deck.js
 * 
 * Info here
 */
'use strict';

import { Card } from './card.js';

const Deck = (() => {

    /* Const arrays define potential card values for deck. Ace omitted from standard ranks */
    var aceValue = 11; // Default value
    const SUIT = ["Diamond", "Heart", "Spade", "Club"];
    const RANK = { 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10", Jack: "10", Queen: "10", King: "10", Ace: aceValue};
    const DECK_MAX_SIZE = 52;

    var deckContents = [];

    const populateDeck = function() {
        for(const i of SUIT) {
            for(const j in RANK) {
                let tempCard = Card(i,j, RANK[j]);
                /* Deck is populated as card objects, retrieve values using getValue() */
                deckContents.push(tempCard);
            }
        }
    }

    const shuffleDeck = function() {
        let array = deckContents;
        /* Implementation of the Fisher-Yates shuffle algorithm */
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        deckContents = array;
    }

    const takeCard = function() {
        return deckContents.shift();
    }

    const setAceValue = function(value) {
        aceValue = value;
    }

    const getAceValue = function() {
        return aceValue;
    }

    return {
        populateDeck,
        shuffleDeck,
        setAceValue,
        getAceValue,
        takeCard
    };


})()

export { Deck }