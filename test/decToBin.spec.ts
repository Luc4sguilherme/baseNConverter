import { expect } from 'chai';
import Converter from '../src/index';

const decToBin = new Converter(10, 2);

describe('Convert from decimal to binary', () => {
  it('The argument is a letter', () => {
    expect(() => decToBin.convert('a')).to.throw(Error, 'Invalid number!');
  });
  it('Convert 0 to binary', () => {
    const binary = decToBin.convert('0');
    expect(binary).to.equal('0');
  });
  it('Convert 1 to binary', () => {
    const binary = decToBin.convert('1');
    expect(binary).to.equal('1');
  });
  it('Convert 2 to binary', () => {
    const binary = decToBin.convert('2');
    expect(binary).to.equal('10');
  });
  it('Convert 3 to binary', () => {
    const binary = decToBin.convert('3');
    expect(binary).to.equal('11');
  });
  it('Convert 4 to binary', () => {
    const binary = decToBin.convert('4');
    expect(binary).to.equal('100');
  });
  it('Convert 5 to binary', () => {
    const binary = decToBin.convert('5');
    expect(binary).to.equal('101');
  });
  it('Convert 6 to binary', () => {
    const binary = decToBin.convert('6');
    expect(binary).to.equal('110');
  });
  it('Convert 7 to binary', () => {
    const binary = decToBin.convert('7');
    expect(binary).to.equal('111');
  });
  it('Convert 8 to binary', () => {
    const binary = decToBin.convert('8');
    expect(binary).to.equal('1000');
  });
  it('Convert 9 to binary', () => {
    const binary = decToBin.convert('9');
    expect(binary).to.equal('1001');
  });
  it('Convert 10 to binary', () => {
    const binary = decToBin.convert('10');
    expect(binary).to.equal('1010');
  });
  it('Convert 11 to binary', () => {
    const binary = decToBin.convert('11');
    expect(binary).to.equal('1011');
  });
  it('Convert 12 to binary', () => {
    const binary = decToBin.convert('12');
    expect(binary).to.equal('1100');
  });
  it('Convert 13 to binary', () => {
    const binary = decToBin.convert('13');
    expect(binary).to.equal('1101');
  });
  it('Convert 14 to binary', () => {
    const binary = decToBin.convert('14');
    expect(binary).to.equal('1110');
  });
  it('Convert 15 to binary', () => {
    const binary = decToBin.convert('15');
    expect(binary).to.equal('1111');
  });
  it('Convert 25 to binary', () => {
    const binary = decToBin.convert('25');
    expect(binary).to.equal('11001');
  });
  it('Convert 250 to binary', () => {
    const binary = decToBin.convert('250');
    expect(binary).to.equal('11111010');
  });
  it('Convert 2500 to binary', () => {
    const binary = decToBin.convert('2500');
    expect(binary).to.equal('100111000100');
  });
});
