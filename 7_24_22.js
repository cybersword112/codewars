function reverseWords(str) {
    //   split str by spaces, map over array and split/rev/join each individual word and return total string again
      return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ')
    }