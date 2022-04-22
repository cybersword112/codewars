function arrayDiff(a, b) {
  return a.filter(thinga=> b.indexOf(thinga) == -1 ? true : false)
}