
import { elements } from './base';

export const dealHand = (hand) => {

    for (let index = 0; index < hand.length; index++) {
        elements.hand()[index].innerHTML = '';
        let img = document.createElement('img');

        img.src = `img/${hand[index].rank}${hand[index].suit}.png`;
        img.className = 'card';
        elements.hand()[index].appendChild(img);

    }
}


export const setupAces = () => {
    console.log('STARTING UP')
    elements.aceTrack().forEach(e1 => {
        e1.forEach(e2 => {
            e2.innerHTML = '';
        });
    });

    
    elements.startGridSpades.innerHTML = `<img src='img/AS.png' class='card ace__S'>`;
    elements.startGridHearts.innerHTML = `<img src='img/AH.png' class='card ace__H'>`;
    elements.startGridClubs.innerHTML = `<img src='img/AC.png' class='card ace__C'>`;
    elements.startGridDiamonds.innerHTML = `<img src='img/AD.png' class='card ace__D'>`;

}

export const displayOdds = (odds) => {
    let index = 0;
    for (const key in odds) {
        elements.odds()[index].innerHTML = '';
        elements.odds()[index].insertAdjacentHTML('afterBegin', `<H1>1-${odds[key]}</H1>`);

        index += 1;
    }
}

