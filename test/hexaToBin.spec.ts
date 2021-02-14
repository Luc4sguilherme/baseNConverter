import { expect } from 'chai';
import Converter from '../src/index';

const hexaToBin = new Converter(16, 2);

describe('Convert from hexadecimal to binary', () => {
  it('Convert 0 to binary', () => {
    const binary = hexaToBin.convert('0');
    expect(binary).to.equal('0');
  });
  it('Convert 1 to binary', () => {
    const binary = hexaToBin.convert('1');
    expect(binary).to.equal('1');
  });
  it('Convert 2 to binary', () => {
    const binary = hexaToBin.convert('2');
    expect(binary).to.equal('10');
  });
  it('Convert 3 to binary', () => {
    const binary = hexaToBin.convert('3');
    expect(binary).to.equal('11');
  });
  it('Convert 4 to binary', () => {
    const binary = hexaToBin.convert('4');
    expect(binary).to.equal('100');
  });
  it('Convert 5 to binary', () => {
    const binary = hexaToBin.convert('5');
    expect(binary).to.equal('101');
  });
  it('Convert 6 to binary', () => {
    const binary = hexaToBin.convert('6');
    expect(binary).to.equal('110');
  });
  it('Convert 7 to binary', () => {
    const binary = hexaToBin.convert('7');
    expect(binary).to.equal('111');
  });
  it('Convert 8 to binary', () => {
    const binary = hexaToBin.convert('8');
    expect(binary).to.equal('1000');
  });
  it('Convert 9 to binary', () => {
    const binary = hexaToBin.convert('9');
    expect(binary).to.equal('1001');
  });
  it('Convert A to binary', () => {
    const binary = hexaToBin.convert('A');
    expect(binary).to.equal('1010');
  });
  it('Convert B to binary', () => {
    const binary = hexaToBin.convert('B');
    expect(binary).to.equal('1011');
  });
  it('Convert C to binary', () => {
    const binary = hexaToBin.convert('C');
    expect(binary).to.equal('1100');
  });
  it('Convert D to binary', () => {
    const binary = hexaToBin.convert('D');
    expect(binary).to.equal('1101');
  });
  it('Convert E to binary', () => {
    const binary = hexaToBin.convert('E');
    expect(binary).to.equal('1110');
  });
  it('Convert F to binary', () => {
    const binary = hexaToBin.convert('F');
    expect(binary).to.equal('1111');
  });
  it('Convert 10 to binary', () => {
    const binary = hexaToBin.convert('10');
    expect(binary).to.equal('10000');
  });
  it('Convert 64 to binary', () => {
    const binary = hexaToBin.convert('64');
    expect(binary).to.equal('1100100');
  });
  it('Convert 3039 to binary', () => {
    const binary = hexaToBin.convert('3039');
    expect(binary).to.equal('11000000111001');
  });
});
