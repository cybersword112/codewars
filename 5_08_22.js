function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((item,index,arr)=> geese.indexOf(item) == -1 )
  // return an array containing all of the strings in the input array except those that match strings in geese
};