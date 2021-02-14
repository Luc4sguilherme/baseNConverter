import { expect } from 'chai';
import Converter from '../src/index';

const hexaToDec = new Converter(16, 10);

describe('Convert from hexadecimal to decimal', () => {
  it('Convert 0 to decimal', () => {
    const decimal = hexaToDec.convert('0');
    expect(decimal).to.equal('0');
  });
  it('Convert 1 to decimal', () => {
    const decimal = hexaToDec.convert('1');
    expect(decimal).to.equal('1');
  });
  it('Convert 2 to decimal', () => {
    const decimal = hexaToDec.convert('2');
    expect(decimal).to.equal('2');
  });
  it('Convert 3 to decimal', () => {
    const decimal = hexaToDec.convert('3');
    expect(decimal).to.equal('3');
  });
  it('Convert 4 to decimal', () => {
    const decimal = hexaToDec.convert('4');
    expect(decimal).to.equal('4');
  });
  it('Convert 5 to decimal', () => {
    const decimal = hexaToDec.convert('5');
    expect(decimal).to.equal('5');
  });
  it('Convert 6 to decimal', () => {
    const decimal = hexaToDec.convert('6');
    expect(decimal).to.equal('6');
  });
  it('Convert 7 to decimal', () => {
    const decimal = hexaToDec.convert('7');
    expect(decimal).to.equal('7');
  });
  it('Convert 8 to decimal', () => {
    const decimal = hexaToDec.convert('8');
    expect(decimal).to.equal('8');
  });
  it('Convert 9 to decimal', () => {
    const decimal = hexaToDec.convert('9');
    expect(decimal).to.equal('9');
  });
  it('Convert A to decimal', () => {
    const decimal = hexaToDec.convert('A');
    expect(decimal).to.equal('10');
  });
  it('Convert B to decimal', () => {
    const decimal = hexaToDec.convert('B');
    expect(decimal).to.equal('11');
  });
  it('Convert C to decimal', () => {
    const decimal = hexaToDec.convert('C');
    expect(decimal).to.equal('12');
  });
  it('Convert D to decimal', () => {
    const decimal = hexaToDec.convert('D');
    expect(decimal).to.equal('13');
  });
  it('Convert E to decimal', () => {
    const decimal = hexaToDec.convert('E');
    expect(decimal).to.equal('14');
  });
  it('Convert F to decimal', () => {
    const decimal = hexaToDec.convert('F');
    expect(decimal).to.equal('15');
  });
  it('Convert 10 to decimal', () => {
    const decimal = hexaToDec.convert('10');
    expect(decimal).to.equal('16');
  });
  it('Convert 64 to decimal', () => {
    const decimal = hexaToDec.convert('64');
    expect(decimal).to.equal('100');
  });
  it('Convert 3039 to decimal', () => {
    const decimal = hexaToDec.convert('3039');
    expect(decimal).to.equal('12345');
  });
});
