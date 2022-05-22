function bouncingBall(h,  bounce,  window) {
    if (h > 0 && bounce > 0 && bounce < 1 && window < h){
      let height = h
      let count = -1
      while(height > window){
        count += 2
        height = height * bounce
        console.log(height, count)
        }
      return count
    }else{
      return -1
    }
  }