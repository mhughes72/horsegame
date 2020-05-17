"strict";

export default class Player {
    constructor(id, name, player, currentRole, money = 100) {
        this.id = id;
        this.name = name;
        // 'computer' or 'human'
        this.player = player;
        // 'player' or 'dealer'
        this.currentRole = currentRole;
        this.bet = { "suit": "", "amount": 0 }
        this.money = money;
        this.locked = false;
        this.bankrupt = false;

    }


    updateMoney(profit) {
        this.money = this.money + profit;
        if (this.money<=0) {
            this.money=0;
            this.bankrupt=true;
        }
    }

    bankrupt() {
        this.money = 0;
        this.locked = true;
        this.bankrupt = true;

    }

}