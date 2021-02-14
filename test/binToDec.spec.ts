import { expect } from 'chai';
import Converter from '../src/index';

const binToDec = new Converter(2, 10);

describe('Convert from binary to decimal', () => {
  it('The argument is a decimal number', () => {
    expect(() => binToDec.convert('123')).to.throw(Error, 'Invalid number!');
  });
  it('The argument is a letter', () => {
    expect(() => binToDec.convert('a')).to.throw(Error, 'Invalid number!');
  });
  it('Convert 0000 to decimal', () => {
    const decimal = binToDec.convert('0000');
    expect(decimal).to.equal('0');
  });
  it('Convert 0001 to decimal', () => {
    const decimal = binToDec.convert('0001');
    expect(decimal).to.equal('1');
  });
  it('Convert 0010 to decimal', () => {
    const decimal = binToDec.convert('0010');
    expect(decimal).to.equal('2');
  });
  it('Convert 0011 to decimal', () => {
    const decimal = binToDec.convert('0011');
    expect(decimal).to.equal('3');
  });
  it('Convert 0100 to decimal', () => {
    const decimal = binToDec.convert('0100');
    expect(decimal).to.equal('4');
  });
  it('Convert 0101 to decimal', () => {
    const decimal = binToDec.convert('0101');
    expect(decimal).to.equal('5');
  });
  it('Convert 0110 to decimal', () => {
    const decimal = binToDec.convert('0110');
    expect(decimal).to.equal('6');
  });
  it('Convert 0111 to decimal', () => {
    const decimal = binToDec.convert('0111');
    expect(decimal).to.equal('7');
  });
  it('Convert 1000 to decimal', () => {
    const decimal = binToDec.convert('1000');
    expect(decimal).to.equal('8');
  });
  it('Convert 1001 to decimal', () => {
    const decimal = binToDec.convert('1001');
    expect(decimal).to.equal('9');
  });
  it('Convert 1010 to decimal', () => {
    const decimal = binToDec.convert('1010');
    expect(decimal).to.equal('10');
  });
  it('Convert 1011 to decimal', () => {
    const decimal = binToDec.convert('1011');
    expect(decimal).to.equal('11');
  });
  it('Convert 1100 to decimal', () => {
    const decimal = binToDec.convert('1100');
    expect(decimal).to.equal('12');
  });
  it('Convert 1101 to decimal', () => {
    const decimal = binToDec.convert('1101');
    expect(decimal).to.equal('13');
  });
  it('Convert 1110 to decimal', () => {
    const decimal = binToDec.convert('1110');
    expect(decimal).to.equal('14');
  });
  it('Convert 1111 to decimal', () => {
    const decimal = binToDec.convert('1111');
    expect(decimal).to.equal('15');
  });
  it('Convert 11001 to decimal', () => {
    const decimal = binToDec.convert('11001');
    expect(decimal).to.equal('25');
  });
  it('Convert 11111010 to decimal', () => {
    const decimal = binToDec.convert('11111010');
    expect(decimal).to.equal('250');
  });
  it('Convert 100111000100 to decimal', () => {
    const decimal = binToDec.convert('100111000100');
    expect(decimal).to.equal('2500');
  });
});
