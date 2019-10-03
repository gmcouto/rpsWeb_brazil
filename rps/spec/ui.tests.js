import chai from 'chai';
import sinonChai from 'sinon-chai';
import {ObserverDouble} from '../src/ObserverDouble';

const expect = chai.expect;
chai.use(sinonChai);

describe('when playing rock, paper, scissors and p1 wins', function () {
    it('should have result as p1wins', () => {
        let response = new ObserverDouble().p1wins();
        expect(response.result).is.equal('p1wins');
    });
});

describe('when playing rock, paper, scissors and p2 wins', function () {
    it('should have result as p2wins', () => {
        let response = new ObserverDouble().p2wins();
        expect(response.result).is.equal('p2wins');
    });
});

describe('when playing inform invalid option', function () {
    it('should have result as invalid', () => {
        let response = new ObserverDouble().invalid();
        expect(response.result).is.equal('invalid');
    });
});

describe('when both players play the same', function () {
    it('should have result as tie', () => {
        let response = new ObserverDouble().tie();
        expect(response.result).is.equal('tie');
    });
});
