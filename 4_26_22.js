function findNeedle(haystack) {
  return haystack ? (`found the needle at position ${haystack.indexOf("needle")}`) : "Your function didn't return anything"
}