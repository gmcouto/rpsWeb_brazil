import chai from 'chai';
import sinonChai from 'sinon-chai';
import {ObserverDouble} from '../src/ObserverDouble';
import {rps} from '../src/rps';

const expect = chai.expect;
chai.use(sinonChai);

describe('when playing rock, paper, scissors', function () {
  it('should declare p1 winner if p1 plays rock and p2 plays scissors', () => {
    let observer = new ObserverDouble();
    new rps().play('rock', 'scissors', observer);
    expect(observer.result).is.equal('p1wins');
  });
});

describe('when playing rock, paper, scissors', function () {
  it('should declare p2 winner if p1 plays scissors and p2 plays rock', () => {
    let observer = new ObserverDouble();
    new rps().play('scissors', 'rock', observer);
    expect(observer.result).is.equal('p2wins');
  });
});

describe('when both players play the same', function () {
  it('should have result as tie', () => {
    let observer = new ObserverDouble();
    new rps().play('rock', 'rock', observer);
    expect(observer.result).is.equal('tie');
  });
});

describe('when a player plays an invalid option', function () {
  it('should have result as invalid', () => {
    let observer = new ObserverDouble();
    new rps().play('lizard', 'spock', observer);
    expect(observer.result).is.equal('invalid');
  });
});

describe('when a player plays an invalid option and another plays a valid option', function () {
  it('should have result as invalid', () => {
    let observer = new ObserverDouble();
    new rps().play('lizard', 'rock', observer);
    expect(observer.result).is.equal('invalid');
  });
});
