import { expect } from 'chai';
import Converter from '../src/index';

const decToHex = new Converter(10, 16);

describe('Convert from decimal to hexadecimal', () => {
  it('The argument is a letter', () => {
    expect(() => decToHex.convert('a')).to.throw(Error, 'Invalid number!');
  });
  it('Convert 0 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('0');
    expect(hexadecimal).to.equal('0');
  });
  it('Convert 1 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('1');
    expect(hexadecimal).to.equal('1');
  });
  it('Convert 2 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('2');
    expect(hexadecimal).to.equal('2');
  });
  it('Convert 3 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('3');
    expect(hexadecimal).to.equal('3');
  });
  it('Convert 4 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('4');
    expect(hexadecimal).to.equal('4');
  });
  it('Convert 5 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('5');
    expect(hexadecimal).to.equal('5');
  });
  it('Convert 6 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('6');
    expect(hexadecimal).to.equal('6');
  });
  it('Convert 7 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('7');
    expect(hexadecimal).to.equal('7');
  });
  it('Convert 8 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('8');
    expect(hexadecimal).to.equal('8');
  });
  it('Convert 9 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('9');
    expect(hexadecimal).to.equal('9');
  });
  it('Convert 10 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('10');
    expect(hexadecimal).to.equal('A');
  });
  it('Convert 11 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('11');
    expect(hexadecimal).to.equal('B');
  });
  it('Convert 12 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('12');
    expect(hexadecimal).to.equal('C');
  });
  it('Convert 13 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('13');
    expect(hexadecimal).to.equal('D');
  });
  it('Convert 14 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('14');
    expect(hexadecimal).to.equal('E');
  });
  it('Convert 15 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('15');
    expect(hexadecimal).to.equal('F');
  });
  it('Convert 25 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('25');
    expect(hexadecimal).to.equal('19');
  });
  it('Convert 250 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('250');
    expect(hexadecimal).to.equal('FA');
  });
  it('Convert 2500 to hexadecimal', () => {
    const hexadecimal = decToHex.convert('2500');
    expect(hexadecimal).to.equal('9C4');
  });
});
