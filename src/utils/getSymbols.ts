import symbols from '../data/symbols';

function getSymbols(base: number): string {
  return symbols.substr(0, base);
}

export default getSymbols;
