String.prototype.toAlternatingCase = function () {
  return this.split("").map(thing =>  thing === thing.toUpperCase() ? thing.toLowerCase() : thing.toUpperCase()).join("")
  }