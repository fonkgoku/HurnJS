import hurn from '../src/hurn';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

describe('Response contains', () => {
  it('generated words with random key when no parameters are passed', () => hurn().should.eventually.be.a('string'));

  it('generated words with key passed as parameter', () => hurn('stoli1').should.eventually.be.a('string').that.includes('Stoli'));

  it('"Key not found" when set key isn\'t available', () => hurn('foobar').should.eventually.be.rejectedWith(Error));
});
