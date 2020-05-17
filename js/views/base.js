export const elements = {
    
    mattBtn: document.querySelector('.btn--matt'),
    winResults: document.querySelector('.win__results'),
    winnerTitle: document.querySelector('.winner-title'),
    tempBtn: document.querySelector('.start__image'),
    tempBtn2: document.querySelector('.finish__image'),
    dealer: document.querySelector('.dealer__deck'),
    dealtCard: document.querySelector('.dealer__card'),
    dealAction: document.querySelector('.card_dealer'),
    startGameBtn: document.getElementById('btn__start-game'),
    newStartGame: document.querySelector('.btn__start-game'),
    popup: document.querySelector('.popup'),
    popup2: document.getElementById('popup'),
    startGridSpades: document.querySelector('.track__spades--0'),
    startGridHearts: document.querySelector('.track__hearts--0'),
    startGridClubs: document.querySelector('.track__clubs--0'),
    startGridDiamonds: document.querySelector('.track__diamonds--0'),
    playersResults: function () {
        var results=[]
        for (let index = 0; index < 4; index++) {
            results[index] = document.querySelector(`.popup-results__player__results--${index}`)
        }
        return results;

    },
    playersRegistration: function () {
        const entity0 = document.querySelector('.player__registration--0');
        const entity1 = document.querySelector('.player__registration--1');
        const entity2 = document.querySelector('.player__registration--2');
        const entity3 = document.querySelector('.player__registration--3');
        return [{'entity': entity0}, {'entity': entity1}, {'entity': entity2}, {'entity': entity3}];
    },

    aces: [document.querySelector('.card__spades__ace'), document.querySelector('.card__hearts__ace'), document.querySelector('.card__clubs__ace'), document.querySelector('.card__diamonds__ace')],
    players: function () {
        let thisPlayer = [];
        for (let index = 0; index < 4; index++) {
            thisPlayer[index] = document.querySelector(`.players__player--${index}`)
        }
        return thisPlayer;
    },

    hand: function () {
        let thisHand = [];
        for (let index = 0; index < 8; index++) {
            thisHand[index] = document.querySelector(`.hand__card--${index}`)
        }
        return thisHand;
    },
    odds: function () {
        let oddsCards = [];
        for (let index = 0; index < 4; index++) {
            oddsCards[index] = document.querySelector(`.odds--${index}`)
        }
        return oddsCards;
        
    },
    aceTrack: function () {
        let aces = [[], [], [], []];
        for (let index = 0; index < 9; index++) {
            aces[0].push(document.querySelector(`.track__spades--${index}`))
            aces[1].push(document.querySelector(`.track__hearts--${index}`))
            aces[2].push(document.querySelector(`.track__clubs--${index}`))
            aces[3].push(document.querySelector(`.track__diamonds--${index}`))
        }
        return aces;
    },

    aceHTML: [
        `<div class="A__S">
      <img src='img/AS.png' class='card' id='AS' />
  </div>`,
        `<div class="A__H">
  <img src='img/AH.png' class='card' id='AH' />
</div>`,
        `<div class="A__C">
      <img src='img/AC.png' class='card' id='AC' />
  </div>`,
        `<div class="A__D">
      <img src='img/AD.png' class='card' id='AD' />
  </div>`,
    ]
};