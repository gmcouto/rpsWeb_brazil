export class ObserverDouble {
    constructor() {
        this.result = "";
    }

    p1wins() {
        this.result = "p1wins";
        return this;
    }

    p2wins() {
        this.result = "p2wins";
        return this;
    }

    invalid() {
        this.result = "invalid";
        return this;
    }

    tie() {
        this.result = "tie";
        return this;
    }
}