function enough(cap, on, wait) {
    //  create a variable space holding difference in capacity and people on
    const space = cap - on
    // compare space to wait, if space more then return 0,
    // if space less then return wait minus space 
    return space >= wait ? 0 : wait - space
  }