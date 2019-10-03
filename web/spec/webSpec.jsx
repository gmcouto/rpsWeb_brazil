import React from 'react';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import * as ReactDOM from 'react-dom';
import * as sinon from 'sinon';
import {RPSApp} from "../src/RPSApp";
import {rps} from "rps";

const expect = chai.expect;
chai.use(sinonChai);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function buildPage() {
  if (document.getElementById('divId')) {
    document.getElementById('divId').remove();
  }

  let page = document.createElement('div');
  page.id = 'divId';

  document.querySelector('body').appendChild(page);

  return page;
}

function renderReact(container, requests) {
  ReactDOM.render(
    <RPSApp requests={requests}/>,
    container
  );
}

describe('when the play try to use the interface ', () => {
  it('should display the result field', () => {
    let page = buildPage();

    renderReact(page, new rps())

    let div = page.querySelector('p.result');
    expect(div).to.be.not.null;

  });

  it('should display the field player 1 throw', () => {
    let page = buildPage();

    renderReact(page, new rps())

    let div = page.querySelector('input.player1Throw');
    expect(div).to.be.not.null;
  });

  it('should display the field player 2 throw', () => {
    let page = buildPage();

    renderReact(page, new rps())

    let div = page.querySelector('input.player2Throw');
    expect(div).to.be.not.null;

  });

  it('should display the button', () => {
    let page = buildPage();

    renderReact(page, new rps())

    let div = page.querySelector('button');
    expect(div).to.be.not.null;
    expect(div.innerText).to.be.equal('Play');
  });
});

describe('when the play button is pressed ', () => {
  it('should pass the player 1 throw', () => {
    let page = buildPage();

    const requests = {
      play: function (p1, p2, ui) {
        this.playerOneThrow = p1;
      }
    };

    renderReact(page, requests);

    let input = page.querySelector('input.player1Throw');
    page.querySelector('button').click();
    sleep(2000).then(() => {
      expect(requests.playerOneThrow).to.be.equals(input.value);
    });
  });

  it('should pass the player 2 throw', () => {
    let page = buildPage();

    const requests = {
      play: function (p1, p2, ui) {
        this.playerTwoThrow = p2;
      }
    };

    renderReact(page, requests);
    let input = page.querySelector('input.player2Throw');
    page.querySelector('button').click();
    sleep(2000).then(() => {
      expect(requests.playerTwoThrow).to.be.equals(input.value);
    });

  });

  it('should display a Player 1 wins when Player 1 wins', () => {
    let page = buildPage();
    const requests = {
      play: function (p1, p2, ui) {
        ui.p1wins()
      }
    };
    renderReact(page, requests);
    page.querySelector('button').click();
    let result = page.querySelector('p.result');
    expect(result.innerText).to.be.equals('Player 1 Wins');
  });

  it('should display a Player 2 wins when Player 2 wins', () => {
    let page = buildPage();
    const requests = {
      play: function (p1, p2, ui) {
        ui.p2wins()
      }
    };
    renderReact(page, requests);
    page.querySelector('button').click();
    let result = page.querySelector('p.result');
    expect(result.innerText).to.be.equals('Player 2 Wins');
  });

  it('should display a Tie when a tie happens', () => {
    let page = buildPage();
    const requests = {
      play: function (p1, p2, ui) {
        ui.tie()
      }
    };
    renderReact(page, requests);
    page.querySelector('button').click();
    let result = page.querySelector('p.result');
    expect(result.innerText).to.be.equals('Tie');
  });

  it('tells the user that the input is invalid', () => {
    let page = buildPage();
    const requests = {
      play: function (p1, p2, ui) {
        ui.invalid();
      }
    };

    renderReact(page, requests)

    page.querySelector('button').click();
    let div = page.querySelector('p.result');
    expect(div.innerText).contains("Invalid Input");
  });
});

