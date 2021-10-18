/**
 * [ ] card.js
 * 
 * The card.js factory is able to hold a suit and rank when created. It's a simple information object with
 * getters/setters. No use of closure so JavaScript rules for underscored variables as private should be
 * respected.
 */

"use strict";

export function Card(suit, rank, points) {
    return {
        _suit: suit,
        _rank: rank,
        _points: points,

        setValue(suit, rank, points) {
            this._suit = suit;
            this._rank = rank;
            this._points = points;
        },

        setAce(value) {
            if (this._rank === "Ace") {
                if (value === "high") {
                    this._points = "11";
                } else if (value === "low") {
                    this._points = "1";
                }
            } else {
                throw 'Expected Ace, received ' + this._rank;
            }
        },

        getValue() {
            return { 
                suit:this._suit,
                rank:this._rank,
                points:this._points 
            };
        }
    }
}