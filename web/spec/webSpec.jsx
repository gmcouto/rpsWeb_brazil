import React from 'react';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import * as ReactDOM from 'react-dom';
import * as sinon from 'sinon';
import {RPSApp} from "../src/RPSApp";
import {rps} from "rps";

const expect = chai.expect;
chai.use(sinonChai);

describe('when the play use case tells the UI that the input is invalid', () => {
    it('tells the user that the input is invalid', () => {
        let domFixture = document.createElement('div');
        domFixture.id = 'divId';
        document.querySelector('body').appendChild(domFixture);
        const requests = {
            play: function (p1, p2, ui) {
                ui.invalid();
            }
        };

        ReactDOM.render(
            <RPSApp requests={requests}/>,
            domFixture
        );

        document.querySelector('button').click();

        expect(domFixture.innerText).contains("Invalid Input");
    });
});

describe('when the play try to use the interface to select one option', () => {
    it('tells the user that the option is rock', () => {
        let domFixture = document.createElement('div');
        domFixture.id = 'divId';
        document.querySelector('body').appendChild(domFixture);

        ReactDOM.render(
          <RPSApp requests={new rps}/>,
          domFixture
        );

        expect(domFixture.innerText).contains("Rock");
        expect(domFixture.innerText).contains("Papers");
        expect(domFixture.innerText).contains("Scissors");
    });
});
