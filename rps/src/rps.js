export class rps {
  play(p1, p2, observer) {
    console.log(p1)
    console.log(p2)
    if (this.__isInvalidPlay(p1, p2)) {
      return observer.invalid();
    }
    if (p1 === p2) {
      observer.tie();
      return;
    }
    if (this.__player1wins(p1, p2)) {
      observer.p1wins();
    } else {
      observer.p2wins();
    }
  }

  __isInvalidPlay(p1, p2) {
    return !(this.__isValidPlay(p1) && this.__isValidPlay(p2));
  }

  __isValidPlay(playThrow) {
    let validOptions = ["rock", "scissors", "paper"];
    return validOptions.includes(playThrow);
  }

  __player1wins(p1, p2) {
    return p1 === "rock" && p2 === "scissors" ||
      p1 === "scissors" && p2 === "paper" ||
      p1 === "paper" && p2 === "rock";
  }
}