import getSymbols from './utils/getSymbols';
import parseBase from './utils/parseBase';

interface Converter {
  fromBase: number;
  toBase: number;
}

class Converter {
  /**
   * Numeric base range supported [2-36]
   */
  constructor(fromBase: number | string, toBase: number | string) {
    this.fromBase = parseBase(fromBase);
    this.toBase = parseBase(toBase);

    if (this.fromBase > 36 || this.toBase > 36) {
      throw new Error('Numeric base must be between 2 and 36!');
    }

    if (this.fromBase === this.toBase) {
      throw new Error('Numeric base must be different!');
    }
  }

  convert(number: string): string {
    const symbols = getSymbols(this.fromBase);
    const regex = new RegExp(`^[${symbols}]+$`);

    if (number === undefined || number.length === 0) {
      throw new Error('Empty argument!');
    }

    if (typeof number !== 'string') {
      throw new Error('Incorrect input data type!');
    }

    if (!regex.test(number)) {
      throw new Error('Invalid number!');
    }

    return parseInt(number, this.fromBase).toString(this.toBase).toUpperCase();
  }
}

export default Converter;
