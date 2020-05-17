export default class Cards {
    constructor(id) {
        this.ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.suits = ["S", "H", "C", "D"];
        this.shuffleTimes = 1000;
        this.numberOfCardsInHand = 8;
        this.deck = new Array();
        this.hand = new Array();
        this.turn = 0;
        this.odds = { 'S': 0, 'H': 0, 'C': 0, 'D': 0 };
        

    }

    makeDeck() {
        this.deck.length=0;
        for (var i = 0; i < this.suits.length; i++) {
            for (var x = 0; x < this.ranks.length; x++) {
                // var card = { rank: ranks[x], suit: suits[i] };
                this.deck.push({ rank: this.ranks[x], suit: this.suits[i] });
            }
        }

    }

    shuffle() {
        for (var i = 0; i < this.shuffleTimes; i++) {
            let location1 = Math.floor((Math.random() * this.deck.length));
            let location2 = Math.floor((Math.random() * this.deck.length));
            let tmp = this.deck[location1];
            this.deck[location1] = this.deck[location2];
            this.deck[location2] = tmp;
        }
    }
    // dealHand() {
    //     for (let i = 0; i < this.numberOfCardsInHand; i++) {
    //     	this.hand.push(this.deck.pop());
    //     }
    //     cosole.log('HAND: ', deal)
    //     // UICtrl.uIHand(this.hand);

    // }



    calculateOdds() {
        
        let suitTotals = { 'S': 0, 'H': 0, 'C': 0, 'D': 0 };

        for (var key in this.hand) {
            suitTotals[this.hand[key].suit] += 1;
        }

        for (var key in suitTotals) {
            if (suitTotals[key] == 0) {
                this.odds[key] = 1;
            } else if (suitTotals[key] == 1) {
                this.odds[key] = 2
            } else if (suitTotals[key] == 2) {
                this.odds[key] = 3
            } else if (suitTotals[key] == 3) {
                this.odds[key] = 5
            } else if (suitTotals[key] == 4) {
                this.odds[key] = 10
            } else {
                this.odds[key] = 999
            }
        }
        
        return this.odds;
    }


    dealHand() {
        this.hand.length = 0;
        for (let i = 0; i < this.numberOfCardsInHand; i++) {
            this.hand.push(this.deck.pop());
        }
        

    }


};










