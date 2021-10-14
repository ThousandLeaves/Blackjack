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

    /*******************************************************************************
     * Game interactive functions:
     * These functions provide the core gameplay actions that respond to player input.
     *******************************************************************************/
    /* gameDeal initializes a new game. */
    var gameDeal = () => {
        player1 = Player(new Array(), 0);
        dealer = Player(new Array(), 0);
        Deck.populateDeck();
        Deck.shuffleDeck();
        for (let i = 1; i <= 4; i++) {
            if(i % 2 === 1) {
                addCardsToHand(player1);
            } else {
                addCardsToHand(dealer);
            }

        }
        checkNaturals();
        console.log(player1.getHand());
        console.log("player score: " + player1.getScore());
    }

    var gameHit = () => {
        addCardsToHand(player1);
        if (player1.getScore() > 21) {
            if (checkAcesHighOrLow(player1) === "high") {
                gameCompletionState("lose", dealer);
            }
        }
        console.log(player1.getHand());
        console.log("player score: " + player1.getScore());
    }

    var gameStand = () => {
        let isDealerBust = false;

        while (true) {
            if (dealer.getScore() < 17) {
                addCardsToHand(dealer);
                console.log(dealer.getHand());
                console.log("dealer score: " + dealer.getScore());
            } else if (dealer.getScore() <= 21) {
                // dealer stands
                break;
            } else {
                if (checkAcesHighOrLow(dealer) === "high") {
                    // Dealer loses
                    isDealerBust = true;
                    break;
                }
            }
        }

        /* Check if dealer busted, otherwise compare dealer & player scores */
        if (isDealerBust) {
            gameCompletionState("win", player1);
        } else {
            if (player1.getScore() > dealer.getScore()) {
                gameCompletionState("win", player1);
            } else if (player1.getScore() < dealer.getScore()) {
                gameCompletionState("lose", dealer);
            } else {
                gameCompletionState("draw");
            }
        }
    }

    var gameResign = () => {
        alert("You have given up.");
        gameCompletionState("lose", dealer);
    }

    /*******************************************************************************
     * Game helper functions:
     * Helper functions indirectly work with the above functions to do things like
     * determine the game state.
     ********************************************************************************/
    var addCardsToHand = (player) => {
        let newCard = Deck.takeCard();
        player.addCard(newCard);
        player.addScore(newCard.getValue().points);     
    }

    var checkNaturals = () => {
        let playerNatural = player1.hasNatural();
        let dealerNatural = dealer.hasNatural();

        if (playerNatural && dealerNatural) {
            gameCompletionState("draw");
        } else if (playerNatural) {
            alert("Player natural");
            gameCompletionState("win", player1);
        } else if (dealerNatural) {
            alert("Dealer natural");
            gameCompletionState("lose", dealer);
        }
    }

    /* Called whenever dealer or player would go over 21 */
    var checkAcesHighOrLow = (player) => {
        return player.determineAcesValue();
    }

    var gameCompletionState = (state, winner = dealer) => {
        if (state === "win") {
            alert("You have won.");
        } else if (state === "lose") {
            alert("You have lost.");
        } else if (state === "draw") {
            alert("Draw game!");
        } else {
            // Do something extremely mysterious
        }
        if (state !== "draw") {
            winner.addWin();
        }
        alert("removing hands.");
        player1.removeHand();
        dealer.removeHand();
    }

    /*******************************************************************************
     * Add event listeners to buttons to separate design from implementation
     *******************************************************************************/
    let gameButtons = document.querySelectorAll("button");
    gameButtons.forEach(element => element.addEventListener("click", getButtonClick));

})();