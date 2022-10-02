const BigNumber = require('bignumber.js');

const upArray = arr =>
  arr.length === 0 || arr.filter(x => x < 0 || x > 9).length > 0
    ? null
    : (new BigNumber(arr.join('')).plus(1))
        .toPrecision()
        .split('')
        .map(Number);

        //had to look at so'ln for this one, could not get Bigint to work as I planned.