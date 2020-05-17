import { elements } from './base';

export const showPlayers = (players) => {

    // moved to V2.0
    // ${players[index].currentRole}<br />
    // ${players[index].player}<br />

    for (let index = 0; index < players.length; index++) {
        const playerHTML = `<div class='players__player__name'>${players[index].name}</div>
        <div class='bank--${players[index].id} players__player__bank'>$${players[index].money}</div>
        <select class='players__player__suit' id="betSuit${players[index].id}" name="betCard">
            <option value="S">Spade</option>
            <option value="H">Heart</option>
            <option value="C">Club</option>
            <option value="D">Diamonds</option>
            </select></br>
        <input type="number" class="players__player__bet" id="betAmount${players[index].id}" name="tentacles"
        min="10" max="${players[index].money}"><br>
    `;
        elements.players()[index].innerHTML = '';
        elements.players()[index].innerHTML = playerHTML;
    }
}

export const lockPlayerUI = (player) => {
    document.getElementById("betSuit" + player.id).disabled = true;
    document.getElementById("betAmount" + player.id).disabled = true;
}

export const resetPlayerUI = (player) => {
    document.getElementById("betSuit" + player.id).disabled = false;
    document.getElementById("betSuit" + player.id).value = 'S';
    document.getElementById("betAmount" + player.id).disabled = false;
    document.getElementById("betAmount" + player.id).value = 0;
}

export const showMoney = (player) => {
    if (player.bankrupt === false) {
        document.querySelector(".bank--" + player.id).innerHTML = `$${player.money}`;
    }
}
export const killPlayer = (player => {
    console.log("KILL")
    document.querySelector(".players__player--" + player.id).innerHTML = `<h1>&#8855;</h1>`;
})

