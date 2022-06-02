function reverseLetter(str) {
    return str.split('').filter(item=> /^[a-zA-Z]+$/.test(item) ).reverse().join('')
    }