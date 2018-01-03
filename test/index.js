import { assert } from 'chai';
import hurn from '../src/hurn';

describe('Generates words', () => {
  it('generate words with random key when no parameters are passed', () => {
    hurn().then(response => {
      assert(response.length > 0);
    })
  });

  it('generate words with key passed as parameter', () => {
    hurn('pillen').then(response => {
      assert(response.toLowerCase().includes('pillen') === true);
    })
  });
});
