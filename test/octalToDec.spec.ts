import { expect } from 'chai';
import Converter from '../src/index';

const octalToDec = new Converter(8, 10);

describe('Convert from octal to decimal', () => {
  it('The argument is a letter', () => {
    expect(() => octalToDec.convert('a')).to.throw(Error, 'Invalid number!');
  });
  it('Convert 0 to decimal', () => {
    const decimal = octalToDec.convert('0');
    expect(decimal).to.equal('0');
  });
  it('Convert 1 to decimal', () => {
    const decimal = octalToDec.convert('1');
    expect(decimal).to.equal('1');
  });
  it('Convert 2 to decimal', () => {
    const decimal = octalToDec.convert('2');
    expect(decimal).to.equal('2');
  });
  it('Convert 3 to decimal', () => {
    const decimal = octalToDec.convert('3');
    expect(decimal).to.equal('3');
  });
  it('Convert 4 to decimal', () => {
    const decimal = octalToDec.convert('4');
    expect(decimal).to.equal('4');
  });
  it('Convert 5 to decimal', () => {
    const decimal = octalToDec.convert('5');
    expect(decimal).to.equal('5');
  });
  it('Convert 6 to decimal', () => {
    const decimal = octalToDec.convert('6');
    expect(decimal).to.equal('6');
  });
  it('Convert 7 to decimal', () => {
    const decimal = octalToDec.convert('7');
    expect(decimal).to.equal('7');
  });
  it('Convert 10 to decimal', () => {
    const decimal = octalToDec.convert('10');
    expect(decimal).to.equal('8');
  });
  it('Convert 20 to decimal', () => {
    const decimal = octalToDec.convert('20');
    expect(decimal).to.equal('16');
  });
  it('Convert 144 to decimal', () => {
    const decimal = octalToDec.convert('144');
    expect(decimal).to.equal('100');
  });
  it('Convert 30071 to decimal', () => {
    const decimal = octalToDec.convert('30071');
    expect(decimal).to.equal('12345');
  });
});
