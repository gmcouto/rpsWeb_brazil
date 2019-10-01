import chai from 'chai';
import sinonChai from 'sinon-chai';
import {rps} from '../src/rps';


const expect = chai.expect;
chai.use(sinonChai);

describe('when playing rock, paper, scissors', function () {
    it('should declare p1 winner if p1 plays rock and p2 plays scissors', () => {
        let response = new rps().play('rock', 'scissors');

        expect(response).is.equal('p1wins');
    });
});
