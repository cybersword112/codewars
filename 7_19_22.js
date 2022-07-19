function maxSequence(arr) {
    var max = 0
    
    for (var i = 0; i < arr.length; i++) {
      for (var sum = 0, j = i; j < arr.length; j++) {
        sum += arr[j]
        if (sum > max) max = sum
      }
    }
    
    return max
  }