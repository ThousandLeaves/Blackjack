/**
 * [ ] main.js
 * 
 * This file automatically imports all other modules and is the entry point for scripting behavior.
 * All interactions coming from index are processed here and router to their respective objects/modules.
 * 
 * main.js serves as the main logic controller, receiving input from the view and then routing that input
 * to methods and properties in the appropriate model.
 * 
 * The update.js module is always called last, after all controller and model methods have completed.
 * This ensures the view will be updated with the most accurate information.
 */

"use strict";

import { Update } from "./view/Update.js";
import { Deck } from "./model/deck.js";
import { Player } from "./model/player.js"

const BlackjackGame = (() => {

    var player1;
    var dealer;
 
    /* Define buttons in const in case names change later */
    const GAME_BUTTON_ARRAY = ["Deal", "Hit", "Stand", "Resign"];

    function getButtonClick(e) {
        if(e.target.innerText === GAME_BUTTON_ARRAY[0]) {
            /* Only available in first turn of game. Deals cards out to players/dealer */
            gameDeal();
        } else if(e.target.innerText === GAME_BUTTON_ARRAY[1]) {
            /* Player receives a card until choosing to stand or busting */
            gameHit();
        } else if(e.target.innerText === GAME_BUTTON_ARRAY[2]) {
            /* Player does not draw more cards. Dealer draws until > 17 or bust */
            gameStand();
        } else if(e.target.innerText === GAME_BUTTON_ARRAY[3]) {
            /*  */
            gameResign();
        }

        /* After every button click, update the view with new information */
        Update.update();
    }

    /**
     * Game interactive functions:
     * These functions provide the core gameplay actions that respond to player input.
     */

    /* gameDeal initializes a new game. */
    var gameDeal = () => {
        player1 = Player(new Array(), 0);
        dealer = Player(new Array(), 0);
        Deck.populateDeck();
        Deck.shuffleDeck();
        for (let i = 1; i <= 4; i++) {
            let newCard = Deck.takeCard();
            if(i % 2 === 1) {
                player1.addCard(newCard);
            } else {
                dealer.addCard(newCard);
            }

        }
    }

    var gameHit = () => {
        addCardsToHand(player1);
    }

    var gameStand = () => {
        alert("You don't take a card.");
        addCardsToHand(dealer);
    }

    var gameResign = () => {
        alert("You have given up.");
    }

    /**
     * Game helper functions:
     * Helper functions indirectly work with the above functions to do things like
     * determine the game state.
     */

    var evaluateScore = (player) => {

        if (player.getScore() > 21) {
            alert("Busted!");
        }
    }

    var addCardsToHand = (player) => {
        let newCard = Deck.takeCard();
        player.addCard(newCard);
        player.addScore(newCard.getValue().points);
        evaluateScore(player);        
    }

    /* Add event listeners to buttons to separate design from implementation */
    let gameButtons = document.querySelectorAll("button");
    gameButtons.forEach(element => element.addEventListener("click", getButtonClick));

})();