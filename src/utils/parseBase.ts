import BASE_MAP from '../data/base';
import find from './find';

function parseBase(key: number | string): number {
  return parseInt(find(BASE_MAP)(key.toString().toLowerCase())[0][2], 10);
}

export default parseBase;
