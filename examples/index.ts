import Converter from '../src/index';

const binToDec = new Converter(2, 10);
console.log(binToDec.convert('1111'));

const binToHex = new Converter('binary', 'hexadecimal');
console.log(binToHex.convert('1111'));

const binToOctal = new Converter('bin', 8);
console.log(binToOctal.convert('1111'));

const binToHexatri = new Converter(2, 'hexatrige');
console.log(binToHexatri.convert('100011'));

const decToHex = new Converter(10, 16);
console.log(decToHex.convert('10'));

const octalToDec = new Converter('octal', 'decimal');
console.log(octalToDec.convert('10'));
