
// import './image-component'
// import './style.css'
import "../sass/main.scss";
import Cards from './models/Track';
import * as trackView from './views/trackViews';
import Player from './models/Player';
import * as playerView from './views/playerViews';
import { elements } from './views/base';
import { abs } from 'mathjs'
//Dynamic shit
const pathToCats = require.context('../img', true);

const cats = [
	'2C.png',
	'2D.png',
	'2H.png',
	'2S.png'
];

const getCats = () => cats.map(name => `<img src='${pathToCats(name, true)}' alt='${name}' />`);



//Global state of the app
const state = {}

state.cards = new Cards();

const calculateProfit = (winSuit, oddsWin, id) => {
    let profit = 0;
    if (winSuit == state.players[id].bet.suit) {
        profit = state.players[id].bet.amount * oddsWin;
    } else {
        profit = -Math.abs(state.players[id].bet.amount)
    }
    return profit;
}

const convertAce = (whichAce) => {
    if (whichAce === 'S') {
        return 'Spades';
    } else if (whichAce === 'H') {
        return 'Hearts';
    }
    else if (whichAce === 'C') {
        return 'Clubs';
    } else if (whichAce === 'D') {
        return 'Diamonds';
    }
}


const moveAce = (whichAce) => {

    let aceNumber = '';
    if (whichAce === 'S') {
        aceNumber = 0;
    } else if (whichAce === 'H') {
        aceNumber = 1;
    } else if (whichAce === 'C') {
        aceNumber = 2;
    } else if (whichAce === 'D') {
        aceNumber = 3;
    };
    elements.aceTrack()[aceNumber][state.aces[whichAce]].innerHTML = '';
    state.aces[whichAce] += 1;
    const img = `<img src='img/A${whichAce}.png' class='card ace__${whichAce}'>`;
    elements.aceTrack()[aceNumber][state.aces[whichAce]].innerHTML = img;
    if (state.aces[whichAce] >= 8) {
        elements.winnerTitle.innerHTML = `${convertAce(whichAce)} Wins!!
        Odds: 1-${state.cards.odds[whichAce]}<br />
        `;
        for (let player of state.players) {
            const profit = calculateProfit(whichAce, state.cards.odds[whichAce], player.id);
            player.updateMoney(profit);

            playerView.showMoney(player, profit);
            window.open("#popup-results", "_self");
            const winHTML = `
                ID: ${player.id}<br />
                Name: ${player.name}<br />
                Win/Loss: ${profit}<br />
             `;
            if (player.bankrupt === false) {
                elements.playersResults()[player.id].innerHTML = winHTML;
            }
        }
    }
}

const lockInBets = () => {
    for (let index = 0; index < state.players.length; index++) {
        if (state.players[index].bankrupt === false) {
            state.players[index].bet.suit = document.getElementById('betSuit' + index).value;
            state.players[index].bet.amount = document.getElementById('betAmount' + index).value;
            playerView.lockPlayerUI(state.players[index]);
        }
    }
};

const startGame = () => {
    const playerNames = ['Matt', 'Lucy', 'Drake', 'Meesh']
    state.players = [];
    let playerNum = 0;
    elements.playersRegistration().forEach((element) => {
        const entity = element.entity.options[element.entity.selectedIndex].value;
        if (entity !== 'none') {
            let a = state.players.push(new Player(playerNum, playerNames[playerNum], entity, 'player'));
            playerNum += 1;
        }
    });
    playerView.showPlayers(state.players)
    resetGame();
}

const resetGame = () => {
    state.players.forEach(e => {
        if (e.bankrupt === false) {
            playerView.resetPlayerUI(e)
        } else {
            playerView.killPlayer(e)
        }
    });
    elements.popup.style.visibility = "hidden";
    state.aces = {
        'S': 0,
        'H': 0,
        'C': 0,
        'D': 0
    }
    state.cards.makeDeck();
    state.cards.shuffle();
    state.cards.dealHand();
    state.cards.calculateOdds();
    trackView.dealHand(state.cards.hand);
    trackView.displayOdds(state.cards.odds)
    var a=elements.dealtCard.firstChild;
    console.log('TYPE: ', a)
    elements.dealtCard.removeChild(elements.dealtCard.firstChild);
    trackView.setupAces();
}

const dealCard = (card) => {
    while (elements.dealtCard.firstChild) {
        elements.dealtCard.removeChild(elements.dealtCard.firstChild);
    }
    var img = document.createElement('img');
    img.src = `img/${card.rank}${card.suit}.png`;
    img.className = 'card';
    elements.dealtCard.appendChild(img);
    lockInBets();
};

elements.dealer.addEventListener('click', e => {
    e.preventDefault();
    const dealtCard = state.cards.deck.pop();
    moveAce(dealtCard.suit);
    dealCard(dealtCard);
});

document.addEventListener("DOMContentLoaded", function () {
    window.onload = window.open("#popup", "_self");
    document.addEventListener('click', function (event) {
        if (event.target.matches('.btn__start-game')) {
            startGame();
        }
        if (event.target.matches('.btn__reset-game')) {
            resetGame();
        }
        if (event.target.matches('.card_dealer')) {
        }
    }, false);

    document.addEventListener('change', function (event) {
        if (event.target.matches('#betAmount0')) {
            if (event.target.value > state.players[0].money) {
                event.target.value = state.players[0].money;
            }
        }

        if (event.target.matches('#betAmount1')) {
            if (event.target.value > state.players[1].money) {
                event.target.value = state.players[1].money;
            }
        }
        if (event.target.matches('#betAmount2')) {
            if (event.target.value > state.players[2].money) {
                event.target.value = state.players[2].money;
            }
        }
        if (event.target.matches('#betAmount3')) {
            if (event.target.value > state.players[3].money) {
                event.target.value = state.players[3].money;
            }
        }

    }, false);
});



//*******************PLAYER STUFF***************************** *

