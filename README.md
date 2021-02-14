# Usage

### Binary to Decimal

```sh
import Converter from '../src/index';

const binToDec = new Converter(2, 10);

console.log(binToDec.convert('1111')); // '15'
```

### Binary to Hexadecimal

```sh
import Converter from '../src/index';

const binToHex = new Converter('binary', 'hexadecimal');

console.log(binToHex.convert('1111')); // 'F'
```

### Binary to Octal

```sh
import Converter from '../src/index';

const binToOctal = new Converter('bin', 8);

console.log(binToOctal.convert('1111')); // '17'
```

### Binary to Hexatrigesimal

```sh
import Converter from '../src/index';

const binToHexatri = new Converter(2, 'hexatrige');

console.log(binToHexatri.convert('100011')); // 'Z'
```

### Decimal to Hexadecimal

```sh
import Converter from '../src/index';

const decToHex = new Converter(10, 16);

console.log(decToHex.convert('10')); // 'A'
```

### Octal to Decimal

```sh
import Converter from '../src/index';

const octalToDec = new Converter('octal', 'decimal');

console.log(octalToDec.convert('10')); // '8'
```

## Run tests

```sh
npm run test
```

## Author

👤 **Lucas Guilherme**

- Github: [@Luc4sguilherme](https://github.com/Luc4sguilherme)


## 📝 License

Copyright © 2021 [Lucas Guilherme](https://github.com/Luc4sguilherme).

This project is [MIT](https://github.com/Luc4sguilherme/baseNConverter/blob/master/LICENSE) licensed.

---
