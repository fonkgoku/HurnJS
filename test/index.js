import hurn from '../src/hurn';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

describe('Response contains', () => {
  it('generated words with random key when no parameters are passed', () => {
    return hurn().should.eventually.be.a('string');
  });

  it('generated words with key passed as parameter', () => {
    return hurn('stoli').should.eventually.be.a('string').that.includes('Stoli');
  });

  it('"Key not found" when set key isn\'t available', () => {
    return hurn('foobar').should.eventually.be.rejectedWith(Error);
  });
});
